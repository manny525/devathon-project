const express = require('express')
require('./db/mongoose')
const userRouter = require('./routers/user')
const facultyAdvisorRouter = require('./routers/facultyAdvisor')
const facultyRouter = require('./routers/faculty')
const testRouter = require('./routers/examQues')
const courseRouter = require('./routers/course')
const submissionRouter = require('./routers/submission')


const app = express()

app.use(express.json());
app.use(userRouter);
app.use(facultyAdvisorRouter);
app.use(facultyRouter);
app.use(courseRouter);
app.use(testRouter);
app.use(submissionRouter);

module.exports = app