const express = require('express');
const Test = require('../models/examQues');
const router = new express.Router();
const authFaculty = require('../middleware/authFaculty');
const authStudent = require('../middleware/authUser');

router.post('/tests/new', authFaculty, async (req, res) => {
    try { 
        const test = new Test({
            courseId: req.body.courseId,
            title: req.body.title,
            startDateTime: req.body.startDateTime,
            endDateTime: req.body.endDateTime,
            duration: req.body.duration,
            window: req.body.window
        })
        await test.save()
        res.send({
            status: 'ok'
        });
    } catch (e) {
        res.status(400).send(e)
    }
})

router.post('/tests/addObj', authFaculty, async (req, res) => {
    try {
        const test = await Test.findById(req.body._id);
        let ques;
        if (req.body.question.quesType <= 3) {
            ques = {
                quesType: req.body.question.quesType,
                question: req.body.question.text,
                options: req.body.question.options,
                answerNum: req.body.question.answer,
                score: req.body.question.score  
            }
        }
        else if (req.body.question.quesType == 4) {
            ques = {
                quesType: req.body.question.quesType,
                question: req.body.question.text,
                answerNum: req.body.question.answer,
                score: req.body.question.score  
            }
        }
        else if (req.body.question.quesType == 5) {
            ques = {
                quesType: req.body.question.quesType,
                question: req.body.question.text,
                answer: req.body.question.answer.toLowerCase(),
                score: req.body.question.score  
            }
        }
        else if (req.body.question.quesType == 6) {
            ques = {
                quesType: req.body.question.quesType,
                question: req.body.question.text,
                answerNum: req.body.question.answer, //1 true 2 false
                score: req.body.question.score  
            }
        }
        test.objectiveQues.push(ques);
        res.send({status: 'ok'});
    } catch (e) {
        res.status(400).send(e)
    }
})

router.post('/tests/addSubj', authFaculty, async (req, res) => {
    try {
        const test = await Test.findById(req.body._id);
        const ques = {
            quesType: req.body.question.quesType,
            question: req.body.question.text,
            score: req.body.question.score  
        }
        test.subjectiveQues.push(ques);
        res.send({status: 'ok'});
    } catch (e) {
        res.status(400).send(e)
    }
})

function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
  
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
  
    return array;
}

router.post('/tests/get', authStudent, async (req, res) => {
    try { 
        const allTests = await Test.find({ courseId: req.body.courseId });
        let tests
        allTests.forEach(test => {
            tests.push({
                testId: test._id,
                title: test.title,
                startDateTime: test.startDateTime,
                endDateTime: test.endDateTime,
                duration: test.duration,
                window: test.window,
                objectiveQuesLen: test.objectiveQues.length,
                subjectiveQuesLen: test.subjectiveQues.length
            })
        });
        res.send({ tests });
    } catch (e) {
        res.status(400).send(e)
    }
})

router.post('/tests/detail', authStudent, async (req, res) => {
    try {
        const test = await Test.findById(req.body.testId);
        test.objectiveQues = shuffle(test.objectiveQues);
        test.subjectiveQues = shuffle(test.subjectiveQues);
        res.status(200).send(test);
    } catch(e) {
        res.status(404).send(e)
    }
})

module.exports = router