import styled from "styled-components";



export const InputWrapper = styled.form`
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-width: 600px;
  height: 90px;
  min-height: 80px;
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