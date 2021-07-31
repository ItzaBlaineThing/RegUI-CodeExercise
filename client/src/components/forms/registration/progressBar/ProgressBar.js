import React from 'react';

export default function ProgressBar(props) {

    return (
        <div className="progress-div">
            <div className="progress-one-div">
                <div className={`progress-circle ${props.circleOne}`}></div>
                <h5 className={`progress-div-text ${props.textOne}`}>User Information</h5>
            </div>
            <div className="progress-two-div">
                <div className={`progress-circle progress-circle-middle ${props.circleTwo}`}></div>
                <hr />
                <h5 className={`progress-div-text ${props.textTwo}`}>Organization Information</h5>
            </div>
            <div className="progress-three-div">
                <div className={`progress-circle ${props.circleThree}`}></div>
                <h5 className={`progress-div-text ${props.textThree}`}>Review Information</h5>
            </div>
        </div>
    )
}