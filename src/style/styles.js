import styled from "styled-components";

// -----------------------------------------
// ----------------- Input -----------------
// -----------------------------------------

export const InputWrapper = styled.form`
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-width: 600px;
  height: 90px;
  padding: 0 20px;
  margin-top: 30px;
  background-color: #FFFFFF;
  border-radius: 8px;
  box-sizing: border-box;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
`
export const FileInput = styled.input`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width:175px;
  margin-right: 20px;
  flex-wrap: wrap;
  background-color: #FFFFFF;
  color: #000000;
  text-decoration: none;
  font-size: 16px;
  cursor: pointer;
`
export const SubmitButton = styled.button`
  width: 120px;
  min-width: 100px;
  height: 40px;
  margin: 0 20px 0 20px;
  border-radius: 5px;
  border: 3px;
  background-color: #0077b6;
  color: white;
  font-size: 16px;
  cursor: pointer;
  &:hover {
    background-color: #03045e;
  }
`

// -----------------------------------------
// ----------------- Report ----------------
// -----------------------------------------

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
`;

export const ChartWrapper = styled.div`
  width: 100%;
  max-width: 800px;
  height: 400px;
  margin-top: 10px;
`

export const MessageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;
  margin-top: 40px;
`;

export const Message = styled.p`
  font-size: 18px;
  color: #333;
`;

export const WarningMessage = styled.div`
  display: flex;
  width: 150px;
  height: 80px;
`

export const Table = styled.table`
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
`

// -----------------------------------------
// ----------------- Header ----------------
// -----------------------------------------

export const HeaderContainer = styled.header`
  display: flex;
  width: 100%;
  height: 60px;
  position: fixed;
  top: 0;
  left: 0;
  align-items: center;
  justify-content: space-between;
  padding: 5px 40px;
  background-color: #023670;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.2);
  box-sizing: border-box;
  line-height: 40px;
  h1 {
    color: white;
    font-size: 28px;
    font-weight: 500;
  }
  a {
    color: white;
    font-size: 20px;
    font-weight: 400;
    border: none;
    text-decoration: none;
    cursor: pointer;
    &:hover {
      opacity: 0.8;
      text-decoration: underline;
      text-decoration-thickness: 1px;
    }
  }
`;