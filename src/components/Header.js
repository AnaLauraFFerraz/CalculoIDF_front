import styled from "styled-components";
import { useNavigate } from "react-router-dom";

export default function Header() {
    const navigate = useNavigate();

    function navAbout() {
        navigate("/sobre")
    }

    return (
        <Container>
            <h1>Cálculo IDF</h1>
            <button onClick={navAbout}>Sobre</button>
        </Container>
    )
}

const Container = styled.header`
    display:flex;
    width: 100%;
    height: 80px;
    position: fixed;
    top: 0;
    left: 0;
    align-items: center;
    justify-content: space-between;
    padding: 0 30px;
    background-color: #008EF4;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    box-sizing: border-box;
    h1 {
        color: white;
        font-size: 34px;
        font-weight: 700;
        line-height: 40px;
    }
    button {
        color: white;
        font-size: 34px;
        font-weight: 400;
        line-height: 40px;
    }
`