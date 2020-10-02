const mongoose = require('mongoose')
const validator = require('validator')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')

const facultySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        unique: true,
        required: true,
        trim: true,
        lowercase: true,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error('Invalid email')
            }
        }
    },
    password: {
        type: String,
        trim: true,
        minlength: 7,
        validate(value) {
            if (value.toLowerCase().includes('password')) {
                throw new Error ('Your password cannot be *password*')
            }
        }
    },
    courses: [{
        course: mongoose.Schema.Types.ObjectId
    }],
    tokens: [{
        token: {
            type: String,
            required: true
        }
    }],
    avatar: {
        type: Buffer
    }
}, {
    timestamps: true
})

facultySchema.methods.generateAuthToken = async function () {
    const faculty = this
    const token = jwt.sign({ _id: faculty._id.toString() }, process.env.JWT_SECRET)
    faculty.tokens = faculty.tokens.concat({ token })
    await faculty.save()
    return token
}

facultySchema.statics.findByCredentials = async (email, password) => {
    const faculty = await Faculty.findOne({ email })

    if (!faculty) {
        throw new Error('Unable to login')
    }
    const isMatch = await bcrypt.compare(password, faculty.password)

    if (!isMatch) {
        throw new Error('Unable to login')
    }

    return faculty
}

facultySchema.methods.toJSON = function () {
    const faculty = this
    const facultyObject = faculty.toObject()

    delete facultyObject.password
    delete facultyObject.tokens

    return facultyObject
}

//hash the plain text password before saving
facultySchema.pre('save', async function (next) {
    const user = this
    if (user.isModified('password')) {
        user.password = await bcrypt.hash(user.password, 8)
        console.log(user.password)
    }
    next()
})

const Faculty = mongoose.model('Faculty', facultySchema)

module.exports = Faculty