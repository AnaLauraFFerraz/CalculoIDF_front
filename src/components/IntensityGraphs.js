import React, { useState } from "react";
import { Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, 
  Label, ComposedChart, Scatter, Legend, ScatterChart } from "recharts";

export default function IntensityGraphs({ data }) {
    const intensityGraph = processDataForIntensityGraph(data);
    
    function processDataForIntensityGraph(data) {
        const { i_real, i_calculated, regression } = data;
        return i_real.map((value, index) => ({
            "i_real": value.toFixed(1),
            "i_calculated": i_calculated[index].toFixed(1),
            "regressionLine": (regression.slope * value + regression.intercept)
        }));
    }

    const min_i = Math.min(...intensityGraph.map(item => item.i_real));
    const max_i = Math.max(...intensityGraph.map(item => item.i_real));
    const ticks_i = intensityGraph.map(item => item.i_real);

    return (
        <>
            
            <ResponsiveContainer className={"graph"} width="90%" height={400}>
                <ScatterChart 
                    data={intensityGraph} 
                    margin={{ top: 30, right: 30, left: 30, bottom: 30 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis
                        dataKey="i_real"
                        name="Intensidades observadas (mm/h)"
                        type="number" 
                        domain={[min_i, max_i]} 
                        ticks={ticks_i}
                    >
                        <Label position="bottom" offset={10}>{"Intensidade Observada (mm/h)"}</Label>
                    </XAxis>
                    <YAxis 
                        dataKey="i_calculated" 
                        name="Intensidades calculadas (mm/h)">
                    <Label 
                        angle={-90} 
                        position="insideBottomLeft" 
                        offset={20} >{"Intensidade Calculada (mm/h)"}</Label>
                    </YAxis>
                    <Tooltip />
                    <Scatter 
                        dataKey="i_calculated" 
                        data={intensityGraph.i_calculated}
                        name="Intervalo 1" 
                        fill="#8884d8" />
                    <Line 
                        type="linear" 
                        dataKey="regressionLine" 
                        data={intensityGraph.regressionLine} 
                        stroke="#ff7300" />
                </ScatterChart>
            </ResponsiveContainer>
        </>
    )
}

// export default function IntensityGraphs({ data }) {
//     const [iGraphData1, setIGraphData1] = useState(data.intensity_graph_data_1)
//     const [iGraphData2, setIGraphData2] = useState(data.intensity_graph_data_2)
    
//     const intensityGraph1 = processDataForIntensityGraph(iGraphData1);
//     const intensityGraph2 = processDataForIntensityGraph(iGraphData2);
    
//     function processDataForIntensityGraph(data) {
//         const { i_real, i_calculated, regression } = data;
//         return i_real.map((value, index) => ({
//             "i_real": value.toFixed(1),
//             "i_calculated": i_calculated[index].toFixed(1),
//             "regressionLine": (regression.slope * value + regression.intercept)
//         }));
//     }

//     const min_1 = Math.min(...intensityGraph1.map(item => item.i_real));
//     const max_1 = Math.max(...intensityGraph1.map(item => item.i_real));
//     const ticks_1 = intensityGraph1.map(item => item.i_real);

//     const min_2 = Math.min(...intensityGraph2.map(item => item.i_real));
//     const max_2 = Math.max(...intensityGraph2.map(item => item.i_real));
//     const ticks_2 = intensityGraph2.map(item => item.i_real);

//     return (
//         <>
//             <h2>Intensidades Observadas x Intensidades Calculadas (5 &le; td &le; 60)</h2>
//             <ResponsiveContainer className={"graph"} width="90%" height={400}>
//                 <ScatterChart 
//                     data={intensityGraph1} 
//                     margin={{ top: 30, right: 30, left: 30, bottom: 30 }}>
//                     <CartesianGrid strokeDasharray="3 3" />
//                     <XAxis
//                         dataKey="i_real"
//                         name="Intensidades observadas (mm/h)"
//                         type="number" 
//                         domain={[min_1, max_1]} 
//                         ticks={ticks_1}
//                     >
//                         <Label position="bottom" offset={10}>{"Intensidade Observada (mm/h)"}</Label>
//                     </XAxis>
//                     <YAxis 
//                         dataKey="i_calculated" 
//                         name="Intensidades calculadas (mm/h)">
//                     <Label 
//                         angle={-90} 
//                         position="insideBottomLeft" 
//                         offset={20} >{"Intensidade Calculada (mm/h)"}</Label>
//                     </YAxis>
//                     <Tooltip />
//                     <Scatter name="Intervalo 1" fill="#8884d8" />
//                     <Line 
//                         type="linear" 
//                         dataKey="regressionLine" 
//                         data={intensityGraph1.regressionLine} 
//                         stroke="#ff7300" />
//                 </ScatterChart>
//             </ResponsiveContainer>
                
//             <h2>Intensidades Observadas x Intensidades Calculadas (60 &le; td &le; 1440)</h2>
//             <ResponsiveContainer className={"graph"} width="90%" height={400}>
//                 <ComposedChart 
//                     data={intensityGraph2} 
//                     margin={{ top: 30, right: 30, left: 30, bottom: 30 }}>
//                     <CartesianGrid strokeDasharray="3 3" />
//                     <XAxis
//                         dataKey="i_real"
//                         name="Intensidades observadas (mm/h)"
//                         type="number" 
//                         domain={[min_2, max_2]} 
//                         ticks={ticks_2}
//                     >
//                         <Label position="bottom" offset={10}>{"Intensidade Observada (mm/h)"}</Label>
//                     </XAxis>
//                     <YAxis dataKey="i_calculated" name="Intensidades calculadas (mm/h)">
//                         <Label 
//                             angle={-90} 
//                             position="insideBottomLeft" 
//                             offset={20} >{"Intensidade Calculada (mm/h)"}</Label>
//                     </YAxis>
//                     <Tooltip />
//                     <Scatter name="Intervalo 2" fill="#8884d8" />
//                     <Line 
//                         type="linear" 
//                         dataKey="regressionLine" 
//                         data={intensityGraph2.regressionLine} 
//                         stroke="#ff7300" />
//                 </ComposedChart>
//             </ResponsiveContainer>
//         </>
//     )
// }