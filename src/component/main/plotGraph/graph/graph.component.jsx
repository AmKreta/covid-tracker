import React, { useRef, useEffect, useState } from 'react';

import './graph.styles.scss';

import Chart from 'chart.js';

const graph = ({ type, data, days }) => {

    const [deaths, setDeaths] = useState([]);
    const [recovered, setRecovered] = useState([]);
    const [total, setTotal] = useState([]);
    const [labels, setLabels] = useState([]);

    const canvasRef = useRef();

    useEffect(() => {
        setDeaths([]);
        setLabels([]);
        setRecovered([]);
        setTotal([]);
    }, [days])

    useEffect(() => {
        if (data) {
            for (let i = 0; i <= days; i++) {
                if (data[i]) {
                    setDeaths(prevState => [...prevState, data[i].deaths]);
                    setRecovered(prevState => [...prevState, data[i].recovered]);
                    setTotal(prevState => [...prevState, data[i].cases]);
                    setLabels(prevState => [...prevState, data[i].last_update.split('T')[0]]);
                }
            }
        }
    }, [data, days]);

    useEffect(() => {
        let chart = new Chart(canvasRef.current, {
            type: 'line',
            data: {
                datasets: [
                    {
                        label: 'deaths',
                        data: deaths.reverse(),
                        backgroundColor: 'rgba(255, 0, 0, .4)',
                        borderColor: 'rgba(255, 0, 0, .7)',
                        pointRadius: 0
                    },
                    {
                        label: 'recovered',
                        data: recovered.reverse(),
                        backgroundColor: 'rgba(0, 255, 0, .4)',
                        borderColor: 'rgba(0, 255, 0, .7)',
                        pointRadius: 0
                    },
                    {
                        label: 'total',
                        data: total.reverse(),
                        backgroundColor: 'rgba(255, 165, 0, .4)',
                        borderColor: 'rgba(255, 165, 0, .7)',
                        pointRadius: 0
                    }
                ],
                labels: labels,
            }
        });
    }, [canvasRef, deaths, recovered, total, labels]);

    return (
        <canvas className='graph' ref={canvasRef} />
    );

}

export default graph;