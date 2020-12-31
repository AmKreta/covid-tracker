import React, { useState } from 'react';
import './countryPicker.styles.scss';

import logo from './placeholder.svg';

import ActiveCountryContext from '../../context/activeCountry.context';

import CountryPickerModal from './countryPickerModal/countryPickerModal.component';

const CountryPicker = () => {
    const [showModal, setShowModal] = useState(false);
    const clickHandler = () => {
        setShowModal(true);
    }
    return (
        <div className='countryPicker'>
            <img
                src={logo}
                className='countryPickerLogo'
                alt='country picker logo'
                title='select Country'
                onClick={clickHandler}
            />
            {
                showModal ? <CountryPickerModal setShowModal={setShowModal} /> : null
            }
        </div>
    );
}

export default CountryPicker;