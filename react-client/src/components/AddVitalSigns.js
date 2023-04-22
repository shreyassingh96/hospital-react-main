import React from 'react';
import { gql, useMutation } from '@apollo/client';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { withRouter, useHistory } from 'react-router-dom';
import './UI.css';

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

  // const [showSuccess, setShowSuccess] = useState(false);
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
      <Jumbotron className='form'>
      <h2>Add Your Vital Signs</h2>
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
              // Show success alert
  window.alert("Vital signs added successfully!");
            // Redirect to patient page
            history.push('/patient');
          }}
        >
          <Form.Group>
            <Form.Label>Body Temperature</Form.Label>
            <Form.Control type="number" name="bodyTemperature" id="bodyTemperature" placeholder="Enter body temperature" ref={node => { bodyTemperature = node; }} />
          </Form.Group>

          <Form.Group>
            <Form.Label>Heart Rate</Form.Label>
            <Form.Control type="number" name="heartRate" id="heartRate" placeholder="Enter heart rate" ref={node => { heartRate = node; }} />
          </Form.Group>
          
          <Form.Group>
            <Form.Label>Blood Pressure</Form.Label>
            <Form.Control type="number" name="bloodPressure" id="bloodPressure" placeholder="Enter blood pressure" ref={node => { bloodPressure = node; }} />
          </Form.Group>

          <Form.Group>
            <Form.Label>Respiratory Rate</Form.Label>
            <Form.Control type="number" name="respiratoryRate" id="respiratoryRate" placeholder="Enter respiratory rate" ref={node => { respiratoryRate = node; }} />
          </Form.Group>

          <Form.Group>
            <Form.Label>Weight</Form.Label>
            <Form.Control type="number" name="weight" id="weight" placeholder="Enter weight" ref={node => { weight = node; }} />
          </Form.Group>

          <div className='button-container' style={{textAlign: 'center'}}>
            <div className='button'>
              <Button className='buttonSave' variant="primary" type="submit">
                Update
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