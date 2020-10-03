import React from 'react';
import logo from './logo.svg';
import './App.css';
import RegistrationRequestHome from './components/facultyAdvisor/RegistrationRequestHome';
import Header from './components/facultyAdvisor/Header'
import Test from './components/test/TestHome';

function App() {
  console.log('start')
  const test = {
    _id: "5f77112efcf39d5ea859782e",
    courseId: "5f76ef2d6216a9313017e25a",
    title: "Minor 1",
    startDateTime: 36751624351,
    endDateTime: 37751624351,
    duration: 1800,
    window: 600,
    objectiveQues: [{
      _id: "5f7715d17ff1d25a9016c2ff",
      question: 'Who is the Prime minister of India?',
      options: ["Modi", "Tolia", "Sharma", "Gupta"],
      quesType: 1,
      score: 1
    }, {
      _id: "5f7715f67ff1d25a9016c300",
      question: 'Who is the Prime minister of India?',
      options: ["Modi", "Tolia", "Sharma", "Gupta"],
      quesType: 2,
      score: 2
    }, {
      _id: "5f7715f67ff1d25a9016c301",
      question: 'What is your age?',
      quesType: 4,
      score: 1
    }, {
      _id: "5f7715f67ff1d25a9016c302",
      question: 'Delhi is the ____ of India.',
      quesType: 5,
      score: 1
    }, {
      _id: "5f7715f67ff1d25a9016c303",
      question: 'Delhi is the capital of India.',
      quesType: 6,
      score: 1
    }],
    subjectiveQues: []
  }
  const user = {
    name:"Mohit Tripathi",
    email:"mtripathi@student.nitw.ac.in",
    rollNo: "174130",
    regNo: "811727",
    gender: 0,
    mobileNo: "9828010346",
    degree: "BTech",
    branch: "ECE",
    year: 4,
    token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1Zjc2ZjMzMDBhMmQ2YTI1M2NkMWIyZjciLCJpYXQiOjE2MDE2MzEwMjR9.WI64f2mw2tim0vBi9ZHnUVr4i8H6PMyCkiMT-iEjghE"
  }
  return (
    <div>
      <Test user={user} test={test} course={'Electronic Instrumentation'} />
    </div>
  );
}

export default App;
