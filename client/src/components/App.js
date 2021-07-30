import React from 'react';

// Import React Router
import { Route, BrowserRouter as Router, Switch} from 'react-router-dom';

// Import Custom Components
import RegistrationForm from './forms/registration/RegistrationForm';

export default function App() {

    return (
        <Router>

            <Switch>
                <Route path="/" component={RegistrationForm} />
            </Switch>

        </Router>
    )
}