import React from 'react';

function Menu({ children }) {
    const styles = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        margin: '20px 5px',
        width: 150,
    };

    return (
        <nav style={styles}>
            { children }
        </nav>
    );
};

export default Menu;