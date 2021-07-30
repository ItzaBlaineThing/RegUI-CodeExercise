import React from 'react';

// Import React-Bootstrap
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


export default function RegistrationForm() {
    return (
        <div className="registration-form-div">
            <Container className="registration-form-container">
                <Form className="registration-form">
                    <h2 id="brand">Availity</h2>
                    <div>
                        <h1 className="registration-form-title">Let's get started!</h1>
                        <h5 className="registration-form-subtitle">Tell us a little about youself</h5>
                        <Form.Group className="registration-form-group">
                            <Form.Label>First Name</Form.Label>
                            <Form.Control type="text" className="registration-form-input" placeholder="First Name" />
                        </Form.Group>
                        <Form.Group className="registration-form-group">
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control type="text" className="registration-form-input" placeholder="Last Name" />
                        </Form.Group>
                        <Form.Group className="registration-form-group">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" className="registration-form-input" placeholder="Email" />
                        </Form.Group>
                        <div className="registration-form-btn-div">
                            <Button variant="registration-form-btn" type="submit">
                                Continue
                            </Button>
                        </div>
                        <div className="progress-div">
                            <div className="progress-one-div">
                                <div id="progress-one"></div>
                                <h5 className="progress-div-text active">User Information</h5>
                            </div>
                            <div className="progress-two-div">
                                <div id="progress-two"></div>
                                <hr />
                                <h5 className="progress-div-text disabled">Organization Information</h5>
                            </div>
                            <div className="progress-three-div">
                                <div id="progress-three"></div>
                                <h5 className="progress-div-text disabled">Review Information</h5>
                            </div>
                        </div>
                    </div>
                </Form>
            </Container>
        </div>
    )
}