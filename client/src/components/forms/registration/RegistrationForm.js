// Import React
import React, { useState } from 'react';

// Import React-Bootstrap
import Form from 'react-bootstrap/Form';

// Import Custom Components
import RegViewOne from './views/RegViewOne';
import RegViewTwo from './views/RegViewTwo';
import RegViewThree from './views/RegViewThree';

// RegistrationForm Component
export default function RegistrationForm() {

    // Setting initial state
    const [form, setForm] = useState({
        firstName: "",
        lastName: "",
        email: "",
        address: "",
        phoneNumber: "",
        npiNumber: ""
    });

    // Setting state to track if the fields on each view are completely filled
    const [isComplete, setIsComplete] = useState({
        viewOne: false,
        viewTwo: false
    });

    // Function to check if there is content for each field for the view provided in the parameters
    function contentChecker(itemOne, itemTwo, itemThree, view) {

        // If each of the fields on this view are not empty, change the state for this view to true, which controls conditional rendering of the continue button
        // Else change the state for this view to false to disable the continue button
        if (itemOne.length && itemTwo.length && itemThree.length > 0) {
            setIsComplete((prevValue) => {
                return {
                    ...prevValue,
                    [view]: true
                }
            });
        } else {
            setIsComplete((prevValue) => {
                return {
                    ...prevValue,
                    [view]: false
                }
            });
        }
    }

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

        // Call the function contentChecker which checks to make sure the content fields are not empty
        // We can use this function for as many different views as we have as the parameters are dynamic
        contentChecker(form.firstName, form.lastName, form.email, "viewOne");
        contentChecker(form.address, form.phoneNumber, form.npiNumber, "viewTwo");
    }

    // Setting state to track the currentView
    const [currentView, setCurrentView] = useState(1);

    // Function to update the currentView
    function changeView(viewSelected) {
        
        // Takes in the new view value and updates the state for currentView which determines rendering
        setCurrentView(viewSelected);
    }

    return (
        // Main Reg Form
        <div className="registration-form-div">
            <Form className="registration-form">
                <h2 id="brand">Availity</h2>
                {/* Load all three views that will be used in the registration form and only render the current view */}
                {/* This allows a fluid user experience that is not broken by having to reload the page */}
                {/* Pass in the props that will be used in the individual view components */}

                {/* This includes various's states and functions that will update those states */}
                {/* form(state): provides the information currently obtained */}
                {/* handleChange(function): will update the form(state) when content is entered in the fields, this is also used to ensure that the fields are not empty */}
                {/* currentView(state): used to keep track of the current view the user is on, 3 total */}
                {/* changeView(function): will update the state currentView(state) when the user clicks the 'Continue' or 'Back' buttons*/}
                {/* isComplete(state): used for conditional rendering of the 'Continue' button depending on if the fields on that view are not empty*/}
                <RegViewOne form={form} handleChange={handleChange} currentView={currentView} changeView={changeView} isComplete={isComplete} />
                <RegViewTwo form={form} handleChange={handleChange} currentView={currentView} changeView={changeView} isComplete={isComplete} />
                <RegViewThree form={form} handleChange={handleChange} currentView={currentView} changeView={changeView} />
            </Form>
        </div>
    )
}