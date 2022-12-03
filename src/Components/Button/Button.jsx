import React from "react";
import PropTypes from 'prop-types';

import "./Button.css";

const Button = ({ actionType, label, onClick }) => {
    return (
        <button onClick={onClick} className={`button ${actionType === "add" ? "add-button" : "remove-button"}`}>
            {label}
        </button>
    )
}

export default Button;

Button.propTypes = {
    actionType: PropTypes.oneOf(["add", "remove"]),
    label: PropTypes.string.isRequired,
    onClick: PropTypes.func,
}