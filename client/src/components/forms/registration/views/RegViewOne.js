import React, { useState } from 'react';

// Import React-Bootstrap
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

// Import Custom Components
import ProgressBar from '../progressBar/ProgressBar';

export default function RegViewOne(props) {

    if (props.currentView !== 1) {
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
                    {props.isComplete.viewOne ?
                        <Button variant="registration-form-btn" onClick={() => {props.changeView(2)}}>
                            Continue
                        </Button>
                    :
                        <Button variant="registration-form-btn registration-form-btn-disabled" disabled>
                            Continue
                        </Button>
                    }
                </div>
                <ProgressBar circleOne={"current"} circleTwo={""} circleThree={""} textOne={"active"} textTwo={"disabled"} textThree={"disabled"}/>
            </div>
        )
    }

}