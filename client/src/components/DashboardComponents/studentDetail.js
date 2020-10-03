import React, { Component } from "react";
//import Select from 'react-select';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import {Button} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

class CoursePage extends Component {
  constructor(props) {
    super();
    this.state = {
      states: [],
    };
  }


  componentDidMount() {
    this.setState({
     states: [
       {id: '0', name: 'Select State'},
        {id: '1', name: 'Andhra Pradesh'},
        {id: '2', name: 'Telangana'},
        {id: '3', name: 'Maharashtra'},
        {id: '4', name: 'Uttar Pradesh'},
        {id: '5', name: 'Bihar'},
        {id:'6', name:'Gujarat'},
      ]
    });
  }

  render() {


    const { states } = this.state;

    let stateList = states.length > 0
    	&& states.map((item, i) => {
      return (
        <option key={i} value={item.id}>{item.name}</option>
      );
    }, this);




    return (
      <>
      <Card style={{ width: '55%', padding: '4%'}}  border="info">
      <Form>
    <Form.Row>
    <Form.Group controlId="formGridEmail">
      <Form.Label>Email</Form.Label>
      <Form.Control type="email" placeholder="Enter email" />
    </Form.Group>

    
  </Form.Row>

  <Form.Row> <Form.Group controlId="formGridMobile">
      <Form.Label>Contact No</Form.Label>
      <Form.Control type="text" placeholder="Enter Contact No" />
    </Form.Group></Form.Row>
 

  <Form.Group controlId="formGridAddress1">
    <Form.Label>Address</Form.Label>
    <Form.Control placeholder="Enter your Adddress" />
  </Form.Group>

  <Form.Row>
    <Form.Group controlId="formGridCity">
      <Form.Label>City</Form.Label>
      <Form.Control />
    </Form.Group>

   
  <Form.Group controlId="formGridState">
  <Form.Label>State</Form.Label>
  <Form.Control as="select" defaultValue="Choose...">
    {stateList}     
  </Form.Control>
</Form.Group>

 
    <Form.Group controlId="formGridZip">
      <Form.Label>Zip</Form.Label>
      <Form.Control />
    </Form.Group>
  </Form.Row>

  <Form.Group id="formGridCheckbox">
    <Form.Check type="checkbox" label="I confirm that above details are correct" />
  </Form.Group>

  {/*<Select options = {options} />*/}

  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
        </Card>
      </>
    );
  }
}

export default CoursePage;
