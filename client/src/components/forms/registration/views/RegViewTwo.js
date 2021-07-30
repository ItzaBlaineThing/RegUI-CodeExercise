import React from 'react';

// Import React-Bootstrap
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export default function RegViewTwo(props) {

    if (props.currentView !== 2) {
        return null
    } else {
        return (
            <div>
                <h1 className="registration-form-title">Organization Info</h1>
                <h5 className="registration-form-subtitle">Tell us about your organization</h5>
                <Form.Group className="registration-form-group">
                    <Form.Label>Business Address</Form.Label>
                    <Form.Control type="text" className="registration-form-input" placeholder="Business Address" name="address" onChange={props.handleChange} value={props.form.address}/>
                </Form.Group>
                <Form.Group className="registration-form-group">
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control type="text" className="registration-form-input" placeholder="Phone Number" name="phoneNumber" onChange={props.handleChange} value={props.form.phoneNumber} />
                </Form.Group>
                <Form.Group className="registration-form-group">
                    <Form.Label>NPI Number</Form.Label>
                    <Form.Control type="text" className="registration-form-input" placeholder="NPI Number" name="npiNumber" onChange={props.handleChange} value={props.form.npiNumber} />
                </Form.Group>
                <div className="registration-form-btn-div">
                    <Container className="registration-form-btn-container">
                        <Row>
                            <Col>
                                <Button variant="registration-form-btn-alt" type="button" onClick={() => {props.changeView(1)}}>
                                    Back
                                </Button>
                            </Col>
                            <Col>
                                <Button variant="registration-form-btn" type="button" onClick={() => {props.changeView(3)}}>
                                    Continue
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
                        <div className="progress-circle progress-circle-middle current"></div>
                        <hr />
                        <h5 className="progress-div-text active">Organization Information</h5>
                    </div>
                    <div className="progress-three-div">
                        <div className="progress-circle"></div>
                        <h5 className="progress-div-text disabled">Review Information</h5>
                    </div>
                </div>
            </div>
        )
    }
}