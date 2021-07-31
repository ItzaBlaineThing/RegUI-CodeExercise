import React from 'react';

// Import React-Bootstrap
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

// Import Custom Components
import ProgressBar from '../progressBar/ProgressBar';

export default function RegViewThree(props) {

    if (props.currentView !== 3) {
        return null
    } else {
        return (
            <div>
                <h1 className="registration-form-title">Time to review!</h1>
                <h5 className="registration-form-subtitle">How does everything look?</h5>
                <Container className="registration-form-container">
                    <Row>
                        <Col>
                            <Form.Group className="registration-form-group review">
                                <Form.Label className="registration-form-label">First Name</Form.Label>
                                <Form.Text className="registration-form-text">{props.form.firstName}</Form.Text>
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group className="registration-form-group review">
                                <Form.Label className="registration-form-label">Last Name</Form.Label>
                                <Form.Text className="registration-form-text">{props.form.lastName}</Form.Text>
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Form.Group className="registration-form-group review">
                                <Form.Label className="registration-form-label">Email</Form.Label>
                                <Form.Text className="registration-form-text">{props.form.email}</Form.Text>
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group className="registration-form-group review">
                                <Form.Label className="registration-form-label">NPI Number</Form.Label>
                                <Form.Text className="registration-form-text">{props.form.npiNumber}</Form.Text>
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Form.Group className="registration-form-group review">
                                <Form.Label className="registration-form-label">Phone Number</Form.Label>
                                <Form.Text className="registration-form-text">{props.form.phoneNumber}</Form.Text>
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group className="registration-form-group review">
                                <Form.Label className="registration-form-label">Business Address</Form.Label>
                                <Form.Text className="registration-form-text">{props.form.address}</Form.Text>
                            </Form.Group>
                        </Col>
                    </Row>
                </Container>
                <div className="registration-form-checkbox-div">
                    <Form.Check type="checkbox" label="I agree to the terms and conditions" />
                </div>
                <div className="registration-form-btn-div">
                <Container className="registration-form-btn-container">
                        <Row>
                            <Col>
                                <Button variant="registration-form-btn-alt" type="button" onClick={() => {props.changeView(2)}}>
                                    Back
                                </Button>
                            </Col>
                            <Col>
                                <Button variant="registration-form-btn" type="submit">
                                    Submit
                                </Button>
                            </Col>
                        </Row>
                    </Container>
                </div>
                <ProgressBar circleOne={"visited"} circleTwo={"visited"} circleThree={"current"} textOne={"disabled"} textTwo={"disabled"} textThree={"active"}/>
            </div>
        )
    }

}