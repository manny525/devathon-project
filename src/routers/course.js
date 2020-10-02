const express = require('express')
const Course = require('../models/course')
const authFaculty = require('../middleware/authFaculty')
const authStudent = require('../middleware/authUser')
const router = new express.Router()

router.post('/courses/new', authFaculty, async (req, res) => {
    try {
        const faculty = req.faculty;
        const course = new Course({
            ...req.body,
            facultyId: faculty._id,
            facultyName: faculty.name
        })
        await course.save()
        faculty.courses.push(course._id);
        await faculty.save();
        res.send({ course });
    } catch (e) {
        res.status(400).send(e)
    }
})

router.get('/courses/faculty', authFaculty, async (req, res) => {
    try {
        const courses = await Course.find({ facultyId: req.faculty._id })
        console.log(courses);
        res.send({ courses });
    } catch (e) {
        res.status(400).send(e);
    }
})

const getCourse = async (courseId) => {
    const course = await Course.findById(courseId);
    console.log(course);
    return course;
}

router.post('/courses/student', authStudent, async (req, res) => {
    try {
        const promises = req.user.courses.map(async courseId => await getCourse(courseId));
        const courses = await Promise.all(promises)
        res.status(200).send({ courses });
    } catch (e) {
        res.status(400).send(e);
    }
})

module.exports = router