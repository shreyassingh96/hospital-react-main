// Import necessary packages
import React from 'react';
import { withRouter } from 'react-router-dom';
import ListGroup from 'react-bootstrap/ListGroup';
import Jumbotron from 'react-bootstrap/Jumbotron';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLightbulb, faPlusSquare, faExclamationTriangle, faInfoCircle } from '@fortawesome/free-solid-svg-icons';

// Nurse component
function Nurse(props) {

  // Get nurse name from local storage
  const name = localStorage.getItem('name');

  // Return JSX
  return (
    <div className='container'>
      <Jumbotron className='form'>
        <div className='nursePage'>
          <center><h2> Hello, {name}!</h2></center>
          {/* List of actions */}
          <ListGroup >
            {/* Emergency Alert */}
            <ListGroup.Item action href="/alert" className='listColor'>
              Emergency Alert <FontAwesomeIcon icon={faExclamationTriangle} color='red' />
            </ListGroup.Item>
            {/* Add Patient Vital Signs */}
            <ListGroup.Item action href="/vitals" className='listColor'>
              Add Patient Vital Signs <FontAwesomeIcon icon={faPlusSquare} size={'1x'} />
            </ListGroup.Item>
            {/* Access Patient Information */}
            <ListGroup.Item action href="/patientInfo" className='listColor'>
              Access Patient Information  <FontAwesomeIcon icon={faInfoCircle} size={'1x'} color='green' />
            </ListGroup.Item>
            {/* Send Daily Motivational Tip */}
            <ListGroup.Item action href="/createTip" className='listColor'>
              Send Daily Motivational Tip <FontAwesomeIcon icon={faLightbulb} size={'1x'} color='orange' />
            </ListGroup.Item>
          </ListGroup>
        </div>
      </Jumbotron>
    </div>
  );
}

// Export Nurse component with router
export default withRouter(Nurse);