import React, { Component } from "react";
import "./registration.css";
import "font-awesome/css/font-awesome.min.css";

class Registration extends Component {
  constructor(props) {
    super();

    this.state = {
      name: "",
      regNo: "",
      degree: "",
      branch: "",
      email: "",
      year: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  nameHandler = (event) => {
    this.setState({
      name: event.target.value,
    });
  };

  regHandler = (event) => {
    this.setState({
      regNo: event.target.value,
    });
  };

  emailHandler = (event) => {
    this.setState({
      email: event.target.value,
    });
  };

  degreeHandler = (event) => {
    this.setState({
      degree: event.target.value,
    });
  };

  branchHandler = (event) => {
      this.setState({
          branch: event.target.value,
      })
  }

  yearHandler = (event) => {
    this.setState({ year: event.target.value });
  };

  //Form submit logic
  handleSubmit = (event) => {
    console.log(
      `${this.state.name}-${this.state.regNo}  requested successfully!!!!`
    );

 
    this.setState({isSubmitted: true});

    console.log(this.state);

    this.setState({
      name: "",
      regNo: "",
      email: "",
      year: "",
      degree: "",
    });

    event.preventDefault();

  };

  //render method
  render() {
    return (
      <div className="container">
        <div className="bg-img">
          <div className="content">
            <header>Registration</header>

          
            <form onSubmit={this.handleSubmit}>
              <div className="field">
                <span className="fa fa-user"></span>
                <input
                  type="text"
                  value={this.state.name}
                  onChange={this.nameHandler}
                  required
                  placeholder="Name"
                />
              </div>

              <div className="field">
                <span className="fa fa-lock"></span>
                <input
                  type="text"
                  value={this.state.regNo}
                  onChange={this.regHandler}
                  required
                  placeholder="Registration No"
                />
              </div>

            
              <div className="field">
                <select onChange={this.degreeHandler}>
                  <option defaultValue="0">Select Degree</option>
                  <option value="btech">BTech</option>
                  <option value="mtech">MTech</option>
                  <option value="mca">MCA</option>
                </select>
              </div>

           
              <div className="field">
                <select onChange={this.branchHandler}>
                  <option defaultValue="0">Select Branch</option>
                  <option value="1">CSE</option>
                  <option value="2">ECE</option>
                  <option value="3">EEE</option>
                  <option value="4">MECH</option>
                  <option value="5">CHEM</option>
                  <option value="6">CIVIL</option>
                  <option value="7">METALLURGY</option>
                  <option value="8">BIOTECH</option>
                </select>
              </div>

         
              <div className="field">
                <select onChange={this.yearHandler}>
                  <option  defaultValue="0">Select Year</option>
                  <option value="1">I</option>
                  <option value="2">II</option>
                  <option value="3">III</option>
                  <option value="4">IV</option>
                </select>
              </div>

              <div className="field">
                <span className="fa fa-user"></span>
                <input type="email"  value={this.state.email}
              onChange={this.emailHandler} required placeholder="Email" />
              </div>

              <div className="field space">
                <input type="submit" value="REGISTER" className="submit" />
              </div>
            </form>
          </div>
        </div>
            
      </div>
    );
  }
}

export default Registration;
