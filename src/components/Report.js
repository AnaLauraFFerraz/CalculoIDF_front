import React, {useState} from "react";
import { 
  ReportWrapper,
  MessageContainer,
  Message,
  WarningMessage,
  Table,
  Equation,
} from "../style/report.styles";
import AttentionSign from "../style/assets/attention-sign.png"
import 'katex/dist/katex.min.css';
import { BlockMath } from 'react-katex';
import { Instructions } from "../style/general.styles";
import IdfGraph from "./IdfGraph";
import IntensityGraphs from "./IntensityGraphs";

export default function Report({ data }) {
  const [iGraphData1, setIGraphData1] = useState(data.intensity_graph_data_1)
  const [iGraphData2, setIGraphData2] = useState(data.intensity_graph_data_2)
  console.log(iGraphData2)

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

      <IdfGraph data={data} />

      <h2>Considerações</h2>
      <Instructions>
        <ul>
          <li>{`Foram analisados os dados para o período de ${data.year_range.last_year - data.year_range.first_year + 1} anos (${data.year_range.first_year} a ${data.year_range.last_year}).`}</li>
          <li>{`A distribuição de probabilidade utilizada no cálculo da IDF para essa série de dados foi a distribuição ${data.dist}.`}</li>
          {!data.empty_consistent_data && (
            <li>{`A série de dados fornecida não possui dados consistidos, dessa forma, foram utilizados os dados brutos para a análise.`}</li>
          )}
        </ul>
      </Instructions>

      <h2>Intensidades Observadas x Intensidades Calculadas (5 &le; td &le; 60)</h2>
      <IntensityGraphs data={iGraphData1} />
      
      <h2>Intensidades Observadas x Intensidades Calculadas (60 &le; td &le; 1440)</h2>
      <IntensityGraphs data={iGraphData2} />

      <h2>Equação IDF</h2>
      <Equation>
        <BlockMath math="i = \frac{{k \cdot Tr^m}}{{(c + td)^n}}" />
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
            <th>NS</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>5 &le; td &le; 60</td>
            <td>{data.mean_relative_errors.interval_1.toFixed(4)}</td>
            <td>{data.ns.parameter_1.toFixed(4)}</td>
          </tr>
          <tr>
            <td>60 &le; td &le; 1440</td>
            <td>{data.mean_relative_errors.interval_2.toFixed(4)}</td>
            <td>{data.ns.parameter_2.toFixed(4)}</td>
          </tr>
        </tbody>
      </Table>
      <Instructions>

        <p>Os parâmetros de qualidade dos erros são usados para avaliar a precisão dos cálculos realizados. Eles são determinados da seguinte maneira:</p>
        <ul>
          <li>{`NS > 0,75: Muito bom`}</li>
          <li>{`NS > 0,65: Bom`}</li>
          <li>{`NS > 0,5: Satisfatório`}</li>
          <li>{`NS <= 0,5: Insatisfatório`}</li>
        </ul>
      </Instructions>
    </ReportWrapper>
  );
}
