const mongoose = require('mongoose')

const courseSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    degree: {
        type: String,
        required: true
    },
    branch: {
        // type: mongoose.Schema.Types.ObjectId,
        type: String,
        required: true
    },
    year: {
        type: Number,
        required: true
    },
    facultyId: {
        type: mongoose.Schema.Types.ObjectId
    },
    facultyName: {
        type: String,
        required: true
    }
})

const Course = mongoose.model('Course', courseSchema)

module.exports = Course;