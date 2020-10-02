const jwt = require('jsonwebtoken')
const Faculty = require('../models/faculty') 

const auth = async (req, res, next) => {
    try {
        const token = req.header('Authorization').replace('Bearer ', '')
        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        const faculty = await Faculty.findOne({ _id: decoded._id, 'tokens.token': token })

        if (!faculty) {
            throw new Error()
        }

        req.faculty = faculty
        req.token = token
        next()
    } catch (e) {
        res.status(401).send({error: 'Please authenticate'})
    }
}

module.exports = auth