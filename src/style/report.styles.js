import styled from "styled-components";

export const ReportWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin: 40px;
  background-color: #ffffff;
  border-radius: 8px;
  padding: 30px;
  box-sizing: border-box;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  h1 {
    font-size: 24px;
    margin-bottom: 10px;
  }
  h2 {
    margin: 40px 0 15px;
    font-size: 20px;
  }
  ul {
    font-size: 16px;
    list-style-type: square;
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
  color: #333;
`;

export const Message = styled.li`
  margin: 5px;
  color: #333;
  font-size: 18px;
  line-height: 20px;
`;

export const NoData = styled.p`
  margin: 5px;
  color: #333;
  font-size: 18px;
  line-height: 20px;
`;

export const WarningMessage = styled.div`
  display: flex;
  align-items: center;
  width: 80%;
  max-width: 650px;
  min-height: 80px;
  margin: 20px 0 30px;
  padding: 12px;
  box-sizing: border-box;
  border: solid 1px;
  border-radius: 8px;
  background-color: lightsteelblue;
  img {
    width: 60px;
    height: 60px;
    margin: 15px;
    margin-right: 30px;
  }
`;

export const Equation = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 60px;
  box-sizing: border-box;
  font-size: 20px;
  line-height: 20px;
  text-decoration: none;
  color: #333;
  
`;

export const Table = styled.table`
  border-collapse: collapse;
  width: 90%;
  max-width: 800px;
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
`;
