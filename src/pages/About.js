import { Link } from "react-router-dom";
import styled from "styled-components"

export default function About() {
    return (
        <Container>
            <Title>Sobre o Projeto</Title>
            <Text>
                A Intensidade-Duração-Frequência (IDF) é uma relação fundamental na hidrologia e no planejamento de projetos de drenagem urbana e controle de enchentes. A curva IDF descreve a relação entre a intensidade de precipitação, a duração do evento e a frequência de sua ocorrência (tempo de retorno). Essa relação é crucial para o dimensionamento adequado de sistemas de drenagem, reservatórios e outras infraestruturas hídricas, pois permite estimar a quantidade de água que deve ser gerenciada durante eventos de chuva com diferentes intensidades e durações.
            </Text>
            <Text>
                A importância da IDF reside em sua capacidade de fornecer informações essenciais para a prevenção de inundações e a garantia de segurança em projetos de infraestrutura hídrica. Por meio da análise de dados históricos de precipitação, é possível estimar a probabilidade de ocorrência de eventos de chuva com intensidades e durações específicas. Essas informações são usadas pelos engenheiros e planejadores para projetar sistemas de drenagem e outras estruturas capazes de lidar com eventos de precipitação extremos, minimizando os riscos associados a inundações e outros problemas hídricos.
            </Text>
            <Text>
                Para obter as curvas IDF, os dados históricos de precipitação são analisados e ajustados a modelos matemáticos, como a equação de Gumbel, que permitem estimar a intensidade de precipitação para diferentes durações e tempos de retorno. A análise envolve o processamento e a interpretação de séries temporais de dados de chuva, geralmente obtidos a partir de estações meteorológicas ou redes de monitoramento hidrológico. A escolha do modelo e a qualidade dos dados de entrada são fatores críticos que influenciam a precisão das curvas IDF e, consequentemente, o desempenho das infraestruturas hídricas projetadas com base nessas informações.
            </Text>
            <Link to="/"> {/* Adicione o componente Link para a página principal */}
                <BackButton>Voltar</BackButton> {/* Adicione o botão de voltar */}
            </Link>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100vw;
    height: 100vw;
    min-height: calc(100vh - 80px);
    padding: 100px 50px 50px 50px;
    margin-top: 80px;
    box-sizing: border-box;
    border-radius: 8px;
    padding: 20px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h1`
    font-size: 2rem;
    font-weight: bold;
    color: #333;
    margin-bottom: 20px;
`;

const Text = styled.p`
    max-width: 600px;
    font-size: 1rem;
    line-height: 1.6;
    color: #333;
    text-align: justify;
    margin-bottom: 20px;
`;

const BackButton = styled.button`
    width: 100px;
    height: 40px;
    margin-top: 20px;
    padding: 10px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 5px;
    font-size: 18px;
    cursor: pointer;
    &:hover {
        background-color: #0056b3;
    }
`;