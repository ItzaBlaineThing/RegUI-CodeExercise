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
        firstName: "",
        lastName: "",
        email: "",
        address: "",
        phoneNumber: "",
        npiNumber: "",
        currentView: 1
    });

    // Function to handle changes and update local state values
    function handleChange(event) {
        // Destructure the name and value of the event.target
        const {name, value} = event.target;
        // Calling setForm to update the local state value for form.name
        setForm((prevValue) => {
            return {
                // Returns previous values
                ...prevValue,
                // [name] is the key being entered(firstName, lastName, email, etc.), the value is what is being entered
                [name]: value
            }
        });
    }

    // var view1 = false;

    // if (form.view === 1) {
    //     view1 = true;
    // }

    return (
        <div className="registration-form-div">
            <Form className="registration-form">
                <h2 id="brand">Availity</h2>
                <RegViewOne form={form} handleChange={handleChange} />
                {/* <RegViewTwo form={form} handleChange={handleChange} /> */}
                <RegViewThree form={form} handleChange={handleChange} />
            </Form>
        </div>
    )
}