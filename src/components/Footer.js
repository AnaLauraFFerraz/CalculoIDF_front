import styled from "styled-components";

export default function Footer() {
    return (
        <Title>
            <p>Feito por ...</p>
        </Title>
    )
}

const Title = styled.footer`
    display:flex;
    flex-direction: column;
    width: 100%;
    height: 80px;
    align-items: center;
    justify-content: center;
    padding: 0 30px;
    background-color: gray;
    box-sizing: border-box;
    p {
        color: white;
        font-size: 34px;
        font-weight: 700;
        line-height: 40px;
    }
`