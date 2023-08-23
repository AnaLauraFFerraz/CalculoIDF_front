import React from 'react';
import { Line } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';

export default function IntensityGraphs({ data }) {
    if (!data) {
        return null;
    }
    const i_real = Object.values(data.i_real);
    const i_calculated = Object.values(data.i_calculated);
    const slope = data.regression.slope;
    const intercept = data.regression.intercept;
    
    const regression = i_real.map((item) => (slope * item + intercept))

    ChartJS.register(
        CategoryScale,
        LinearScale,
        PointElement,
        LineElement,
        Title,
        Tooltip,
        Legend
    );

    const chartData = {
        labels: i_real,
        datasets: [
            {
                label: 'Intensidade observada x Intensidade calculada',
                data: i_real.map((item, index) => ({
                  x: item,
                  y: i_calculated[index]
                })),
                fill: false,
                borderColor: '#8884d8',
                tension: 0.1,
                showLine: false
            },
            {
                label: `f(x) = ${slope.toFixed(4)}x + ${intercept.toFixed(4)}`,
                data: i_real.map((item, index) => ({
                  x: item,
                  y: regression[index]
                })),
                fill: false,
                borderColor: '#ff7300',
                tension: 0.1,
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
          legend: {
            position: 'bottom',
          },
        },
        scales: {
            x: {
              type: 'linear',
                title: {
                    display: true,
                    text: 'Intensidade calculada (mm/h)'
                },
            },
            y: {
                type: 'linear',
                title: {
                    display: true,
                    text: 'Intensidade observada (mm/h)'
                },
            }
        }
    };

    return (
        <>
            <Line data={chartData} options={options} width={600} height={400} />;
        </>
    )
}
