import React from 'react';

function Textarea(props) {
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
        height: 250,
        width: '80vw',
        fontSize: 14,
        color: color,
        backgroundColor: bgColor,
        borderWidth: borderSize,
        borderRadius: borderRadius,
        borderColor: borderColor,
    };
    return (
        <textarea style={style}></textarea>
    );
};

export default Textarea;