import styled from "styled-components";

export const Instructions = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  border-radius: 8px;
  box-sizing: border-box;
  width: 60%;
  min-width: 200px;
  h2 {
    font-size: 20px;
    margin-bottom: 15px;
  }
  ul {
    line-height: 20px;
    list-style-type: square;
  }
`

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
  z-index: 5;
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