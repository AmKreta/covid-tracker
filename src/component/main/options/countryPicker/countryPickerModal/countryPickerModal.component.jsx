import React, { useState } from 'react';
import './countryPickerModal.styles.scss';

import logo from './cancel.svg';

import SearchCountry from './searchCountry/searchCountry.component';
import CountryList from './counrtyList/countryList.component';

const CountryPickerModal = ({ setShowModal }) => {

    const [searchInput, setSearchInput] = useState('');

    const clickHandler = (e) => {
        setShowModal(prevState => !prevState);
    }

    return (
        <div className='countryPickerModal'>
            <img
                src={logo}
                alt='close the modal'
                className='countryPickerModalClosingIcon'
                onClick={clickHandler}
            />
            <SearchCountry searchInput={searchInput} setSearchInput={setSearchInput} />
            <CountryList searchInput={searchInput} closeModal={clickHandler} />
        </div>
    );
}

export default CountryPickerModal