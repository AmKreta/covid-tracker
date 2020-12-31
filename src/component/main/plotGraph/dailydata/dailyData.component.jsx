import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import './dailyData.styles.scss';

import ActiveCountryContext from '../../context/activeCountry.context';
import ActiveTimeContext from '../../context/activeTime.context';
import ActivePageContext from '../../../globalContext/activePage.context';

const DailyData = ({ totalDeath, totalRecovered, totalCases }) => {

    const { activeCountry } = useContext(ActiveCountryContext);
    const { activeTime } = useContext(ActiveTimeContext);
    const { activePage } = useContext(ActivePageContext);

    const [dailyData, setDailyData] = useState({});

    useEffect(() => {
        if (activePage === 'Daily') {
            axios
                .get(`https://covid19-api.org/api/diff/${activeCountry.code}`)
                .then(res => {
                    setDailyData(res.data);
                })
                .catch(err => {
                    console.log('err');
                });
        }
    }, [activeCountry.code, activeTime]);

    return (
        <section className='dailyData'>
            <div className='dailyDataCountry'>
                {activeCountry.name}
            </div>
            <table className='dailyDataTable'>
                <thead>
                    <tr>
                        <th></th>
                        <th>Total</th>
                        <th>New</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Death</td>
                        <td>{totalDeath}</td>
                        <td>{dailyData.new_deaths}</td>
                    </tr>
                    <tr>
                        <td>Recovered</td>
                        <td>{totalRecovered}</td>
                        <td>{dailyData.new_recovered}</td>
                    </tr>
                    <tr>
                        <td>Cases</td>
                        <td>{totalCases}</td>
                        <td>{dailyData.new_cases}</td>
                    </tr>
                </tbody>
            </table>
            <div className='dailyDataDate'>
                {activeTime}
            </div>
        </section>
    );

}

/*
   <div className='dailyDataPropInfo'>
                <div className='dailyDataCases'>
                    TotalCases:-{totalCases}
                    NewCases:-{dailyData.new_cases}
                </div>
                <div className='dailyDataDeaths'>
                    TotalDeath:-{totalDeath}
                    NewDeaths:-{dailyData.new_deaths}
                </div>
                <div className='dailyDataRecovered'>
                    TotalRecovered:-{totalRecovered}
                    NewRecovered:-{dailyData.new_recovered}
                </div>
            </div>
*/

export default DailyData;