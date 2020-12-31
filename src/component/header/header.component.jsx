import React from 'react';
import './header.styles.scss';

import Logo from './logo/logo.component';
import NavBar from '../reusableComponents/navBar/navBar.component';

const Header = () => (
    <header className='appHeader'>
        <Logo />
        <NavBar mountedOn='appHeader'/>
    </header>
);

export default Header;