import React from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Label } from "recharts";
import { 
  ReportWrapper,
  MessageContainer,
  Message,
  WarningMessage,
  ChartWrapper,
  Table
} from "../style/styles";

export default function Report({ data }) {
  if (!data) {
    return (
      <MessageContainer>
        <Message>Nenhum dado disponível. Faça o upload de um arquivo CSV.</Message>
      </MessageContainer>
    );
  }

  const isString = typeof data === "string";

  if (isString) {
    return (
      <ReportWrapper>
        <h2>Dados IDF</h2>
        <Message>{data}</Message>
      </ReportWrapper>
    );
  }

  const chartData = processDataForChart(data.graph_data);
  console.log(chartData)

  function processDataForChart(graph_data) {
    const { F, P_dist } = graph_data;
    return F.map((f, index) => ({
      name: index,
      "F": f,
      "Pmax": P_dist[index],
    }));
  }
  
  return (
    <ReportWrapper>
      <h2>Dados IDF</h2>

      {data.sample_size_above_30_years === false && (
        <WarningMessage>
          Atenção: A amostra possui menos de 30 anos, ...
        </WarningMessage>
      )}

      <ChartWrapper>
        <LineChart
          width={600}
          height={300}
          data={chartData}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="Pmax">
            <Label value="Precipitação máxima anual (mm)" offset={-15} position="insideBottom" />
          </XAxis>
          <YAxis>
            <Label value="Probabilidade de excedência (%)" angle={-90} position="insideLeft" offset={-10} />
          </YAxis>
          <Tooltip />
          <Line type="monotone" dataKey="F" stroke="#8884d8" activeDot={{ r: 8 }} />
        </LineChart>
      </ChartWrapper>

      <Table>
        <thead>
          <tr>
            <th>Intervalo</th>
            <th>k</th>
            <th>m</th>
            <th>c</th>
            <th>n</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Intervalo 1 (5 &le; td &le; 60)</td>
            <td>{data.parameters.parameters_1.k1}</td>
            <td>{data.parameters.parameters_1.m1}</td>
            <td>{data.parameters.parameters_1.c1}</td>
            <td>{data.parameters.parameters_1.n1}</td>
          </tr>
          <tr>
            <td>Intervalo 2 (60 &le; td &le; 1440)</td>
            <td>{data.parameters.parameters_2.k2}</td>
            <td>{data.parameters.parameters_2.m2}</td>
            <td>{data.parameters.parameters_2.c2}</td>
            <td>{data.parameters.parameters_2.n2}</td>
          </tr>
        </tbody>
      </Table>
      
      <Table>
        <thead>
          <tr>
            <th>Intervalo</th>
            <th>Erro Relativo Médio</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Intervalo 1 (5 &le; td &le; 60)</td>
            <td>{data.mean_relative_errors.interval_1}</td>
          </tr>
          <tr>
            <td>Intervalo 2 (60 &le; td &le; 1440)</td>
            <td>{data.mean_relative_errors.interval_2}</td>
          </tr>
        </tbody>
      </Table>

    </ReportWrapper>
  );
}
