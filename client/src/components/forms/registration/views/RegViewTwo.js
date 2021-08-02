// Import React
import React from 'react';

// Import React-Bootstrap
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

// Import Custom Components
import ProgressBar from '../progressBar/ProgressBar';

// RegViewTwo Component
export default function RegViewTwo(props) {

    // Conditional Rendering Logic, if currentView doesn't equal 2, return null, else return the second view
    if (props.currentView !== 2) {
        return null
    } else {
        return (
            // RegViewTwo
            <div>
                {/* Title */}
                <h1 className="registration-form-title">Organization Info</h1>
                {/* Subtitle */}
                <h5 className="registration-form-subtitle">Tell us about your organization</h5>

                {/* Form Group */}
                <Form.Group className="registration-form-group">
                    {/* Form Label */}
                    <Form.Label>Business Address</Form.Label>
                    {/* Form Control Field */}
                    {/* On form change we call the 'handleChange' function to update the state of this form.[key], we then set the value of the field to form.[key] to update in real time */}
                    <Form.Control type="text" className="registration-form-input" placeholder="Business Address" name="address" onChange={props.handleChange} value={props.form.address}/>
                </Form.Group>

                {/* Form Group */}
                <Form.Group className="registration-form-group">
                    {/* Form Label */}
                    <Form.Label>Phone Number</Form.Label>
                    {/* Form Control Field */}
                    {/* On form change we call the 'handleChange' function to update the state of this form.[key], we then set the value of the field to form.[key] to update in real time */}
                    <Form.Control type="text" className="registration-form-input" placeholder="Phone Number" name="phoneNumber" onChange={props.handleChange} value={props.form.phoneNumber} />
                </Form.Group>

                {/* Form Group */}
                <Form.Group className="registration-form-group">
                    {/* Form Label */}
                    <Form.Label>NPI Number</Form.Label>
                    {/* Form Control Field */}
                    {/* On form change we call the 'handleChange' function to update the state of this form.[key], we then set the value of the field to form.[key] to update in real time */}
                    <Form.Control type="text" className="registration-form-input" placeholder="NPI Number" name="npiNumber" onChange={props.handleChange} value={props.form.npiNumber} />
                </Form.Group>

                {/* Div for the 'Continue' and 'Back' buttons */}
                <div className="registration-form-btn-div">
                    {/* Use a Container, Rows, and Columns to layout the buttons */}
                    <Container className="registration-form-btn-container">
                        <Row>
                            <Col md={6}>
                                <Button variant="registration-form-btn-alt" type="button" onClick={() => {props.changeView(1)}}>
                                    Back
                                </Button>
                            </Col>
                            <Col md={6}>
                            {/* Conditional Rendering Logic, if the isComplete state prop is true, display the button that will let them continue, else display the disabled button */}
                            {props.isComplete.viewTwo ?
                                <Button variant="registration-form-btn" type="button" onClick={() => {props.changeView(3)}}>
                                    Continue
                                </Button>
                            :
                                <Button variant="registration-form-btn registration-form-btn-disabled" disabled>
                                    Continue
                                </Button>
                            }
                            </Col>
                        </Row>
                    </Container>
                </div>
                {/* The ProgressBar component, allows us to pass in props to control the different classes applied */}
                {/* Using a ProgressBar component while passing in the classes as props allows us to reuse the same code while changing the parts that we need to  */}
                <ProgressBar circleOne={"visited"} circleTwo={"current"} circleThree={""} textOne={"disabled"} textTwo={"active"} textThree={"disabled"}/>
            </div>
        )
    }
}