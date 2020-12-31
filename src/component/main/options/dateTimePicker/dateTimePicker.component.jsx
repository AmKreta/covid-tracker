import React, { useState } from 'react';
import './dateTimePicker.styles.scss';

import logo from './calendar.svg';

import DateTimePickerModal from './dateTimePickerModal/dateTimePickerModal.component';

const DateTimePicker = () => {

    const [showModal, setShowModal] = useState(false);

    const clickHandler = (e) => {
        setShowModal(prevState => !prevState);
    }

    return (
        <div className='dateTimePicker'>
            <img
                src={logo}
                className='dateTimePickerLogo'
                alt='date and time picker logo'
                title='input date'
                onClick={clickHandler}
            />
            {
                showModal ? <DateTimePickerModal closeModal={clickHandler} /> : null
            }
        </div>
    );
}

export default DateTimePicker;