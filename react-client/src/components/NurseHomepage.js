import React from 'react';
import { withRouter } from 'react-router-dom';
import ListGroup from 'react-bootstrap/ListGroup';
import Jumbotron from 'react-bootstrap/Jumbotron';

// Nurse component
function Nurse(props) {
  // Get nurse name and user category from local storage
  const name = localStorage.getItem('name').charAt(0).toUpperCase() + localStorage.getItem('name').slice(1);
  const lastName = localStorage.getItem('lastName');
  const userCategory = localStorage.getItem('userCategory').charAt(0).toUpperCase() + localStorage.getItem('userCategory').slice(1);

  // Return JSX
  return (
    <div className='container'>
      <Jumbotron className='form'>
        <div className='nursePage'>
        <h2>{name} {lastName}</h2> <h6>({userCategory})</h6>
          {/* List of actions */}
          <ListGroup >
            {/* Emergency Alert */}
            <ListGroup.Item action href="/alert" className='listColor'>
              Emergency Alert
            </ListGroup.Item>
            {/* Add Patient Vital Signs */}
            <ListGroup.Item action href="/vitals" className='listColor'>
              Add Patient Vital Signs
            </ListGroup.Item>
            {/* Access Patient Information */}
            <ListGroup.Item action href="/patientInfo" className='listColor'>
              Access Patient Information
            </ListGroup.Item>
            {/* Send Daily Motivational Tip */}
            <ListGroup.Item action href="/createTip" className='listColor'>
              Send Daily Motivational Tip
            </ListGroup.Item>
          </ListGroup>
        </div>
      </Jumbotron>
    </div>
  );
}

// Export Nurse component with router
export default withRouter(Nurse);
