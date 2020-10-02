const express = require('express');
const Test = require('../models/examQues');
const router = new express.Router();
const authStudent = require('../middleware/authUser');
const authFaculty = require('../middleware/authFaculty');
const Submission = require('../models/submission');

router.post('/submission/new', authStudent, async (req, res) => {
    try { 
        const test = await Test.findById(req.body.testId);
        const submission = new Submission({
            testId: req.body.testId,
            courseId: req.body.courseId,
            studentId: req.body.studentId,
            objectiveQues: req.body.objectiveQues,
            subjectiveQues: req.body.subjectiveQues,
            objectiveScore: 0
        });
        let quesMap = new Map();
        
        test.objectiveQues.foreach(ques => {
            quesMap.set(ques._id, {
                ques
            })
        });
        
        submission.objectiveQues.foreach((ques) => {
            if (ques.quesType == 1 || ques.quesType == 4 || ques.quesType == 6) {
                question = quesMap.get(ques._id);
                if (question.answerNum[0] == ques.answer[0]) {
                    submission.objectiveScore = submission.objectiveScore + question.score;
                }
            }
            else if (ques.quesType == 2) {
                question = quesMap.get(ques._id);
                question.answerNum.foreach((answer, index) => {
                    if (answer == ques.answer[index]) {
                        submission.objectiveScore = submission.objectiveScore + (question.score/ques.answer.length);
                    }
                })
            }
            else if (ques.quesType == 3) {
                question = quesMap.get(ques._id);
                let allCorrrect = true
                question.answerNum.foreach((answer, index) => {
                    if (answer != ques.answer[index]) {
                        allCorrrect = false;
                        break;
                    }
                })
                if (allCorrrect) {
                    submission.objectiveScore = submission.objectiveScore + question.score;
                }
            }
            else if (ques.quesType == 5) {
                question = quesMap.get(ques._id);
                if (question.answer == ques.answer) {
                    submission.objectiveScore = submission.objectiveScore + question.score;
                }
            }
            //add subjective question evaluation
        })
    } catch (e) {
        res.status(400).send(e)
    }
})

router.post('/submission/get/faculty', authFaculty, async (req, res) => {
    try {
        const submissions = await Submission.find({ studentId: req.body.studentId, courseId: req.body.courseId });
        let results;
        submissions.foreach(async (sub) => {
            const test = await Test.findById(sub.testId);
            let quesMap = new Map();
            test.objectiveQues.foreach(ques => {
                quesMap.set(ques._id, {
                    ques
                })
            });
            let result = {
                objectiveQues: [],
                score: sub.score
            };
            sub.objectiveQues.foreach(ques => {
                result.objectiveQues.push({
                    ques: quesMap.get(ques._id),
                    status: ques.status
                });
            })
            results.push(result);
        })
        res.send({ results });
    } catch (e) {
        res.status(400).send(e)
    }
})

router.post('/submission/get/student', authStudent, async (req, res) => {
    try {
        const submissions = await Submission.find({studentId: req.body.studentId, courseId: req.body.courseId});
        let results;
        submissions.foreach(async (sub) => {
            const test = await Test.findById(sub.testId);
            let quesMap = new Map();
            test.objectiveQues.foreach(ques => {
                quesMap.set(ques._id, {
                    ques
                })
            });
            let result = {
                objectiveQues: [],
                score: sub.score
            };
            sub.objectiveQues.foreach(ques => {
                result.objectiveQues.push({
                    ques: quesMap.get(ques._id),
                    status: ques.status
                });
            })
            results.push(result);
        })
        res.send({ results });
    } catch (e) {
        res.status(400).send(e)
    }
})

module.exports = router