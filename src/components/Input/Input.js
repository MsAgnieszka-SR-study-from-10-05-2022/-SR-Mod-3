import React from 'react';

function Input(props) {
    const {
        bgColor,
        color,
        borderSize,
        borderRadius,
        borderColor
    } = props;

    const style = {
        margin: 5,
        padding: '5px 10px',
        height: 30,
        width: '80vw',
        fontSize: 16,
        color: color,
        backgroundColor: bgColor,
        borderSize: borderSize,
        borderRadius: borderRadius,
        borderColor: borderColor,
    };

    return (
        <input style={style}></input>
    );
};

export default Input;