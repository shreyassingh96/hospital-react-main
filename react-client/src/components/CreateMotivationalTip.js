import React from 'react';
import { gql, useMutation } from '@apollo/client';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { withRouter, useHistory } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLightbulb, faMessage } from '@fortawesome/free-solid-svg-icons';

// GraphQL mutation to create a motivational tip
export const Create_Tip = gql`
  mutation($message: String!) {
    createMotivationalTip(message: $message) {
      _id
    }
  }
`;

function CreateTip(props) {
  // Reference to the "message" input field
  let message;

  // Hook to access the history object of the React Router
  const history = useHistory();

  // Mutation hook to create a motivational tip
  const [createMotivationalTip, { data, loading, error }] = useMutation(Create_Tip);

  // Handler for "Cancel" button click
  const onCancel = e => {
    e.preventDefault();
    history.push('/nurse');
  }

  // Show a loading message while the mutation is in progress
  if (loading) return 'Submitting...';

  // Show an error message if the mutation fails
  if (error) return `Submission error! ${error.message}`;

  // Render the component
  return (
    <div className="container">
      <Jumbotron className='form'>
      <h2>Send Motivational Tip</h2>

      <Form className='form' onSubmit={e => {
        // Call the mutation to create a motivational tip
        createMotivationalTip({
          variables: {
            message: message.value
          }
        });

        // Clear the input field
        message.value = '';

        // Show a success message
        alert("Message sent!");

        // Navigate to the nurse page
        history.push('/nurse');
      }}>
        <Form.Group>
          <Form.Label> Tip of the Day for the Patient</Form.Label><br />
          <Form.Control type="text" name="message" id="message" placeholder="Enter message" ref={node => { message = node; }} /><br />
        </Form.Group>

        <div className='button'>
          <Button className='buttonSave' variant="primary" type="submit">
            Send
          </Button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <Button className='buttonCancel' variant="danger" type="submit" onClick={onCancel}>
            Cancel
          </Button>
        </div>
      </Form></Jumbotron>
    </div>
  );
}

// Export the component wrapped in the withRouter higher-order component
export default withRouter(CreateTip);
