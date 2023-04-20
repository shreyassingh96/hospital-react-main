// Import necessary dependencies from React and other libraries
import { useState } from 'react';
import { useMutation, gql } from '@apollo/client';
import { useHistory } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './UI.css';
import jwt from 'jwt-decode';
import Jumbotron from 'react-bootstrap/Jumbotron';

// Define the GraphQL mutation
const LOGIN = gql`
  mutation authenticate($email: String!, $password: String!) {
    authenticate(email: $email, password: $password) {
      _id
      token
    }
  }
`;

// Define the UserLogin functional component
const UserLogin = () => {
  // Initialize the useHistory hook to redirect the user after successful login
  const history = useHistory();
  // Initialize the useState hooks to keep track of the user's email, password, and form validation status
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [validated, setValidated] = useState(false);

  // Initialize the useMutation hook to execute the GraphQL mutation
  const [login, { error, data }] = useMutation(LOGIN);

  // Define the handleSubmit function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.stopPropagation();
    } else {
      login({ variables: { email, password } });
    }
    setValidated(true);
  };

  // Handle errors returned by the GraphQL mutation
  if (error) {
    return `Login Failed! ${error.message}`;
  }

  // Handle the data returned by the GraphQL mutation after successful login
  if (data) {
    // Decode the JWT token returned by the GraphQL mutation
    const decoded = jwt(data.authenticate.token);
    // Save the user's category and name to local storage
    localStorage.setItem('userCategory', decoded.userCategory);
    localStorage.setItem('name', decoded.name);
    // Redirect the user based on their category
    if (decoded.userCategory === 'patient') {
      history.push('/patient');
    } else {
      history.push('/nurse');
    }
  }

  // Render the UserLogin component
  return (
    <div className="container">
      <Jumbotron className='form'>
        <h2>Log in</h2>
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <Form.Group controlId="formEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              required
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
            <Form.Control.Feedback type="invalid">
              Please provide a valid email.
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group controlId="formPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              required
              type="password"
              placeholder="Password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
            <Form.Control.Feedback type="invalid">
              Please provide a valid password.
            </Form.Control.Feedback>
          </Form.Group>
          <div className='btn-primary:hover'>
            <Button variant="primary" type="submit">
              Log in
            </Button>
          </div>
        </Form>
      </Jumbotron>
    </div>
  );
};

// Export the UserLogin component as the default export
export default UserLogin;