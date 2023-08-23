import React, { useState } from "react";
import { Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, 
  Label, ComposedChart, Scatter, Legend } from "recharts";

export default function IdfGraph({ data }) {
    const [graphData, setGraphData] = useState(data.graph_data)

    const idfGraphData = processGraphData(graphData)
    console.log(idfGraphData)
    
    function processGraphData(data) {
        const { F, P_max, P_dist } = data;
        return F.map((f, index) => ({
            name: P_max[index],
            "F": f,
            "P_max": P_max[index],
            "P_dist": P_dist[index],
        }));
    }
    
    const min = Math.min(...idfGraphData.map(item => item.Pmax));
    const max = Math.max(...idfGraphData.map(item => item.Pmax));
    const ticks = idfGraphData.map(item => item.Pmax);

    return (
        <>
            <ResponsiveContainer className={"graph"} width="90%" height={500}>
                <ComposedChart data={idfGraphData} margin={{ top: 30, right: 30, left: 30, bottom: 30 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis
                        dataKey="name" 
                        type="number" 
                        domain={[min, max]} 
                        ticks={ticks}
                        tickFormatter={(tick) => tick.toFixed(1)}
                        label={{ 
                            value: 'Precipitação máxima anual (mm)', 
                            position: 'bottom', 
                            offset: 10 
                        }}
                    />
                    <YAxis
                        interval={0}
                        dataKey={"F"}
                        label={{ 
                            value: "Probabilidade de excedência (%)",
                            angle: -90, 
                            position: 'insideBottomLeft', 
                            offset: 20
                        }}
                    />
                    <Tooltip />
                    <Legend 
                        verticalAlign="top" 
                        height={46} 
                        layout="vertical" />
                    <Line 
                        name={`Precipitação obtida pela distribuição ${data.dist} (mm)`} 
                        type="monotone" 
                        dataKey="P_dist" 
                        stroke="#82ca9d" activeDot={{ r: 8 }} />
                    <Scatter 
                        name="Precipitação máxima anual observada (mm)" 
                        dataKey="P_max" 
                        stroke="#8884d8" />
                </ComposedChart>
            </ResponsiveContainer>
        </>
    )
}