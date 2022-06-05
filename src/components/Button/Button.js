import React from 'react';

Button.defaultProps = {
    bgColor: 'antiquewhite',
    labelColor: 'darkred',
  };

function Button({ labelTitle, bgColor, labelColor }) {
    const buttonStyles = {
        padding: "10px 20px",
        backgroundColor: bgColor,
        color: labelColor,
        fontSize: 18,
        fontWeight: 'bold',
        border: `2px solid ${labelColor}`,
        cursor: 'pointer',
    };

    return (
        <button style={buttonStyles}>{labelTitle}</button>
    );
};

export default Button;