import React, { useState, useEffect } from 'react';
import './components.styles.scss';

import Header from './header/header.component';
import Main from './main/main.component';
import Footer from './footer/footer.component';

import ActivePageContext from './globalContext/activePage.context';

const Components = () => {
    const [activePage, setActivePage] = useState('Daily');
    return (
        <ActivePageContext.Provider value={{ activePage, setActivePage }}>
            <Header />
            <Main />
            <Footer />
        </ActivePageContext.Provider >
    );
};


export default Components;