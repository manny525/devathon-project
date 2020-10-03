import React, { Component } from "react";
import "./App.css";

import "bootstrap/dist/css/bootstrap.min.css";
import "./animate.css";
import "./themify-icons.css";
import logo from "./logo.png";

class App extends Component {
  render() {
    return (
      <div>
        <header className="main_menu home_menu">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-12">
                <nav className="navbar navbar-expand-lg navbar-light">
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
                  <div
                    className="collapse navbar-collapse main-menu-item justify-content-end"
                    id="navbarSupportedContent"
                  >
                    <ul className="navbar-nav align-items-center">
                      <li className="nav-item active">
                        <a className="nav-link" href="#">
                          Home
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="#">
                          About
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="#">
                          Courses
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="#">
                          Blog
                        </a>
                      </li>
                      <li className="nav-item dropdown">
                        <a
                          className="nav-link dropdown-toggle"
                          href="blog.html"
                          id="navbarDropdown"
                          role="button"
                          data-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          Pages
                        </a>
                        <div
                          className="dropdown-menu"
                          aria-labelledby="navbarDropdown"
                        >
                          <a className="dropdown-item" href="#">
                            Single blog
                          </a>
                          <a className="dropdown-item" href="#">
                            Elements
                          </a>
                        </div>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="#">
                          Contact
                        </a>
                      </li>
                      <li className="d-none d-lg-block">
                        <a className="btn_1" href="#">
                          Register Now!
                        </a>
                      </li>
                    </ul>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </header>
        <section className="banner_part">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6 col-xl-6">
                <div className="banner_text">
                  <div className="banner_text_iner">
                    <h5>Make Testing An Unforgettable Experience</h5>
                    <h1>Portal For Online Testing</h1>
                    <p>You will have to register yourself to begin testing.</p>
                    <a href="course.html" className="btn_1">
                      View Course{" "}
                    </a>
                    <a href="register.html" className="btn_2">
                      Register{" "}
                    </a>
                    <a href="INSTRUCTION.html" className="btn_2">
                      Get Started{" "}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <footer className="footer-area">
          <div className="container">
            <div className="row justify-content-between">
              <div className="col-sm-6 col-md-4 col-xl-3">
                <div className="single-footer-widget footer_1">
                  <a href="index.html">
                    {" "}
                    <img src={logo} alt="" width={150} height={100} />{" "}
                  </a>
                  <p>
                    We here provide the real time experience with online
                    testing.
                  </p>
                  <p>Please read the instruction before proceeding further</p>
                </div>
              </div>
              <div className="col-sm-6 col-md-4 col-xl-4">
                <div className="single-footer-widget footer_2">
                  <h4>Newsletter</h4>
                  <p>
                    Want to get updates with results and course tests. Subscribe
                    to us.
                  </p>
                  <form action="#">
                    <div className="form-group">
                      <div className="input-group mb-3">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Enter email address"
                          onfocus="this.placeholder = ''"
                          onblur="this.placeholder = 'Enter email address'"
                        />
                        <div className="input-group-append">
                          <button className="btn btn_1" type="button">
                            <i className="ti-angle-right" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                  <div className="social_icon">
                    <a href="#">
                      {" "}
                      <i className="ti-facebook" />{" "}
                    </a>
                    <a href="#">
                      {" "}
                      <i className="ti-twitter-alt" />{" "}
                    </a>
                    <a href="#">
                      {" "}
                      <i className="ti-instagram" />{" "}
                    </a>
                    <a href="#">
                      {" "}
                      <i className="ti-skype" />{" "}
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-sm-6 col-md-4">
                <div className="single-footer-widget footer_2">
                  <h4>Contact us</h4>
                  <div className="contact_info">
                    <p>
                      <span> Address :</span> Room No. A0-21 , 1.8k Hostel NITW{" "}
                    </p>
                    <p>
                      <span> Phone :</span> +91 7068 502 705
                    </p>
                    <p>
                      <span> Email : </span>ansari_841903@student.nitw.ac.in
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}

export default App;
