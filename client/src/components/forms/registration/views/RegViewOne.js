import React from 'react';

// Import React-Bootstrap
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export default function RegViewOne(props) {

    if (props.form.currentView != 1) {
        return null
    } else {
        return (
            <div>
                <h1 className="registration-form-title">Let's get started!</h1>
                <h5 className="registration-form-subtitle">Tell us a little about youself</h5>
                <Form.Group className="registration-form-group">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control type="text" className="registration-form-input" placeholder="First Name" name="firstName" onChange={props.handleChange} value={props.form.firstName}/>
                </Form.Group>
                <Form.Group className="registration-form-group">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control type="text" className="registration-form-input" placeholder="Last Name" name="lastName" onChange={props.handleChange} value={props.form.lastName} />
                </Form.Group>
                <Form.Group className="registration-form-group">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" className="registration-form-input" placeholder="Email" name="email" onChange={props.handleChange} value={props.form.email} />
                </Form.Group>
                <div className="registration-form-btn-div">
                    <Button variant="registration-form-btn" type="button" onClick={props.handleChange} value={props.form.view + 1}>
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
        )
    }

}