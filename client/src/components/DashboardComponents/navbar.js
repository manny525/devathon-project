import React, {Component} from 'react';
import Navbar from "react-bootstrap/Navbar";
 
class Navigbar extends Component {
    constructor(props) {
        super();
        
      }

    render() {
        return(
        <>
         <Navbar bg="primary" variant="dark" style={{zIndex: '2'}}>
          
         <img
        alt=""
        src="https://cdn.pixabay.com/photo/2017/03/21/02/00/user-2160923_960_720.png"
        width="60"
        height="60"
        className="d-inline-block align-top"

        style={{ marginRight: '5%'}}
      />{' '}
          
            <h3 style={{color: 'white' , marginRight: '5%'}}>Priyanshu</h3>       
            <h4 style={{color: 'white' , marginRight: '5%'}}>823691</h4>
            <h4 style={{color: 'white' , marginRight: '5%'}}>ECE</h4>
            <h4 style={{color: 'white' , marginRight: '35%'}}>II</h4>
        
            <h2 className="float-md-right" style={{color: 'white'}}>DASHBOARD</h2>
        </Navbar>
          </>
        );
    }
}

export default Navigbar;