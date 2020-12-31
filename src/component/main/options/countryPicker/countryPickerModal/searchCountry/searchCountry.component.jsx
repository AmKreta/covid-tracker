import React, { useEffect, useRef } from 'react';
import './searchCountry.styles.scss';

const searchCountry = ({ searchInput, setSearchInput }) => {

    const changeHandler = (e) => {
        setSearchInput(e.target.value);
    }

    const inputRef = useRef(null);

    useEffect(() => {
        inputRef.current.focus();
    }, []);

    return (
        <div className='searchCountry'>
            <input
                type='text'
                className='searchInputInput'
                value={searchInput}
                onChange={changeHandler}
                ref={inputRef}
            />
        </div>
    );
}

export default searchCountry;
