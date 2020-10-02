const mongoose = require('mongoose');

const objectiveQuesSchema = new mongoose.Schema({
    questionId: mongoose.Schema.Types.ObjectId,
    answerNum: [Number],
    answer: String,
    status: Number,
    score: Number
});

const subjectiveQuesSchema = new mongoose.Schema({
    questionId: mongoose.Schema.Types.ObjectId,
    answer: String,
    answerDoc: Buffer,
    status: Number,
    score: Number
});

const submissionSchema = new mongoose.Schema({
    testId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    courseId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    }, 
    studentId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    objectiveQues: [objectiveQuesSchema],
    subjectiveQues: [subjectiveQuesSchema],
    objectiveScore: Number,
    subjectiveScore: Number,
    score: Number
});

const Submission = mongoose.model('Submission', submissionSchema)

module.exports = Submission;