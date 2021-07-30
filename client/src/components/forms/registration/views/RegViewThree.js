import React from 'react';

// Import React-Bootstrap
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export default function RegViewThree(props) {

    if (props.currentView !== 3) {
        return null
    } else {
        return (
            <div>
                <h1 className="registration-form-title">Time to review!</h1>
                <h5 className="registration-form-subtitle">How does everything look?</h5>
                <Form.Group className="registration-form-group">
                    <Form.Label>First Name</Form.Label>
                    <Form.Text>{props.form.firstName}</Form.Text>
                </Form.Group>
                <Form.Group className="registration-form-group">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Text>{props.form.lastName}</Form.Text>
                </Form.Group>
                <Form.Group className="registration-form-group">
                    <Form.Label>Email</Form.Label>
                    <Form.Text>{props.form.email}</Form.Text>
                </Form.Group>
                <Form.Group className="registration-form-group">
                    <Form.Label>NPI Number</Form.Label>
                    <Form.Text>{props.form.npiNumber}</Form.Text>
                </Form.Group>
                <Form.Group className="registration-form-group">
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Text>{props.form.phoneNumber}</Form.Text>
                </Form.Group>
                <Form.Group className="registration-form-group">
                    <Form.Label>Business Address</Form.Label>
                    <Form.Text>{props.form.address}</Form.Text>
                </Form.Group>
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
                <div className="progress-div">
                    <div className="progress-one-div">
                        <div className="progress-circle visited"></div>
                        <h5 className="progress-div-text disabled">User Information</h5>
                    </div>
                    <div className="progress-two-div">
                        <div className="progress-circle progress-circle-middle visited"></div>
                        <hr />
                        <h5 className="progress-div-text disabled">Organization Information</h5>
                    </div>
                    <div className="progress-three-div">
                        <div className="progress-circle current"></div>
                        <h5 className="progress-div-text active">Review Information</h5>
                    </div>
                </div>
            </div>
        )
    }

}