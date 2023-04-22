// Importing required modules
import React from 'react';
import { withRouter } from 'react-router-dom';
import { Redirect } from 'react-router-dom'
import axios from 'axios';
import Form from 'react-bootstrap/Form';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.css';

function Checklist() {

  // Rendering the JSX components
  return (
    <div className="container">   
      <Jumbotron className='form'>
      <div>
        {/* Heading */}
        <h2>Check your signs and symptoms</h2>
        
        {/* Checklist Form */}
        <Form method='get' action='/run' className='form'>
          {/* Checkboxes */}
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Cholesterol" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Past Cardiac history" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Pain and numbness in extremities" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="High Blood pressure" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Shortness of breath" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Chest Tightness" />
          </Form.Group>

          {/* Submit and Cancel Buttons */}
          <div className='button'>
            <Button className='buttonSave' variant="primary" type="submit">
              Submit
            </Button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Button className='buttonCancel' variant="danger">
  <a href="/patient" style={{ color: 'inherit', textDecoration: 'none' }}>
    Cancel
  </a>
</Button>
          </div>
        </Form>
      </div></Jumbotron>      
    </div>
  );
}

// Exporting the Checklist component
export default Checklist;
