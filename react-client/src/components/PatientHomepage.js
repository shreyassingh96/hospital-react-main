import React from 'react';
import { withRouter } from 'react-router-dom';
import ListGroup from 'react-bootstrap/ListGroup';
import Jumbotron from 'react-bootstrap/Jumbotron';

// Get the name of the patient from local storage
const name = localStorage.getItem('name').charAt(0).toUpperCase() + localStorage.getItem('name').slice(1);
const lastName = localStorage.getItem('lastName');
const userCategory = localStorage.getItem('userCategory').charAt(0).toUpperCase() + localStorage.getItem('userCategory').slice(1);

// Define a functional component named Patient
function Patient(props) {
  return (
    <div className='container'>
      <Jumbotron className='form'>
        <div className='patientPage'>
        <h2>{name} {lastName} <h6>({userCategory})</h6></h2>
          {/* List of actions */}
          <ListGroup >
            {/* Daily Tip */}
            <ListGroup.Item action href="/showTip" className='listColor'>
              Your Daily Tip
            </ListGroup.Item>
            {/* Add Daily Information */}
            <ListGroup.Item action href="/addVitalSigns" className='listColor'>
              Update Your Vital Information
            </ListGroup.Item>
            {/* Checklist */}
            <ListGroup.Item action href="/checklist" className='listColor'>
              Checklist for Common Signs and Symptoms
            </ListGroup.Item>
            {/* Emergency Alert */}
            <ListGroup.Item action href="/emergencyAlert" className='listColor'>
              Send an Emergency Alert to Nurse
            </ListGroup.Item>
            {/* Motivational Videos */}
            <ListGroup.Item action href="/motivationalVideos" className='listColor'>
              Motivational Videos for Your
            </ListGroup.Item>
            {/* Play Game */}
            <ListGroup.Item action href="/game" className='listColor'>
              Play Game & Get Fresh
            </ListGroup.Item>
          </ListGroup>
        </div>
      </Jumbotron>
    </div>
  );
}

// Export the Patient component with the withRouter higher-order component
export default withRouter(Patient);
