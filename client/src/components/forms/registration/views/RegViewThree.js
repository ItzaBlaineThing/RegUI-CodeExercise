// Import React
import React, { useState } from 'react';

// Import React-Bootstrap
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

// Import Custom Components
import ProgressBar from '../progressBar/ProgressBar';

// RegViewThree Component
export default function RegViewThree(props) {

    // Setting state to track if the checkbox is checked or not, this is used for conditional rendering of the 'Submit' button
    const [isChecked, setIsChecked] = useState(false);

    // Function to update the changeChecked state
    function changeChecked() {
        // if (isChecked !== false) {
        //     setIsChecked(false);
        // } else {
        //     setIsChecked(true);
        // }
        // Using ternary operator to condense if/else statement above
        isChecked ? setIsChecked(false) : setIsChecked(true);
    }

    // Conditional Rendering Logic, if currentView doesn't equal 3, return null, else return the third view
    if (props.currentView !== 3) {
        return null
    } else {
        return (
            // RegViewThree
            <div>
                {/* Title */}
                <h1 className="registration-form-title">Time to review!</h1>
                {/* Subtitle */}
                <h5 className="registration-form-subtitle">How does everything look?</h5>

                {/* Container, Rows, and Columns to layout the fields to display the information they provided */}
                <Container className="registration-form-container">
                    {/* Each Row has 2 Columns so each Column's content will take up half of the Row */}
                    <Row>
                        <Col>
                            {/* Form Group */}
                            <Form.Group className="registration-form-group review">
                                {/* Form Label */}
                                <Form.Label className="registration-form-label">First Name</Form.Label>
                                {/* Form Text that pulls in the prop from the form state to display the first name provided */}
                                <Form.Text className="registration-form-text">{props.form.firstName}</Form.Text>
                            </Form.Group>
                        </Col>
                        <Col>
                            {/* Form Group */}
                            <Form.Group className="registration-form-group review">
                                {/* Form Label */}
                                <Form.Label className="registration-form-label">Last Name</Form.Label>
                                {/* Form Text that pulls in the prop from the form state to display the last name provided */}
                                <Form.Text className="registration-form-text">{props.form.lastName}</Form.Text>
                            </Form.Group>
                        </Col>
                    </Row>
                    {/* Each Row has 2 Columns so each Column's content will take up half of the Row */}
                    <Row>
                        <Col>
                            {/* Form Group */}
                            <Form.Group className="registration-form-group review">
                                {/* Form Label */}
                                <Form.Label className="registration-form-label">Email</Form.Label>
                                {/* Form Text that pulls in the prop from the form state to display the email provided */}
                                <Form.Text className="registration-form-text">{props.form.email}</Form.Text>
                            </Form.Group>
                        </Col>
                        <Col>
                            {/* Form Group */}
                            <Form.Group className="registration-form-group review">
                                {/* Form Label */}
                                <Form.Label className="registration-form-label">NPI Number</Form.Label>
                                {/* Form Text that pulls in the prop from the form state to display the npi number provided */}
                                <Form.Text className="registration-form-text">{props.form.npiNumber}</Form.Text>
                            </Form.Group>
                        </Col>
                    </Row>
                    {/* Each Row has 2 Columns so each Column's content will take up half of the Row */}
                    <Row>
                        <Col>
                            {/* Form Group */}
                            <Form.Group className="registration-form-group review">
                                {/* Form Label */}
                                <Form.Label className="registration-form-label">Phone Number</Form.Label>
                                {/* Form Text that pulls in the prop from the form state to display the phone number provided */}
                                <Form.Text className="registration-form-text">{props.form.phoneNumber}</Form.Text>
                            </Form.Group>
                        </Col>
                        <Col>
                            {/* Form Group */}
                            <Form.Group className="registration-form-group review">
                                {/* Form Label */}
                                <Form.Label className="registration-form-label">Business Address</Form.Label>
                                {/* Form Text that pulls in the prop from the form state to display the business address provided */}
                                <Form.Text className="registration-form-text">{props.form.address}</Form.Text>
                            </Form.Group>
                        </Col>
                    </Row>
                </Container>
                {/* Div for the checkbox */}
                <div className="registration-form-checkbox-div">
                    {/* Checkbox for terms and conditions, the submit button will not be active until this is checked */}
                    <Form.Check type="checkbox" label="I agree to the terms and conditions" onClick={changeChecked} />
                </div>
                {/* Div for the 'Continue' button */}
                <div className="registration-form-btn-div">
                <Container className="registration-form-btn-container">
                        <Row>
                            <Col md={6}>
                                <Button variant="registration-form-btn-alt" type="button" onClick={() => {props.changeView(2)}}>
                                    Back
                                </Button>
                            </Col>
                            <Col md={6}>
                            {/* Conditional Rendering Logic, if the isComplete state prop is true, display the button that will let them submit, else display the disabled button */}
                            {isChecked ? 
                                <Button variant="registration-form-btn" type="submit">
                                    Submit
                                </Button>
                            :
                                <Button variant="registration-form-btn registration-form-btn-disabled" type="submit" disabled>
                                    Submit
                                </Button>
                            }
                            </Col>
                        </Row>
                    </Container>
                </div>
                {/* The ProgressBar component, allows us to pass in props to control the different classes applied */}
                {/* Using a ProgressBar component while passing in the classes as props allows us to reuse the same code while changing the parts that we need to  */}
                <ProgressBar circleOne={"visited"} circleTwo={"visited"} circleThree={"current"} textOne={"disabled"} textTwo={"disabled"} textThree={"active"}/>
            </div>
        )
    }

}