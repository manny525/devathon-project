import React ,{Component} from "react";
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import {Button} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

class Courses extends Component {
    render(){
        return(
<>
<Card style={{ width: '50%'}} border="info" >
  <Card.Header >Select Courses</Card.Header>
    <Form style={{ paddingLeft: '30px' , paddingTop: '12px'}}> 
        <Form.Group>
             <Form.Check type="checkbox" label="Course 1" />
        </Form.Group>

         <Form.Group>
              <Form.Check type="checkbox" label="Course 2" />
         </Form.Group>

         <Form.Group>
              <Form.Check type="checkbox" label="Course 3" />
        </Form.Group>

        <Form.Group>
            <Form.Check type="checkbox" label="Course 4" />
         </Form.Group>

        <Form.Group>
            <Form.Check type="checkbox" label="Course 5" />
        </Form.Group>

        <Form.Group>
            <Form.Check type="checkbox" label="Course 6" />
        </Form.Group>

        <Form.Group>
            <Form.Check type="checkbox" label="Course 7" />
        </Form.Group>

        <Form.Group>
            <Form.Check type="checkbox" label="Course 8" />
        </Form.Group>

        <Form.Group>
            <Form.Check type="checkbox" label="Course 9" />
        </Form.Group>
               


        <Button variant="danger" type="submit" style={{marginLeft: '20%' , marginBottom: '5%'}}>
        Submit
    </Button>

    </Form>
  
</Card>       
</>
      );

    }
}

export default Courses;