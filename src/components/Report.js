import React from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Label } from "recharts";
import { 
  ReportWrapper,
  MessageContainer,
  Message,
  WarningMessage,
  Table,
  Equation
} from "../style/report.styles";
import AttentionSign from "../style/assets/attention-sign.png"
import 'katex/dist/katex.min.css';
import { BlockMath } from 'react-katex';
import { Instructions } from "../style/general.styles";

export default function Report({ data }) {
  console.log(data)
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
        <h1>Dados da relação Intensidade-Duração-Frequência (IDF)</h1>
        <Message>{data}</Message>
      </ReportWrapper>
    );
  }

  const chartData = processDataForChart(data.graph_data);

  function processDataForChart(graph_data) {
    const { F, P_dist } = graph_data;
    return F.map((f, index) => ({
      name: index,
      "F": f,
      "Pmax": P_dist[index],
    }));
  }

  const min = Math.min(...chartData.map(item => item.Pmax));
  const max = Math.max(...chartData.map(item => item.Pmax));
  const ticks = chartData.map(item => item.Pmax);

  return (
    <ReportWrapper>
      <h1>Dados da relação Intensidade-Duração-Frequência (IDF)</h1>

      {data.sample_size_above_30_years === false && (
        <WarningMessage>
          <img src={AttentionSign} alt={"attention"} />
          <Message>
            {`Atenção: A série de dados fornecida contém menos de 30 anos completos.
            Isso pode afetar a qualidade dos resultados da análise.`}
          </Message>
        </WarningMessage>
      )}

      <ResponsiveContainer className={"graph"} width="90%" height={400}>
        <LineChart data={chartData} margin={{ top: 30, right: 30, left: 30, bottom: 30 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            dataKey="Pmax" 
            type="number" 
            domain={[min, max]} 
            ticks={ticks}
            tickFormatter={(tick) => tick.toFixed(1)}>
            <Label value="Precipitação máxima anual (mm)" position="bottom" offset={10} />
          </XAxis>
          <YAxis interval={0}>
            <Label angle={-90} position="insideBottomLeft" offset={20} >Probabilidade de excedência (%)</Label>
          </YAxis>
          <Tooltip />
          <Line type="monotone" dataKey="F" stroke="#8884d8" activeDot={{ r: 8 }} />
          <Label value="Precipitação máxima anual (mm) x Probabilidade de Excedência (%)" offset={0} position="top" />
        </LineChart>
      </ResponsiveContainer>
      
      <h2>Equação de Ven Te Chow</h2>
      <Equation>
        <BlockMath math="i = \frac{{k \cdot Tr^m}}{{c + td^n}}" />
        <ul>
          <li>i: intensidade de precipitação em mm/h</li>
          <li>Tr: tempo de retorno em anos</li>
          <li>td: tempo de duração em minutos</li>
        </ul>
      </Equation>

      <Table>
        <thead>
          <tr>
            <th>Intervalo (min)</th>
            <th>k</th>
            <th>m</th>
            <th>c</th>
            <th>n</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>5 &le; td &le; 60</td>
            <td>{data.parameters.parameters_1.k1}</td>
            <td>{data.parameters.parameters_1.m1}</td>
            <td>{data.parameters.parameters_1.c1}</td>
            <td>{data.parameters.parameters_1.n1}</td>
          </tr>
          <tr>
            <td>60 &le; td &le; 1440</td>
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
            <th>Intervalo (min)</th>
            <th>Erro Relativo Médio (%)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>5 &le; td &le; 60</td>
            <td>{data.mean_relative_errors.interval_1.toFixed(4)}</td>
          </tr>
          <tr>
            <td>60 &le; td &le; 1440</td>
            <td>{data.mean_relative_errors.interval_2.toFixed(4)}</td>
          </tr>
        </tbody>
      </Table>
      <Instructions>
        <p>Os parâmetros de qualidade dos erros relativos são usados para avaliar a precisão dos cálculos realizados. Eles são determinados da seguinte maneira:</p>
        <ul>
          <li>Erro relativo médio &lsaquo; 5%: Excelente</li>
          <li>Erro relativo médio &lsaquo; 10%: Bom</li>
        </ul>
        <h2>Considerações</h2>
        <p>{`A distribuição de probabilidade utilizada no cálculo da IDF para essa série de dados foi a distribuição ${data.dist}.`}</p>
      </Instructions>
    </ReportWrapper>
  );
}
