import React from 'react';
import { gql, useMutation } from '@apollo/client';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { withRouter, useHistory } from 'react-router-dom';
import './UI.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTemperature1, faHeartbeat, faDroplet, faSnowflake, faMale, faThermometer, faTemperatureThreeQuarters, faHeart, faWeightScale } from '@fortawesome/free-solid-svg-icons';

// Define GraphQL mutation for creating vital signs
export const Create_Vital_Sign = gql`
  mutation CreateVitalSign(
    $bodyTemperature: String!,
    $heartRate: String!,
    $bloodPressure:String!,
    $respiratoryRate:String!,
    $weight:String!,
  ) {
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

const AddVitalSigns = () => {
  // Initialize variables for vital signs
  let bodyTemperature, heartRate, bloodPressure, respiratoryRate, weight;
  // Initialize history object
  const history = useHistory();
  // Use useMutation hook to define createVitalSign function and get data, loading, and error states
  const [createVitalSign, { data, loading, error }] = useMutation(Create_Vital_Sign);

  // If mutation is loading, display "Submitting..."
  if (loading) return 'Submitting...';
  // If there is an error, display error message
  if (error) return `Submission error! ${error.message}`;

  // Function to handle cancel button click
  const onCancel = e => {
    e.preventDefault();
    // Redirect to patient page
    history.push('/patient');
  };

  return (
    <div className='container'>
      <br />
      <br />
      <center>
        <h5>Vital Signs Form</h5>
      </center>

      <Jumbotron className='patientForm'>
        <Form
          onSubmit={e => {
            e.preventDefault();
            // Call createVitalSign function with variables for each vital sign
            createVitalSign({
              variables: {
                bodyTemperature: bodyTemperature.value,
                heartRate: heartRate.value,
                bloodPressure: bloodPressure.value,
                respiratoryRate: respiratoryRate.value,
                weight: weight.value,
              }
            });
            // Clear form fields
            bodyTemperature.value = '';
            heartRate.value = '';
            bloodPressure.value = '';
            respiratoryRate.value = '';
            weight.value = '';
            // Redirect to patient page
            history.push('/patient');
          }}
        >
          <Form.Group>
            <Form.Label>Body Temperature <FontAwesomeIcon size={'1x'} icon={faTemperatureThreeQuarters} /></Form.Label>
            <Form.Control type="text" name="bodyTemperature" id="bodyTemperature" placeholder="Body temperature (C or F) " ref={node => { bodyTemperature = node; }} />
          </Form.Group>

          <Form.Group>
            <Form.Label>Heart Rate <FontAwesomeIcon size={'1x'} icon={faHeartbeat} /></Form.Label>
            <Form.Control type="text" name="heartRate" id="heartRate" placeholder="Heart rate (BPM)" ref={node => { heartRate = node; }} />
          </Form.Group>
          
          <Form.Group>
            <Form.Label>Blood Pressure <FontAwesomeIcon size={'1x'} icon={faThermometer} /></Form.Label>
            <Form.Control type="text" name="bloodPressure" id="bloodPressure" placeholder="Blood pressure (number/number)" ref={node => { bloodPressure = node; }} />
          </Form.Group>

          <Form.Group>
            <Form.Label>Respiratory Rate <FontAwesomeIcon size={'1x'} icon={faHeartbeat} /></Form.Label>
            <Form.Control type="text" name="respiratoryRate" id="respiratoryRate" placeholder="Respiratory rate (number)" ref={node => { respiratoryRate = node; }} />
          </Form.Group>

          <Form.Group>
            <Form.Label>Weight <FontAwesomeIcon size={'1x'} icon={faWeightScale} /></Form.Label>
            <Form.Control type="text" name="weight" id="weight" placeholder="Enter weight (lbs or kg)" ref={node => { weight = node; }} />
          </Form.Group>

          <div className='button-container' style={{textAlign: 'center'}}>
            <div className='button'>
              <Button className='buttonSave' variant="primary" type="submit">
                Save
              </Button>
            </div>
            <div className='button'>
              <Button className='buttonCancel' variant="danger" type="submit" onClick={onCancel}>
                Cancel
              </Button>
            </div>
          </div>

        </Form>
      </Jumbotron>
    </div>
  );

}

export default withRouter(AddVitalSigns);