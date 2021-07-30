import React from 'react';

// Import React-Bootstrap
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export default function RegViewOne(props) {

    console.log(props);

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
                    <Button variant="registration-form-btn" onClick={() => {props.changeView(2)}}>
                        Continue
                    </Button>
                </div>
                <div className="progress-div">
                    <div className="progress-one-div">
                        <div className="progress-circle current"></div>
                        <h5 className="progress-div-text active">User Information</h5>
                    </div>
                    <div className="progress-two-div">
                        <div className="progress-circle progress-circle-middle"></div>
                        <hr />
                        <h5 className="progress-div-text disabled">Organization Information</h5>
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