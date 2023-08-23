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

export default function IdfGraph({ data }){
    const F = Object.values(data.graph_data.F);
    const P_max = Object.values(data.graph_data.P_max);
    const P_dist = Object.values(data.graph_data.P_dist);
    
    const arr = P_max.concat(P_dist)
    arr.sort(sortfunction)

    function sortfunction(a, b){
      return (a - b) //faz com que o array seja ordenado numericamente e de ordem crescente.
    }
    console.log(F.map((item, index) => ({
      x: P_dist[index],
      y: F[index]
    })))
    
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
        labels: P_max.concat(P_dist),
        datasets: [
            {
                label: 'P_max',
                data: F.map((item, index) => ({
                  x: P_max[index],
                  y: F[index]
                })),
                fill: false,
                borderColor: '#8884d8',
                tension: 0.1,
            },
            {
                label: 'P_dist',
                data: F.map((item, index) => ({
                  x: P_dist[index],
                  y: F[index]
                })),
                fill: false,
                borderColor: '#ff7300',
                tension: 0.1,
            },
        ],
    };

    const options = {
        // responsive: true,
        // plugins: {
        //   legend: {
        //     position: 'bottom',
        //   },
        // },
        scales: {
            x: {
              type: 'linear',
                title: {
                    display: true,
                    text: 'Precipitação máxima anual observada (P_max e P_dist)'
                },
            },
            y: {
                type: 'linear',
                title: {
                    display: true,
                    text: 'Probabilidade de excedência (F)'
                },
                min: 0,
                max: 100
            }
        }
    };

    return (
        <>
            <Line data={chartData} options={options} width={500} height={400} />;
        </>
    )
}