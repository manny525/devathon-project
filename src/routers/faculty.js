const express = require('express')
const multer = require('multer')
const sharp = require('sharp')
const User = require('../models/user')
const Faculty = require('../models/faculty')
const auth = require('../middleware/authFaculty')
const router = new express.Router()

router.post('/faculty/register', async (req, res) => {
    try {
        console.log(req.body);
        const faculty = new Faculty(req.body)
        await faculty.save()
        const token = await faculty.generateAuthToken()
        console.log(faculty);
        res.send({
            token
        });
    } catch (e) {
        res.status(400).send(e)
    }
})

router.post('/faculty/login', async (req, res) => {
    try{
        const faculty = await Faculty.findByCredentials(req.body.email, req.body.password)
        const token = await faculty.generateAuthToken()
        res.send({ faculty, token })
    } catch(e) {
        res.status(400).send()
    }
})

router.post('/faculty/logout', auth, async (req, res) => {
    try {
        req.faculty.tokens = req.faculty.tokens.filter((token) => {
            return token.token !== req.token
        })
        await req.faculty.save()
        res.send()
    } catch (e) {
        res.status(500).send()
    }
})

router.get('/faculty/me', auth, async (req, res) => {
    res.send(req.faculty)
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

router.post('/faculty/me/avatar', auth, upload.single('avatar'), async (req, res) => {
    const buffer = await sharp(req.file.buffer).png().resize({ width: 250, height: 250 }).toBuffer()
    req.faculty.avatar = buffer
    await req.faculty.save()
    res.send()    
}, (error, req, res, next) => {
    res.status(400).send({ error: error.message })
})

router.get('/faculty/:id/avatar', async (req, res) => {
    try {
        const faculty = await Faculty.findById(req.params.id)
        if (!faculty || !faculty.avatar) {
            throw new Error()
        }
        res.set('Content-Type', 'image/png')
        res.send(faculty.avatar)
    } catch (e) {
        res.status(404).send()
    }
})
// router.delete('/faculty/me/avatar', auth, async (req, res) => {
//     try {
//         req.faculty.avatar = undefined
//         await req.faculty.save()
//         res.send(req.faculty)
//     } catch (e) {
//         res.status(500).send()
//     }
// })

module.exports = router