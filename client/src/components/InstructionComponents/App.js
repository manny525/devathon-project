import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./animate.css";
import "./themify-icons.css";
import logo from "./logo.png";

class Instructions extends Component {
  render() {
    return (
      <div>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <title>Online Testing</title>
        <link rel="stylesheet" href="homecss/bootstrap.min.css" />
        <link rel="stylesheet" href="homecss/animate.css" />
        <link rel="stylesheet" href="homecss/themify-icons.css" />
        <link rel="stylesheet" href="homecss/style.css" />
        <style
          type="text/css"
          dangerouslySetInnerHTML={{
            __html:
              "\n        .pattern>li{\n            margin-bottom: 1%;\n            font-size: 16px;\n        }\n    "
          }}
        />
        <header className="main_menu home_menu">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-12">
                <nav className="navbar navbar-expand-lg navbar-light">
                  <div
                    className="collapse navbar-collapse main-menu-item"
                    id="navbarSupportedContent"
                  >
                    <h1>
                      <strong>READ THE INSTRUCTIONS CAREFULLY</strong>
                    </h1>
                  </div>
                  <a className="navbar-brand" href="index.html">
                    {" "}
                    <img src={logo} alt="logo" width={150} />{" "}
                  </a>
                  <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                  >
                    <span className="navbar-toggler-icon" />
                  </button>
                </nav>
              </div>
            </div>
          </div>
        </header>
        <section className="banner_part">
          <div className="container">
            <div className="banner_text">
              <div className="banner_text_iner">
                <div className="col-md-6">
                  <h3>
                    <li>Instructions to students:</li>
                  </h3>
                  <ol style={{ fontSize: "16px" }}>
                    <li>Fill up your personal details carefully.</li>
                    <li>
                      New students must register for the admission number.
                    </li>
                    <li>All questions are compulsory.</li>
                    <li>You have to submit the paper within allotted time.</li>
                    <li>
                      You are allowed to submit only once, make sure that you
                      have correctly attempted all the questions before
                      submission.
                    </li>
                    <li>
                      Make sure you clicked on submit button to successfully
                      complete the test.
                    </li>
                    <li>Calculators not allowed.</li>
                    <li>Any electronic gadgets not allowed.</li>
                    <li>Form will be active for two hours only.</li>
                    <li>
                      Amy attempts to cheat or smuggle paper would attract
                      serious action being against you.
                    </li>
                    <li>
                      If you face any difficulties while appearing the test
                      please contact Mr. Manthan and Mr. Sufiyan.
                    </li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="container">
            <div className="col align-self-center">
              <h3>Pattern of Questions</h3>
              <p>
                There are 7 different categories of questions which can be asked
              </p>
              <ol className="pattern">
                <li>
                  <strong>MCQ - I :</strong>
                  This type of question will be in{" "}
                  <span className="badge badge-pill badge-primary notification">
                    MCQ - I
                  </span>{" "}
                  color. In this type of question{" "}
                  <b> ONLY ONE OPTION IS CORRECT</b>
                </li>
                <li>
                  <strong>MCQ - II :</strong>
                  This type of question will be in{" "}
                  <span className="badge badge-pill badge-success notification">
                    MCQ - II
                  </span>{" "}
                  color. In this type of question <b>MORE THAN ONE OPTION</b>{" "}
                  can be correct with <b>NO PARTIAL MARKING</b>
                </li>
                <li>
                  <strong>MCQ - III :</strong>
                  This type of question will be in{" "}
                  <span
                    className="badge badge-pill notification"
                    style={{ background: "#076126", color: "white" }}
                  >
                    MCQ - III
                  </span>{" "}
                  color. In this type of question <b>MORE THAN ONE OPTION</b>{" "}
                  can be correct with <b>PARTIAL MARKING</b>
                </li>
                <li>
                  <strong>INTEGER TYPE :</strong>
                  This type of question will be in{" "}
                  <span className="badge badge-pill badge-danger notification">
                    Integer Type
                  </span>{" "}
                  color. In this type of question, answer will be in the form of{" "}
                  <b>INTEGRAL VALUES ROUNDED UPTO NEAREST INTEGER</b>
                </li>
                <li>
                  <strong>FITB :</strong>
                  This type of question will be in{" "}
                  <span className="badge badge-pill badge-warning notification">
                    Fill in the blanks
                  </span>{" "}
                  color. In this type of question, you have to{" "}
                  <b>FILL IN THE BLANKS</b> with proper spelling.
                </li>
                <li>
                  <strong>True/False :</strong>
                  This type of question will be in{" "}
                  <span
                    className="badge badge-pill notification"
                    style={{ background: "#47370e", color: "white" }}
                  >
                    True/False
                  </span>{" "}
                  color. In this type of question you have to select if the
                  given statement is <b>TRUE or FALSE</b>
                </li>
                <li>
                  <strong>Subjective :</strong>
                  This type of question will be in{" "}
                  <span
                    className="badge badge-pill notification"
                    style={{ background: "#6c038f", color: "white" }}
                  >
                    Subjective
                  </span>{" "}
                  color. In this type of question you have to submit the written
                  answer in form of <b>TEXT</b> or <b>PDF</b>. Maximum word
                  limit is 400 words.
                </li>
              </ol>
            </div>
            <div className="mt-5 mb-5">
              <form action="assets/MCQ.html">
                <input type="checkbox" name="agreement" required />I have read
                the instruction carefully and I have received the computer
                system in proper condition with good internet Connectivity.
                <input
                  type="submit"
                  name="exam"
                  defaultValue="I am Ready and Proceed"
                  className="btn btn-primary"
                />
              </form>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Instructions;
