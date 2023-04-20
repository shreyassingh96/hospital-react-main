import React from 'react';
import { gql, useMutation } from '@apollo/client';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { withRouter, useHistory } from 'react-router-dom';
import './UI.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTemperature1, faHeartbeat, faDroplet, faSnowflake, faMale } from '@fortawesome/free-solid-svg-icons';

// Define the GraphQL mutation for creating a vital sign record
export const Create_Vital_Sign = gql`
  mutation($bodyTemperature: String!, $heartRate: String!, $bloodPressure: String!, $respiratoryRate: String!, $weight: String!) {
    createVitalSign(
      bodyTemperature: $bodyTemperature,
      heartRate: $heartRate,
      bloodPressure: $bloodPressure,
      respiratoryRate: $respiratoryRate,
      weight: $weight,
    ) {
      _id
    }
  }
`;

// Define the component for adding a vital sign record
const AddVitalSigns = () => {
  // Declare variables for storing input field values
  let bodyTemperature, heartRate, bloodPressure, respiratoryRate, weight;
  
  // Get the history object for navigation
  const history = useHistory();
  
  // Use the useMutation hook to execute the Create_Vital_Sign mutation
  const [createVitalSign, { data, loading, error }] = useMutation(Create_Vital_Sign);

  // Show a loading message if the mutation is in progress
  if (loading) return 'Submitting...';
  
  // Show an error message if the mutation failed
  if (error) return `Submission error! ${error.message}`;

  // Define a function for canceling the form and navigating back to the nurse dashboard
  const onCancel = e => {
    e.preventDefault();
    history.push('/nurse');
  }

  // Render the form for adding a vital sign record
  return (
    <div className='contanier'>
      <Jumbotron className='form'>
        <h2> Vital Signs Form</h2>
        <Form className='form'
          onSubmit={e => {
            e.preventDefault();
            // Execute the Create_Vital_Sign mutation with input field values as variables
            createVitalSign({
              variables: {
                bodyTemperature: bodyTemperature.value,
                heartRate: heartRate.value,
                bloodPressure: bloodPressure.value,
                respiratoryRate: respiratoryRate.value,
                weight: weight.value
              }
            });
            // Reset input field values after form submission
            bodyTemperature.value = '';
            heartRate.value = '';
            bloodPressure.value = '';
            respiratoryRate.value = '';
            weight.value = '';
            // Navigate back to the nurse dashboard after successful form submission
            history.push('/nurse');
          }}>
          <Form.Group>
            <Form.Label> Body Temperature <FontAwesomeIcon icon={faTemperature1} size={'1x'} /></Form.Label>
            <Form.Control type="text" name="bodyTemperature" id="bodyTemperature" placeholder="Enter body temperature" ref={node => { bodyTemperature = node; }} />
          </Form.Group>
  
          <Form.Group>
            <Form.Label>Heart Rate <FontAwesomeIcon icon={faHeartbeat} size={'1x'} /></Form.Label>
            <Form.Control type="text" name="heartRate" id="heartRate" placeholder="Enter heart rate" ref={node => { heartRate = node; }} />
          </Form.Group>

          <Form.Group>
            <Form.Label>Blood Pressure <FontAwesomeIcon icon={faDroplet} size={'1x'} /></Form.Label>
            <Form.Control type="text" name="bloodPressure" id="bloodPressure" placeholder="Enter blood pressure" ref={node => { bloodPressure = node; }} />
          </Form.Group>
  
          <Form.Group>
            <Form.Label>Respiratory Rate <FontAwesomeIcon icon={faSnowflake} size={'1x'} /></Form.Label>
            <Form.Control type="text" name="respiratoryRate" id="respiratoryRate" placeholder="Enter respiratory rate" ref={node => { respiratoryRate = node; }} />
          </Form.Group>
  
          <Form.Group>
            <Form.Label>Weight <FontAwesomeIcon icon={faMale} size={'1x'} /></Form.Label>
            <Form.Control type="text" name="weight" id="weight" placeholder="Enter weight" ref={node => { weight = node; }} />
          </Form.Group>
  
          <div className='button' style={{ display: 'flex', justifyContent: 'center' }}>
            <Button className='buttonSave' variant="primary" type="submit">
              Save
            </Button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Button className='buttonCancel' variant="danger" type="submit" onClick={onCancel}>
              Cancel
            </Button>
          </div>
        </Form>
      </Jumbotron>
    </div>
  );
  
  

}

export default withRouter(AddVitalSigns);