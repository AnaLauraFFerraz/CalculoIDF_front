import React from "react";
import styled from "styled-components";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";

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
      <DataContainer>
        <h2>Dados IDF</h2>
        <Message>{data}</Message>
      </DataContainer>
    );
  }

  function processDataForChart(data) {
    return Object.keys(data).map((key) => ({
      name: key,
      "Tempo de Retorno (anos)": data[key]["Tr (anos)"],
      "i Real": data[key]["i_real"],
      "i Calculado": data[key]["i_calculado"],
    }));
  }

  const chartData = processDataForChart(data);

  return (
    <DataContainer>
      <h2>Dados IDF</h2>
      <LineChart
        width={600}
        height={300}
        data={chartData}
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="Tempo de Retorno (anos)" stroke="#8884d8" activeDot={{ r: 8 }} />
        <Line type="monotone" dataKey="i Real" stroke="#82ca9d" />
        <Line type="monotone" dataKey="i Calculado" stroke="#ff7300" />
      </LineChart>
      <Table>
        <thead>
          <tr>
            <th>Índice</th>
            <th>Tempo de Retorno (anos)</th>
            <th>Coeficiente de Agregação</th>
            <th>i Real</th>
            <th>i Calculado</th>
            <th>Erro Relativo</th>
          </tr>
        </thead>
        <tbody>
          {Object.keys(data).map((key) => {
            const rowData = data[key];
            return (
              <tr key={key}>
                <td>{key}</td>
                <td>{rowData["Tr (anos)"]}</td>
                <td>{rowData["td (min)"]}</td>
                <td>{rowData["i_real"]}</td>
                <td>{rowData["i_calculado"]}</td>
                <td>{rowData["erro_relativo"]}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </DataContainer>
  );
}

const MessageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;
  margin-top: 40px;
`;

const Message = styled.p`
  font-size: 18px;
  color: #333;
`;

const DataContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-top: 40px;
  background-color: #ffffff;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const Table = styled.table`
  border-collapse: collapse;
  width: 100%;
  text-align: center;
  margin-top: 20px;

  th,
  td {
    border: 1px solid #ccc;
    padding: 10px;
  }

  th {
    background-color: #f2f2f2;
  }

  tbody tr:nth-child(odd) {
    background-color: #f8f8f8;
  }

  tbody tr:hover {
    background-color: #ddd;
  }
`;



// import React from "react";
// import styled from "styled-components";

// export default function Report({ data }) {
//   if (!data) {
//     return (
//       <MessageContainer>
//         <Message>Nenhum dado disponível. Faça o upload de um arquivo CSV.</Message>
//       </MessageContainer>
//     );
//   }

//   const isString = typeof data === "string";

//   if (isString) {
//     return (
//       <DataContainer>
//         <h2>Dados IDF</h2>
//         <Message>{data}</Message>
//       </DataContainer>
//     );
//   }

//   return (
//     <DataContainer>
//       <h2>Dados IDF</h2>
//       <Table>
//         <thead>
//           <tr>
//             <th>Índice</th>
//             <th>Tempo de Retorno (anos)</th>
//             <th>Coeficiente de Agregação</th>
//             <th>i Real</th>
//             <th>i Calculado</th>
//             <th>Erro Relativo</th>
//           </tr>
//         </thead>
//         <tbody>
//           {Object.keys(data).map((key) => {
//             const rowData = data[key];
//             return (
//               <tr key={key}>
//                 <td>{key}</td>
//                 <td>{rowData["Tr (anos)"]}</td>
//                 <td>{rowData["td (min)"]}</td>
//                 <td>{rowData["i_real"]}</td>
//                 <td>{rowData["i_calculado"]}</td>
//                 <td>{rowData["erro_relativo"]}</td>
//               </tr>
//             );
//           })}
//         </tbody>
//       </Table>
//     </DataContainer>
//   );
// }

// const MessageContainer = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   height: 200px;
//   margin-top: 40px;
// `;

// const Message = styled.p`
//   font-size: 18px;
//   color: #333;
// `;

// const DataContainer = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   width: 100%;
//   margin-top: 40px;
//   background-color: #ffffff;
//   border-radius: 8px;
//   padding: 20px;
//   box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
// `;

// const Table = styled.table`
//   border-collapse: collapse;
//   width: 100%;
//   text-align: center;
//   margin-top: 20px;

//   th,
//   td {
//     border: 1px solid #ccc;
//     padding: 10px;
//   }

//   th {
//     background-color: #f2f2f2;
//   }

//   tbody tr:nth-child(odd) {
//     background-color: #f8f8f8;
//   }

//   tbody tr:hover {
//     background-color: #ddd;
//   }
// `;