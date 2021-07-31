// Import React
import React from 'react';

// Import React-Bootstrap
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

// Import Custom Components
import ProgressBar from '../progressBar/ProgressBar';

// RegViewOne Component
export default function RegViewOne(props) {

    // Conditional Rendering Logic, if currentView doesn't equal 1, return null, else return the first view
    if (props.currentView !== 1) {
        return null
    } else {
        return (
            // RegViewOne
            <div>
                {/* Title */}
                <h1 className="registration-form-title">Let's get started!</h1>
                {/* Subtitle */}
                <h5 className="registration-form-subtitle">Tell us a little about youself</h5>

                {/* Form Group */}
                <Form.Group className="registration-form-group">
                    {/* Form Label */}
                    <Form.Label>First Name</Form.Label>
                    {/* Form Control Field */}
                    {/* On form change we call the 'handleChange' function to update the state of this form.[key], we then set the value of the field to form.[key] to update in real time */}
                    <Form.Control type="text" className="registration-form-input" placeholder="First Name" name="firstName" onChange={props.handleChange} value={props.form.firstName}/>
                </Form.Group>

                {/* Form Group */}
                <Form.Group className="registration-form-group">
                    {/* Form Label */}
                    <Form.Label>Last Name</Form.Label>
                    {/* Form Control Field */}
                    {/* On form change we call the 'handleChange' function to update the state of this form.[key], we then set the value of the field to form.[key] to update in real time */}
                    <Form.Control type="text" className="registration-form-input" placeholder="Last Name" name="lastName" onChange={props.handleChange} value={props.form.lastName} />
                </Form.Group>

                {/* Form Group */}
                <Form.Group className="registration-form-group">
                    {/* Form Label */}
                    <Form.Label>Email</Form.Label>
                    {/* Form Control Field */}
                    {/* On form change we call the 'handleChange' function to update the state of this form.[key], we then set the value of the field to form.[key] to update in real time */}
                    <Form.Control type="email" className="registration-form-input" placeholder="Email" name="email" onChange={props.handleChange} value={props.form.email} />
                </Form.Group>

                {/* Div for the 'Continue' button */}
                <div className="registration-form-btn-div">
                    {/* Conditional Rendering Logic, if the isComplete state prop is true, display the button that will let them continue, else display the disabled button */}
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
                {/* The ProgressBar component, allows us to pass in props to control the different classes applied */}
                {/* Using a ProgressBar component while passing in the classes as props allows us to reuse the same code while changing the parts that we need to  */}
                <ProgressBar circleOne={"current"} circleTwo={""} circleThree={""} textOne={"active"} textTwo={"disabled"} textThree={"disabled"}/>
            </div>
        )
    }

}