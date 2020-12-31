import React from 'react'
import './logo.styles.scss';

import logo from './coronavirus.svg';

const Logo = () => (
    <div className='appLogo'>
        <img src={logo} alt='corona virus logo' className='logoImage' />
    </div>
);

export default React.memo(Logo, () => true);