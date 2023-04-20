// Import necessary modules
import React from 'react';
import { withRouter } from 'react-router-dom';
import ListGroup from 'react-bootstrap/ListGroup';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExclamationTriangle, faGamepad, faLightbulb, faPlusSquare, faInfoCircle } from '@fortawesome/free-solid-svg-icons';

// Get the name of the patient from local storage
const name = localStorage.getItem('name');

// Define a functional component named Patient
function Patient(props) {
  return (
    <div className='patientPage'>
      <h5>Hello, {name}!</h5><br />

      {/* Render a list group of actions for the patient */}
      <ListGroup >
        <ListGroup.Item action href="/showTip" className='patientListColor'>
          Daily Tip  <FontAwesomeIcon icon={faLightbulb} color='yellow' size={'2x'} />
        </ListGroup.Item>

        <ListGroup.Item action href="/addVitalSigns" className='patientListColor'>
          Add Vital Information <FontAwesomeIcon icon={faPlusSquare} color='grey' size={'2x'} />
        </ListGroup.Item>

        <ListGroup.Item action href="/checklist" className='patientListColor'>
          Checklist for Common Symptoms <FontAwesomeIcon icon={faInfoCircle} size={'2x'} color='green' />
        </ListGroup.Item>

        <ListGroup.Item action href="/emergencyAlert" className='patientListColor'>
          Send an Emergency Alert  <FontAwesomeIcon icon={faExclamationTriangle} color='red' size={'2x'} />
        </ListGroup.Item>

        <ListGroup.Item action href="https://mankeman.github.io/Games/FitnessGame/index.html" className='patientListColor'>
          Fitness Game <FontAwesomeIcon icon={faGamepad} size={'2x'} color='black'/>
        </ListGroup.Item>
      </ListGroup>
    </div>
  );
}

// Export the Patient component with the withRouter higher-order component
export default withRouter(Patient);