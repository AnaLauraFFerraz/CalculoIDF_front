import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";

import Input from "../components/Input";
import Report from "../components/Report";
import { Instructions } from "../style/general.styles"

export default function Main() {
  const [idfData, setIdfData] = useState(null);
  const [loading, setLoading] = useState(false);

  async function handleCSV(csvFile) {
    if (!csvFile) {
      alert("Por favor, selecione um arquivo CSV");
      return;
    }

    const formData = new FormData();
    formData.append("file", csvFile);

    const BASE_URL = process.env.REACT_APP_BASE_URL;
    setLoading(true);

    try {
      const response = await axios.post(`${BASE_URL}/upload`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      if (response.status === 200) {
        const jsonResponse = response.data;
        setIdfData(jsonResponse);
      } else if (response.status === 400) {
        alert("Erro 400: Requisição inválida. Verifique o arquivo CSV e tente novamente.");
      } else if (response.status === 500) {
        alert("Erro 500: Erro interno do servidor. Tente novamente mais tarde.");
      } else {
        alert(`Erro desconhecido: ${response.status}. Tente novamente mais tarde.`);
      }
    } catch (error) {
      alert("Erro ao fazer upload do arquivo. \nTente novamente.");
    }
    setLoading(false);
  }
  
  return (
    <Container>
      <Instructions>
        <h2>Instruções para Upload de Arquivo</h2>
        <ul>
          <li>Esta aplicação foi projetada para calcular a Intensidade-Duração-Frequência (IDF) de chuvas a partir de dados contidos em arquivos CSV obtidos através do site do Hidroweb, disponível no seguinte link: <a href="https://www.snirh.gov.br/hidroweb/serieshistoricas" target="_blank" rel="noopener noreferrer">https://www.snirh.gov.br/hidroweb/serieshistoricas</a>.</li>
          <li>O cálculo da IDF realizado por esta aplicação é válido para regiões onde os anos hidrológicos correspondem ao período de Outubro a Setembro.</li>
        </ul>
      </Instructions>

      <Input onUpload={(file) => handleCSV(file)} loading={loading} />
      <Report data={idfData} />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  min-width: 90%;
  height: 100vw;
  min-height: calc(100vh - 80px);
  padding: 100px 50px 50px 50px;
  box-sizing: border-box;
`;
