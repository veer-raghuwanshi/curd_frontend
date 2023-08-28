import React, { useState } from 'react';
import axios from 'axios';
import { Link ,useNavigate} from 'react-router-dom';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import NavBar from './NavBar';

function Login() {
  const [formData, setFormData] = useState({
    identifier: '', // Change to "identifier" to match the form field
    password: ''
  });
  const navigate = useNavigate();

  const [message, setMessage] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('https://curd-znxg.onrender.com/api/auth/login', formData);
      setMessage(response.data.message);
      navigate('/homepage');

    } catch (error) {
      setMessage('Authentication failed!! Please Correct Credentials ');
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <>
    <NavBar/>
      <Container>
      <Row className="justify-content-center mt-5">
        <Col md={5}>
          <h2>Login</h2>
          <Form onSubmit={handleLogin}>
            <Form.Group controlId="identifier">
              <Form.Label>Email or Mobile</Form.Label>
              <Form.Control
                type="text"
                name="identifier"
                value={formData.identifier} // Use "formData.identifier"
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group controlId="password">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Button variant="primary" type="submit" className="mt-3">
              Login
            </Button>
            <p className="mt-3">{message}</p>
          </Form>
          <p className="mt-3">
            New user? <Link to="/register">Register here</Link>
          </p>
        </Col>
      </Row>
    </Container>
    </>
  );
}

export default Login;
