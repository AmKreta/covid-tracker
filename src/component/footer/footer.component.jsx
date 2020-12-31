import React from 'react';
import './footer.styles.scss';

import NavBar from '../reusableComponents/navBar/navBar.component';

const Footer = () => (
    <footer className='appFooter'>
        <NavBar mountedOn='appFooter' />
    </footer>
);

export default React.memo(Footer);