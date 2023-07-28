import styled from "styled-components";

export const ReportWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-top: 40px;
  background-color: #ffffff;
  border-radius: 8px;
  padding: 20px;
  box-sizing: border-box;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  h1 {
    margin: 25px;
    font-size: 24px;
  }
  h2 {
    margin: 25px;
    font-size: 24px;
  }
  .graph {
    display: flex;
    position: initial;
  }
`;

export const MessageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;
  margin-top: 40px;
`;

export const Message = styled.p`
  color: #333;
  font-size: 18px;
  line-height: 20px;
`;

export const WarningMessage = styled.div`
  display: flex;
  align-items: center;
  width: 80%;
  max-width: 650px;
  height: 80px;
  margin: 15px;
  border: solid 1px;
  border-radius: 8px;
  background-color: lightsteelblue;
  img {
    width: 40px;
    height: 40px;
    margin: 15px;
  }
`

export const Table = styled.table`
  border-collapse: collapse;
  width: 90%;
  max-width: 900px;
  text-align: center;
  margin: 15px;
  box-sizing: border-box;
  th, td {
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
`