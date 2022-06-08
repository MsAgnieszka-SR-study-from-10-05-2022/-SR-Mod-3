import React from 'react';

import colors from 'components/colors';

function MenuLink({ urlAddress, menuLinkTitle, isActive }) {
    const styles = {
        display: 'flex',
        alignItems: 'center',
        justifyContent:' center',
        height: 30,
        width: '100%',
        border: '1px solid black',
        backgroundColor: isActive ? colors['bgColorDefault'] : colors['bgColorCustom'],
        cursor: 'pointer',
    };

    return (
        <a href={urlAddress} style={styles}>{menuLinkTitle}</a>
    );
};

export default MenuLink;