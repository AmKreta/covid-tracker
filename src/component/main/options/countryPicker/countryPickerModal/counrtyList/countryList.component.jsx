import React, { useContext, useMemo } from 'react';
import './countryList.styles.scss';

import ActiveCountryContext from '../../../../context/activeCountry.context';


//list items of country list
const ListItem = ({ name, alpha2, numeric, clickHandler }) => {

    const { activeCountry } = useContext(ActiveCountryContext);

    return (
        <li
            className={`countryListItem ${name === activeCountry.name ? 'selectedCountry' : null}`}
            key={numeric}
            id={alpha2}
            onClick={clickHandler}
        >
            {name}
        </li>
    );
}


//country list
const countryList = ({ searchInput, closeModal }) => {

    const { countries, setActiveCountry } = useContext(ActiveCountryContext);

    const clickHandler = (e) => {
        setActiveCountry({ name: e.target.innerText, code: e.target.id });
        closeModal();
    }

    if (searchInput === '') {
        return (
            <ul className='countryList'>
                {
                    countries.map(item => {
                        return (
                            <ListItem
                                name={item.name}
                                alpha2={item.alpha2}
                                key={item.numeric}
                                clickHandler={clickHandler}
                            />
                        )
                    })
                }
            </ul>
        );
    }
    else {
        let itemsToShow = countries.filter(item => {
            console.log(item.name, item.name.includes(searchInput), searchInput);
            if (item.name.toLowerCase().includes(searchInput.toLowerCase())) {
                return true;
            }
        });
        return (
            <ul className='countryList'>
                {
                    itemsToShow.map(item => {
                        return (
                            <ListItem
                                name={item.name}
                                alpha2={item.alpha2}
                                key={item.numeric}
                                clickHandler={clickHandler}
                            />
                        )
                    })
                }
            </ul>
        );
    }
}

export default countryList;