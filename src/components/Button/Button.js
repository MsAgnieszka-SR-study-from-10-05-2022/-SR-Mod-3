import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserSecret } from '@fortawesome/free-solid-svg-icons';

Button.defaultProps = {
    bgColor: 'antiquewhite',
    labelColor: 'darkred',
  };

function Button({ children, bgColor, labelColor }) {
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
        <button style={buttonStyles}>
            <FontAwesomeIcon icon={faUserSecret} />
            {children}
        </button>
    );
};

export default Button;