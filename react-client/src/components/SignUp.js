// Import necessary dependencies
import React, { useState } from 'react';
import { gql, useMutation } from '@apollo/client';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { withRouter, useHistory } from 'react-router-dom';
import jwt from 'jwt-decode';
import './UI.css';

// Define GraphQL mutation
export const SIGN_UP = gql`
  mutation (
    $email: String!,
    $firstName: String!,
    $lastName:String!,
    $password:String!,
    $userCategory:String!,
    $phoneNumber:String!,
  ) {
    signUp(
      email: $email, firstName: $firstName, lastName: $lastName,
      password: $password, userCategory: $userCategory, phoneNumber: $phoneNumber,
    ) {
      _id
    }
  }
`;

// Define Register component
const Register = () => {
  // Declare state variables and refs for form inputs
  let email, password, firstName, lastName, phoneNumber;
  const [signUp, { data, loading, error }] = useMutation(SIGN_UP);
  const history = useHistory();
  const [user, setUser] = useState("UserCategory");

  // Handle change in user category radio button
  const handleRadioChange = (event) => {
    setUser(event.target.value);
  };

  // Render form and handle submission
  if (loading) return 'Submitting...';
  if (error) return `Submission error! ${error.message}`;
  return (
    <div className='container'>
      <Jumbotron className='form'>
        <h2>Register</h2>
        <Form onSubmit={(e) => {
          e.preventDefault();
          signUp({
            variables: {
              email: email.value, password: password.value, firstName: firstName.value, lastName: lastName.value,
              userCategory: user, phoneNumber: phoneNumber.value,
            },
          });

          // Set user category and name in local storage
          localStorage.setItem('userCategory', user);
          localStorage.setItem('name', firstName.value);

          // Clear form inputs
          email.value = '';
          password.value = '';
          firstName.value = '';
          lastName.value = '';
          phoneNumber.value = '';

          // Redirect to appropriate page based on user category
          if (user === 'patient') {
            history.push(`/patient`);
          } else {
            history.push(`/nurse`);
          }
        }}>
          <Form.Group>
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" name="email" id="email" placeholder="Enter email" ref={node => { email = node; }} required/>
          </Form.Group>

          <Form.Group>
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" name="password" id="password" placeholder="Enter password" ref={node => { password = node; }} required/>
          </Form.Group>

          <Form.Group>
            <Form.Label>First Name</Form.Label>
            <Form.Control type="text" name="firstName" id="firstName" placeholder="Enter first name" ref={node => { firstName = node; }} required/>
          </Form.Group>

          <Form.Group>
            <Form.Label>Last Name</Form.Label>
            <Form.Control type="text" name="lastName" id="lastName" placeholder="Enter last name" ref={node => { lastName = node; }} required/>
          </Form.Group>
          
          <Form.Group>
            <Form.Label>User Category</Form.Label>
            <div className="radio-group" onChange={handleRadioChange} required>
              <div className="radio">
                <input type="radio" value="nurse" name="userCategory" id="nurse" />
                <label htmlFor="nurse">Nurse</label>
              </div>
              <div className="radio">
                <input type="radio" value="patient" name="userCategory" id="patient" />
                <label htmlFor="patient">Patient</label>
              </div>
            </div>
          </Form.Group>
          <Form.Group>
  <Form.Label>Phone Number</Form.Label>
  <Form.Control 
    type="tel" 
    pattern="[0-9]{10}" 
    maxLength="10"
    name="phoneNumber" 
    id="phoneNumber" 
    placeholder="Enter phone number" 
    onChange={(e) => {
      e.target.value = e.target.value.replace(/[^0-9]/g, '');
    }}
    ref={node => { phoneNumber = node; }} 
    required
  />
</Form.Group>
      <Button variant="primary" type="submit">Register</Button>
    </Form>
  </Jumbotron>
</div>
);
}

export default withRouter(Register);
