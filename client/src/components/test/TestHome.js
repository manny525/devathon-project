import React, { useState } from 'react';
import Header from './Header';
import '../style/style.css';
import '../style/style_copy.css';
import '../style/bootstrap.css'
import '../style/bootstrap.min.css'
import '../style/themify-icons.css'
import '../style/animate.css'
import NavigationBar from './NavigationBar';
import MCQ1 from './MCQ1';
import MCQ2 from './MCQ2';
import MCQ3 from './MCQ3';
import IntegerType from './IntegerType';
import FillBlank from './FillBlank';
import Assert from './Assert';
import Subjective from './Subjective';
import Summary from './Summary';
const Test = (props) => {
    const [currQues, setCurrQues] = useState(1);
    const [totalQues] = useState(props.test.objectiveQues.length + props.test.subjectiveQues.length);

    const getQuestions = (questions = []) => {
        const questionIds = [];
        questions.map((question) => {
            const ques = {
                _id: question._id,
                quesType: question.quesType,
                score: question.score
            };
            questionIds.push(ques);
        })
        return questionIds;
    }

    const onNext = () => {
        if (currQues != props.test.objectiveQues.length) {
            setCurrQues(currQues + 1);
        }
    }

    const [submission, setSubmission] = useState({
        testId: props.test._id,
        courseId: props.test.courseId,
        objectiveQues: getQuestions(props.test.objectiveQues),
        subjectiveQues: getQuestions(props.test.subjectiveQues)
    });

    const setAnswer = (index, answer = "", quesType, answerDoc = "") => {
        if (quesType <= 6) {
            let questions = [...submission.objectiveQues]
            questions[index].answer = answer;
            console.log(questions[index])
            setSubmission({
                ...submission,
                objectiveQues: questions
            })
        }
        else {
            let questions = [...submission.subjectiveQues]
            if (answer)
                questions[index].answer = answer;
            if (answerDoc)
                questions[index].answerDoc = answerDoc;
            setSubmission({
                ...submission,
                subjectiveQues: questions
            })
        }
    }

    const getAttempted = () => {
        let attempted = 0;
        submission.objectiveQues.map((ques) => {
            if (ques.answer) {
                attempted++;
            }
        })
        submission.subjectiveQues.map((ques) => {
            if (ques.answer || ques.answerDoc) {
                attempted++;
            }
        })
        return attempted;
    }

    const displayQues = () => {
        switch (props.test.objectiveQues[currQues - 1].quesType) {
            case 1:
                return (<MCQ1
                    key={currQues - 1}
                    index={currQues - 1}
                    ques={props.test.objectiveQues[currQues - 1]}
                    setAnswer={setAnswer}
                    onNext={onNext}
                />)
            case 2:
                return (<MCQ2 key={currQues - 1}
                    index={currQues - 1}
                    ques={props.test.objectiveQues[currQues - 1]}
                    setAnswer={setAnswer}
                    onNext={onNext}
                />)
            case 3:
                return (<MCQ3
                    key={currQues - 1}
                    index={currQues - 1}
                    ques={props.test.objectiveQues[currQues - 1]}
                    setAnswer={setAnswer}
                    onNext={onNext} />)
            case 4:
                return (<IntegerType
                    key={currQues - 1}
                    index={currQues - 1}
                    ques={props.test.objectiveQues[currQues - 1]}
                    setAnswer={setAnswer}
                    onNext={onNext}
                />)
            case 5:
                return (<FillBlank
                    key={currQues - 1}
                    index={currQues - 1}
                    ques={props.test.objectiveQues[currQues - 1]}
                    setAnswer={setAnswer}
                    onNext={onNext}
                />)
            case 6:
                return (<Assert key={currQues - 1}
                    index={currQues - 1}
                    ques={props.test.objectiveQues[currQues - 1]}
                    setAnswer={setAnswer}
                    onNext={onNext}
                />)
        }
    }

    const onTimeOver = () => {
        //submit and quit
    }

    const warning = (timeLeft) => {
        alert(`${timeLeft} minutes left`);
    }

    const selectQues = (index) => {
        setCurrQues(index);
    }

    return (
        <div>
            <div className="page-wrapper chiller-theme toggled">
                <a id="show-sidebar" className="btn btn-sm btn-dark" href="#">
                    <i className="fas fa-bars"></i>
                </a>
                <NavigationBar user={props.user} test={props.test} selectQues={setCurrQues} />
                <div className="page-content">
                    <Header title={props.test.title} course={props.course} />
                    {
                        displayQues()
                    }
                    <Summary attempted={getAttempted()} total={totalQues} initialMinute={5} warning={warning} onTimeOver={onTimeOver} />
                </div>
            </div>
        </div>
    )
}

export default Test;