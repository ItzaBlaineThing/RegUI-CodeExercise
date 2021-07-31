// Import React
import React from 'react';

// ProgressBar Component
export default function ProgressBar(props) {

    return (    
        // Div for the ProgressBar
        <div className="progress-div">
            {/* Div for one of the individual circles that make up the ProgressBar, 1/3 */}
            <div className="progress-one-div">
                {/* Uses a div with a CSS class to create the base circle */}
                {/* The class that determines the color of the cirlce is passed in dynamically as a prop */}
                <div className={`progress-circle ${props.circleOne}`}></div>
                {/* Text to show which step they're on, this doesn't change */}
                {/* The class that determines the color and font weight is passed in dynamically as a prop */}
                <h5 className={`progress-div-text ${props.textOne}`}>User Information</h5>
            </div>
            {/* Div for one of the individual circles that make up the ProgressBar, 2/3 */}
            <div className="progress-two-div">
                {/* Uses a div with a CSS class to create the base circle */}
                {/* The class that determines the color of the cirlce is passed in dynamically as a prop */}
                <div className={`progress-circle progress-circle-middle ${props.circleTwo}`}></div>
                {/* Uses an 'hr' element to create the line that spans the progress bar */}
                <hr />
                {/* Text to show which step they're on, this doesn't change */}
                {/* The class that determines the color and font weight is passed in dynamically as a prop */}
                <h5 className={`progress-div-text ${props.textTwo}`}>Organization Information</h5>
            </div>
            {/* Div for one of the individual circles that make up the ProgressBar, 3/3 */}
            <div className="progress-three-div">
                {/* Uses a div with a CSS class to create the base circle */}
                {/* The class that determines the color of the cirlce is passed in dynamically as a prop */}
                <div className={`progress-circle ${props.circleThree}`}></div>
                {/* Text to show which step they're on, this doesn't change */}
                {/* The class that determines the color and font weight is passed in dynamically as a prop */}
                <h5 className={`progress-div-text ${props.textThree}`}>Review Information</h5>
            </div>
        </div>
    )
}