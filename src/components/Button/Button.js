import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserSecret } from '@fortawesome/free-solid-svg-icons';

import colors from '../colors';

Button.defaultProps = {
    bgColor: colors.bgColorDefault,
    color: colors.textColorDefault,
};

function Button({ children, bgColor, color }) {
    const buttonStyles = {
        margin: 5,
        padding: "10px 20px",
        backgroundColor: bgColor,
        color: color,
        fontSize: 18,
        fontWeight: 'bold',
        border: `2px solid ${color}`,
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