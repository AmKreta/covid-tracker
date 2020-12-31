import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';

import './plotGraph.styles.scss';

import Graph from './graph/graph.component';
import DailyData from './dailydata/dailyData.component';

import ActiveCountryContext from '../context/activeCountry.context';
import ActiveTimeContext from '../context/activeTime.context';
import ActivePageContext from '../../globalContext/activePage.context';

const PlotGraph = () => {

    const [data, setData] = useState({});

    const { activeCountry } = useContext(ActiveCountryContext);
    const { activeTime } = useContext(ActiveTimeContext);
    const { activePage } = useContext(ActivePageContext);

    useEffect(() => {

        let url;

        switch (activePage) {
            case 'Daily':
                url = `https://covid19-api.org/api/status/${activeCountry.code}?date=${activeTime}`;
                break;
            case 'Monthly':
                url = `https://covid19-api.org/api/timeline/${activeCountry.code}`;
                break;
            case 'Quaterly':
                url = `https://covid19-api.org/api/timeline/${activeCountry.code}`;
                break;
            default:
                alert('some error occured');
                break;
        }
        axios.get(url).then(res => {
            setData(res.data);
        }).catch(err => {
            console.log('err');
        });

    }, [activeCountry.code, activeTime, activePage]);

    return (
        <div className='plotGraph mainFlexItem'>
            {
                activePage === 'Daily'
                    ? <DailyData
                        totalDeath={data.deaths}
                        totalRecovered={data.recovered}
                        totalCases={data.cases}
                    />
                    : <Graph
                        data={data}
                        type='line'
                        label={`activeCountry.name ${activePage === 'Monthly' ? 'from last month' : 'from last six months'}`}
                        days={activePage === 'Monthly' ? 30 : 90}
                    />

            }
        </div>
    );

}

export default PlotGraph;