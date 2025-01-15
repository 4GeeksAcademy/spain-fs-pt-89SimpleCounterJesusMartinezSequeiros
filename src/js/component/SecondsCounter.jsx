import React from "react";
import PropTypes from "prop-types";

function SecondsCounter({ seconds }) {
    const digitOne = Math.floor(seconds / 1) % 10;
    const digitTwo = Math.floor(seconds / 10) % 10;
    const digitThree = Math.floor(seconds / 100) % 10;
    const digitFour = Math.floor(seconds / 1000) % 10;

    return (
        <div className="bigCounter">
            <div className="calendar">
                <i className="far fa-clock"></i>
            </div>
            <div className="digit">{digitFour}</div>
            <div className="digit">{digitThree}</div>
            <div className="digit">{digitTwo}</div>
            <div className="digit">{digitOne}</div>
        </div>
    );
}

SecondsCounter.propTypes = {
    seconds: PropTypes.number.isRequired,
};

export default SecondsCounter;
