// Import required libraries and functions
import { gql, useMutation } from '@apollo/client';
import { useHistory } from 'react-router-dom';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

// Define GraphQL mutation for creating an emergency alert
export const CREATE_EMERGENCY_ALERT = gql`
  mutation($alertMessage: String!) {
    createEmergencyAlert(alertMessage: $alertMessage) {
      _id
    }
  }
`;

function EmergencyAlert() {
  let alertMessage;
  const [createEmergencyAlert, { data, loading, error }] = useMutation(CREATE_EMERGENCY_ALERT);
  
  // Access the history object of the current component
  const history = useHistory();

  // Display appropriate message when loading or error occurs
  if (loading) return 'Sending Alert...';
  if (error) return `Alert Sending error! ${error.message}`;

  // Define a function to handle cancel button click event
  const handleCancel = () => {
    // Redirect to the Patient page
    history.push(`/patient`);
  };

  return (
    // Render a container div with a Jumbotron form
    <div className='container'>
      <Jumbotron className='form'>
        <Form
          onSubmit={(e) => {
            // Call createEmergencyAlert mutation function with the entered alertMessage value
            createEmergencyAlert({
              variables: {
                alertMessage: alertMessage.value,
              },
            });

            // Clear the input field
            alertMessage.value = '';

            // Redirect to the Patient page
            history.push(`/patient`);
          }}
        >
          <Form.Group>
            <Form.Label>Enter the Alert Message</Form.Label>
            <Form.Control
              as='textarea'
              rows={3}
              name='alertMessage'
              id='alertMessage'
              placeholder='Enter message'
              ref={(node) => {
                alertMessage = node;
              }}
            />
          </Form.Group>

          {/* <Form.Group>
            <Form.Label>Patient</Form.Label>
            <Form.Control
              type='text'
              name='patient'
              id='patient'
              placeholder='Enter Patient Id'
              ref={(node) => {
                patient = node;
              }}
            />
          </Form.Group> */}

          {/* Render Send and Cancel buttons */}
          <Button variant='primary' type='submit'>
            Send
          </Button>
          &nbsp;&nbsp;&nbsp;&nbsp;
          <Button variant='primary' type='submit' onClick={handleCancel}>
            Cancel
          </Button>
        </Form>
      </Jumbotron>
    </div>
  );
}

// Export the EmergencyAlert component as the default export
export default EmergencyAlert;