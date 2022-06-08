import React from 'react';

import { Menu, MenuLink } from 'components/Navigation';

function Nav() {
    return (
        <Menu>
            <MenuLink href="/" menuLinkTitle='Home'></MenuLink>
            <MenuLink href="/about" isActive={true} menuLinkTitle='About'></MenuLink>
            <MenuLink href="/contact"  menuLinkTitle='Contact'></MenuLink>
            <MenuLink href="/posts" menuLinkTitle='Posts'></MenuLink>
        </Menu>
    );
}

export default Nav;