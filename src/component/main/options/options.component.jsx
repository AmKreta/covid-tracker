import React from 'react';
import './options.styles.scss';

import CountryPicker from './countryPicker/countryPicker.component';
import dateTimePicker from './dateTimePicker/dateTimePicker.component';
import DateTimePicker from './dateTimePicker/dateTimePicker.component';

const Options = () => {
    return (
        <div className='options mainFlexItem'>
            <CountryPicker />
            <DateTimePicker />
        </div>
    );
}

export default Options;