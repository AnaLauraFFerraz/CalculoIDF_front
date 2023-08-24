import React from "react";
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
  if (data)
    console.log("Dados do Python: ", data)

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

  const emptyYearsData = data.empty_years
  let totalYears = data.year_range.last_year - data.year_range.first_year + 1
  let formattedYear = ""

  if (Array.isArray(emptyYearsData)) {
    emptyYearsData.forEach((year, index) => {
        index === emptyYearsData.length - 1 ? 
        formattedYear += `${year}`
            : formattedYear += `${year}, `
    });
    totalYears = data.year_range.last_year - data.year_range.first_year + 1 - emptyYearsData.length
  }

  return (
    <ReportWrapper>
      <h1>Dados da relação Intensidade-Duração-Frequência (IDF)</h1>

      {(data.sample_size_above_30_years === false || data.empty_years) && (
        <WarningMessage>
          <img src={AttentionSign} alt={"attention"} />
          <ul>
            {data.sample_size_above_30_years === false ? 
              <Message>{`A série de dados fornecida contém menos de 30 anos completos.
                Isso pode afetar a qualidade dos resultados da análise.`}
              </Message> : ""}
            
            {data.empty_years ? 
              <Message>
                {`Foram analisados os dados de ${data.year_range.first_year} a ${data.year_range.last_year}, 
                  sendo que os anos ${formattedYear} não dispunham de dados de nenhum mês.`}
              </Message> : ""}
          </ul>
        </WarningMessage>
      )}

      <div>
        <IdfGraph data={data} />
      </div>

      <h2>Considerações</h2>
      <Instructions>
        <ul>
          <li>{`Foram analisados os dados para um período de ${totalYears} anos (${data.year_range.first_year} a ${data.year_range.last_year}).`}</li>
          <li>{`A distribuição de probabilidade utilizada no cálculo da IDF para essa série de dados foi a distribuição ${data.dist}.`}</li>
          {!data.empty_consistent_data && (
            <li>{`A série de dados fornecida não possui dados consistidos, dessa forma, foram utilizados os dados brutos para a análise.`}</li>
          )}
        </ul>
      </Instructions>
      
      
      <h2>Intensidades Observadas x Intensidades Calculadas (5 &le; td &le; 60)</h2>
      <div>
        <IntensityGraphs data={data.intensity_graph_data_1} />
      </div>

      <h2>Intensidades Observadas x Intensidades Calculadas (60 &le; td &le; 1440)</h2>
      <div>
        <IntensityGraphs data={data.intensity_graph_data_2} /> 
      </div>
     

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
            <th>Nash-Sutcliffe (NS)</th>
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
