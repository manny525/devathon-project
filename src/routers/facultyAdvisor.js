const express = require('express')
const multer = require('multer')
const sharp = require('sharp')
const User = require('../models/user')
const FacultyAdvisor = require('../models/facultyAdvisor')
const auth = require('../middleware/authFacAd')
const router = new express.Router()
const { sendSuccessEmail, sendFailureEmail } = require('../emails/account')

router.post('/facultyAdvisor/register', async (req, res) => {
    const facultyAdvisor = new FacultyAdvisor(req.body)
    try {
        await facultyAdvisor.save()
        const token = await facultyAdvisor.generateAuthToken()
        const requests = await User.find({ registrationStatus: false, 
            degree: facultyAdvisor.degree, 
            branch: facultyAdvisor.branch, 
            year: facultyAdvisor.year
        }) 
        console.log(requests); 
        res.send({
            facultyAdvisor,
            token,
            requests
        });
    } catch (e) {
        res.status(400).send(e)
    }
})

router.post('/facultyAdvisor/login', async (req, res) => {
    try{
        const facultyAdvisor = await FacultyAdvisor.findByCredentials(req.body.email, req.body.password)
        const requests = await User.find({ registrationStatus: false, 
            degree: facultyAdvisor.degree, 
            branch: facultyAdvisor.branch, 
            year: facultyAdvisor.year
        }) 
        res.send({
            facultyAdvisor,
            requests
        });
    } catch(e) {
        res.status(400).send()
    }
})

router.post('/facultyAdvisor/logout', auth, async (req, res) => {
    try {
        req.facultyAdvisor.tokens = req.facultyAdvisor.tokens.filter((token) => {
            return token.token !== req.token
        })
        await req.facultyAdvisor.save()
        res.send()
    } catch (e) {
        res.status(500).send()
    }
})

router.post('/facultyAdvisor/updateRequest', auth, async (req, res) => {
    try {
        const user = await User.findById(req.body.user._id);
        console.log(user);
        if (req.body.approvalStatus) {
            user.password = user._id;
            user.registrationStatus = 1;
            await user.save();
            sendSuccessEmail(user.email, user.password);
        }
        else {
            sendFailureEmail(user.email)
            await User.findByIdAndDelete(user._id);
        }
        res.status(200).send({status: 'ok'});
    } catch (e) {
        res.status(500).send()
    }
})

//profile pic
const upload = multer({
    limits: {
        fileSize: 1000000
    },
    fileFilter(req, file, cb) {
        if (!file.originalname.match(/\.(jpg|jpeg|png)$/)) {
            return cb(new Error('Please upload an image'))
        }
        cb(undefined, true)
    }
})

router.post('/facultyAdvisor/me/avatar', auth, upload.single('avatar'), async (req, res) => {
    const buffer = await sharp(req.file.buffer).png().resize({ width: 250, height: 250 }).toBuffer()
    req.facultyAdvisor.avatar = buffer
    await req.facultyAdvisor.save()
    res.send()    
}, (error, req, res, next) => {
    res.status(400).send({ error: error.message })
})

router.get('/facultyAdvisor/:id/avatar', async (req, res) => {
    try {
        const facultyAdvisor = await User.findById(req.params.id)
        if (!facultyAdvisor || !facultyAdvisor.avatar) {
            throw new Error()
        }
        res.set('Content-Type', 'image/png')
        res.send(facultyAdvisor.avatar)
    } catch (e) {
        res.status(404).send()
    }
})

module.exports = router