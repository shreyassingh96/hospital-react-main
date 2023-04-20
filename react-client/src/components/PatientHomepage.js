// Import necessary modules
import React from 'react';
import { withRouter } from 'react-router-dom';
import ListGroup from 'react-bootstrap/ListGroup';
import Jumbotron from 'react-bootstrap/Jumbotron';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExclamationTriangle, faGamepad, faLightbulb, faVideoCamera, faPlusSquare, faInfoCircle } from '@fortawesome/free-solid-svg-icons';

// Get the name of the patient from local storage
const name = localStorage.getItem('name');

// Define a functional component named Patient
function Patient(props) {
  return (
    <div className='patientPage'>
      <h3> Hello, {name}!</h3><br />

      {/* Render a list group of actions for the patient */}
      <ListGroup >
        <ListGroup.Item action href="/showTip" className='listColor'>
          Daily Tip  <FontAwesomeIcon icon={faLightbulb} color='orange' size={'1x'} />
        </ListGroup.Item>

        <ListGroup.Item action href="/addVitalSigns" className='listColor'>
          Add Daily Information <FontAwesomeIcon icon={faPlusSquare} size={'1x'} />
        </ListGroup.Item>

        <ListGroup.Item action href="/checklist" className='listColor'>
          Checklist for common signs and symptoms <FontAwesomeIcon icon={faInfoCircle} size={'1x'} color='green' />
        </ListGroup.Item>

        <ListGroup.Item action href="/emergencyAlert" className='listColor'>
          Send an Emergency Alert  <FontAwesomeIcon icon={faExclamationTriangle} color='red' />
        </ListGroup.Item>

        <ListGroup.Item action href="/motivationalVideos" className='listColor'>
          Motivational Videos <FontAwesomeIcon icon={faVideoCamera} />
        </ListGroup.Item>

        <ListGroup.Item action href="/game" className='listColor'>
          Play Game <FontAwesomeIcon icon={faGamepad} />
        </ListGroup.Item>
      </ListGroup>
    </div>
  );
}

// Export the Patient component with the withRouter higher-order component
export default withRouter(Patient);