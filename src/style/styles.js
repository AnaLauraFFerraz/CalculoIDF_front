import styled from "styled-components";

// -----------------------------------------
// ----------------- Input -----------------
// -----------------------------------------

export const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80%;
  min-width: 650px;
  height: 90px;
  padding: 10px;
  margin-top: 30px;
  background-color: #ffffff;
  border-radius: 8px;
  box-sizing: border-box;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1);
`
export const FileInput = styled.input`
  width: 200px;
  min-width:175px;
  height: 40px;
  margin-right: 20px;
  border-radius: 5px;
  border: 3px;
  background-color: #FFFFFF;
  color: blue;
  /* text-decoration: underline; */
  font-size: 16px;
  cursor: pointer;
  &:hover {
    cursor: pointer;
  }
`

export const FileName = styled.p`
  min-width: 300px;
  font-size: 16px;
  flex-wrap: wrap;
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
  padding: 20px;
`

export const ChartWrapper = styled.div`
  width: 100%;
  max-width: 800px;
  height: 400px;
  margin-top: 10px;
`

export const TableWrapper = styled.table`
  border-collapse: collapse;
  margin-top: 10px;
  font-size: 10px;
  text-align: left;
`

export const TableCell = styled.td`
  border: 1px;
  padding: 10px;
`

export const TextareaWrapper = styled.div`
  margin-top: 10px;
  width: 100%;
  max-width: 800px;
`

export const Textarea = styled.textarea`
  width: 100%;
  height: 200px;
  resize: none;
`