import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './main.styles.scss';

import ActiveCountryContext from './context/activeCountry.context';
import ActiveTimeContext from './context/activeTime.context';
import GraphStyle from './context/graphStyle.context';

import PlotGraph from './plotGraph/plotGraph.component';
import Options from './options/options.component';

//make a date time picker 
//plot graphs

const Main = () => {

    const [countries, setCountries] = useState(null);
    const [graphStyle, setGraphStyle] = useState('line');
    const [activeCountry, setActiveCountry] = useState({ name: 'India', code: 'IN' });
    const [activeTime, setActiveTime] = useState(new Date().toISOString().split("T")[0]);//todays date yyyy-mm-dd

    useEffect(() => {
        axios
            .get(`https://covid19-api.org/api/countries`)
            .then(res => {
                setCountries(res.data);
            })
            .catch(err => {
                console.log(err);
            });
    }, []);

    return (
        <main className='appMain'>
            <ActiveCountryContext.Provider value={{ countries, activeCountry, setActiveCountry }}>
                <ActiveTimeContext.Provider value={{ activeTime, setActiveTime }}>
                    <GraphStyle.Provider value={{ graphStyle, setGraphStyle }} >
                        <PlotGraph />
                        <Options />
                    </GraphStyle.Provider>
                </ActiveTimeContext.Provider>
            </ActiveCountryContext.Provider>
        </main>
    );
}

export default Main;