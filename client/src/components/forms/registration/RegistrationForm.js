import React, { useState } from 'react';

// Import React-Bootstrap
import Form from 'react-bootstrap/Form';

// Import Custom Components
import RegViewOne from './views/RegViewOne';
import RegViewTwo from './views/RegViewTwo';
import RegViewThree from './views/RegViewThree';

export default function RegistrationForm() {

    // Setting initial state
    const [form, setForm] = useState({
        firstName: "Chandler",
        lastName: "Morris",
        email: "itzablainething@gmail.com",
        address: "515 Dry Branch Way",
        phoneNumber: "999-999-9999",
        npiNumber: "9999999999"
    });

    // Function to handle changes and update local state values
    function handleChange(event) {
        // Destructure the name and value of the event.target
        const {name, value} = event.target;
        // Calling setForm to update the local state value for form.[key]
        setForm((prevValue) => {
            return {
                // Returns previous values
                ...prevValue,
                // [name] is the key being entered(firstName, lastName, email, etc.), the value is what is being entered
                [name]: value
            }
        });
    }

    // Setting state to track the currentView
    const [currentView, setCurrentView] = useState(3);

    // Function to update the currentView
    function changeView(viewSelected) {
        // Takes in the new view value and updates the state for currentView which determines rendering
        setCurrentView(viewSelected);
    }

    return (
        <div className="registration-form-div">
            <Form className="registration-form">
                <h2 id="brand">Availity</h2>
                <RegViewOne form={form} handleChange={handleChange} currentView={currentView} changeView={changeView} />
                <RegViewTwo form={form} handleChange={handleChange} currentView={currentView} changeView={changeView} />
                <RegViewThree form={form} handleChange={handleChange} currentView={currentView} changeView={changeView} />
            </Form>
        </div>
    )
}