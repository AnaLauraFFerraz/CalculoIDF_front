import { Link } from "react-router-dom"
import styled from "styled-components";

export default function Header() {
    return (
        <Title>
            <h1>Cálculo IDF</h1>
            <Link to={`/sobre`}>
                <h2>Sobre</h2>
            </Link>
        </Title>
    )
}

const Title = styled.header`
    display:flex;
    width: 100%;
    height: 80px;
    position: fixed;
    top: 0;
    left: 0;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 80px;
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
    h2 {
        color: white;
        font-size: 34px;
        font-weight: 400;
        line-height: 40px;
    }
`