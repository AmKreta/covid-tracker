import React, { useContext, useRef, useEffect } from 'react';
import './timePickerModal.styles.scss';
import logo from './cancel.svg';

import ActiveTimeContext from '../../../context/activeTime.context';

const DateTimePickerModal = ({ closeModal }) => {

    const { activeTime, setActiveTime } = useContext(ActiveTimeContext);

    const ChangeHandler = (e) => {
        setActiveTime(e.target.value);
        console.log(e.target.value);
        closeModal();
    }

    const dateInputRef = useRef(null);

    useEffect(() => {
        if (dateInputRef) {
            dateInputRef.current.max = new Date().toISOString().split("T")[0];
        }
    }, [dateInputRef]);


    const clickHandler = (e) => {
        dateInputRef.current.click();
    }

    return (
        <div className='dateTimePickerModal' >
            <img
                src={logo}
                alt='close the modal'
                className='dateTimePickerModalClosingIcon'
                onClick={closeModal}
            />
            <label htmlFor='date' className='dateTimeSelector' >
                <div className='selectDateLabel' onClick={clickHandler}>
                    Select Date
                </div>
                <input type='date' className='dateInput' onChange={ChangeHandler} min='2020-01-01' max='' ref={dateInputRef} />
                <div className='selectedDate'>
                    currently selected Date is {activeTime}
                </div>
            </label>
        </div>
    );
}

export default DateTimePickerModal;