import { useState } from 'react';
import { useMutation, gql } from '@apollo/client';
import { useHistory } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './UI.css';
import jwt from 'jwt-decode';
import Jumbotron from 'react-bootstrap/Jumbotron';

const LOGIN = gql`
  mutation authenticate($email: String!, $password: String!) {
    authenticate(email: $email, password: $password) {
      _id
      token
    }
  }
`;

const UserLogin = () => {
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [validated, setValidated] = useState(false);

  const [login, { error, data }] = useMutation(LOGIN);

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

  if (error) {
    return `Login Failed! ${error.message}`;
  }

  if (data) {
    const decoded = jwt(data.authenticate.token);
    localStorage.setItem('userCategory', decoded.userCategory);
    localStorage.setItem('name', decoded.name);
    if (decoded.userCategory === 'patient') {
      history.push('/patient');
    } else {
      history.push('/nurse');
    }
  }

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

export default UserLogin;
