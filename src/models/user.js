const mongoose = require('mongoose')
const validator = require('validator')
const jwt = require('jsonwebtoken')

const userSchema = new mongoose.Schema({
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
    rollNo: {
        type: String,
        required: true,
        unique: true,
    },
    regNo: {
        type: String,
        required: true,
        unique: true,
    },
    gender: {
        type: Number,
        required: true
    },
    degree: {
        type: String,
        required: true
    },
    mobileNo: {
        type: String,
        required:true,
        validate(value) {
            if (value.length != 10) {
                throw new Error ('Invalid mobile number')
            }
        }
    },
    address: {
        houseName: {
            type: String
        },
        houseNo: {
            type: String
        }, 
        street: {
            type: String
        }, 
        city: {
            type: String
        }, 
        state: {
            type: String
        }, 
        country: {
            type: String
        }
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
    courses: [mongoose.Schema.Types.ObjectId],
    registrationStatus: {
        type: Number,
        default: 0
    },
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

userSchema.methods.generateAuthToken = async function () {
    const user = this
    const token = jwt.sign({ _id: user._id.toString() }, process.env.JWT_SECRET)
    user.tokens = user.tokens.concat({ token })
    await user.save()
    return token
}

userSchema.statics.findByCredentials = async (email, password) => {
    const user = await User.findOne({ email })
    if (user.registrationStatus == 0) {
        throw new Error('Unable to login')
    }
    if (user.registrationStatus == 1) {
        if (user.password != password) {
            throw new Error('Unable to login')
        }
        else
            return user;
    }
    
    if (!user) {
        throw new Error('Unable to login')
    }
    const isMatch = await bcrypt.compare(password, user.password)

    if (!isMatch) {
        throw new Error('Unable to login')
    }

    return user
}

userSchema.methods.toJSON = function () {
    const user = this
    const userObject = user.toObject()

    delete userObject.password
    delete userObject.tokens

    return userObject
}

const User = mongoose.model('User', userSchema)

module.exports = User