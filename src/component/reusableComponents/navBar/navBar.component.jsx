import React, { useContext,useCallback } from 'react';
import './navBar.styles.scss';

import ActivePageContext from '../../globalContext/activePage.context';

const ListItem = ({ content }) => {

    const { activePage, setActivePage } = useContext(ActivePageContext);

    const clickHandler = useCallback((e) => {
        setActivePage(content);
    }, []);

    return (
        <li
            className={`navBar-item ${activePage === content ? 'active' : null}`}
            onClick={clickHandler}
        >
            {content}
        </li>
    );
    
}


//component to be exported

const NavBar = ({ mountedOn }) => {
    return (
        <nav className={`navBar ${mountedOn}-navBar`}>
            <ul className='navBar-items'>
                <ListItem content='Daily' />
                <ListItem content='Monthly' />
                <ListItem content='Quaterly' />
            </ul>
        </nav>
    );
}

export default NavBar;