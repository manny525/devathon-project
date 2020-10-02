const jwt = require('jsonwebtoken')
const FacultyAdvisor = require('../models/facultyAdvisor') 

const auth = async (req, res, next) => {
    try {
        const token = req.header('Authorization').replace('Bearer ', '')
        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        const facultyAdvisor = await FacultyAdvisor.findOne({ _id: decoded._id, 'tokens.token': token })

        if (!facultyAdvisor) {
            throw new Error()
        }

        req.facultyAdvisor = facultyAdvisor
        req.token = token
        next()
    } catch (e) {
        res.status(401).send({error: 'Please authenticate'})
    }
}

module.exports = auth