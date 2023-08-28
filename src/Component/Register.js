import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import NavBar from './NavBar';

function Register() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        mobile: '',
        address: '',
        city: '',
        gender: 'Male', // Set the initial gender value here
    });

    // useEffect(() => {
    //     setFormData((prevData) => ({
    //         ...prevData,
    //         gender: 'Male', // Set the initial gender value once when the component mounts
    //     }));
    // }, []); // Empty dependency array ensures it runs only once
    
    const [message, setMessage] = useState('');
    const handleSubmit = async (e) => {
        e.preventDefault();
      
        try {
          const response = await axios.post('https://curd-znxg.onrender.com/api/auth/register', formData);
          console.log('Response from server:', response); // Log the response to inspect its structure
          setMessage(response.data.message);
      
          console.log('Registration successful:', response.data);
        } catch (error) {
          console.error('Registration failed:', error);
          setMessage('Registration failed');
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
                <Row className="justify-content-center mt-2">
                    <Col md={5}>
                        <h2>Register</h2>
                        <Form onSubmit={handleSubmit}>

                            <Form.Group controlId="name">
                                <Form.Label>Name</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                />
                            </Form.Group>
                            <Form.Group controlId="email">
                                <Form.Label>Email</Form.Label>
                                <Form.Control
                                    type="email"
                                    name="email"
                                    value={formData.email}
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
                            <Form.Group controlId="mobile">
                                <Form.Label>Mobile</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="mobile"
                                    value={formData.mobile}
                                    onChange={handleInputChange}
                                />
                            </Form.Group>
                            <Form.Group controlId="address">
                                <Form.Label>Address</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="address"
                                    value={formData.address}
                                    onChange={handleInputChange}
                                />
                            </Form.Group>
                            <Form.Group controlId="city">
                                <Form.Label>City</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="city"
                                    value={formData.city}
                                    onChange={handleInputChange}
                                />
                            </Form.Group>
                            <Form.Group controlId="gender">
                                <Form.Label>Gender</Form.Label>
                                <Form.Control
                                    as="select"
                                    name="gender"
                                    value={formData.gender}
                                    onChange={handleInputChange}
                                >
                                    <option>---</option>
                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>
                                    <option value="Other">Other</option>
                                </Form.Control>
                            </Form.Group>
                            <Button variant="primary" type="submit" className="mt-3">
                                Register
                            </Button>
                            <p className="mt-3">{message}</p>

                        </Form>
                        <p className="mt-3">
                            New user? <Link to="/">Login here</Link>
                        </p>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default Register;
