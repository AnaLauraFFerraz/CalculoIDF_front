import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";

import Input from "../components/Input";
import Report from "../components/Report";

export default function Main() {
  const [idfData, setIdfData] = useState(null);

  async function handleCSV(csvFile) {
    if (!csvFile) {
      alert("Por favor, selecione um arquivo CSV");
      return;
    }

    const formData = new FormData();
    formData.append("file", csvFile);

    const BASE_URL = process.env.REACT_APP_BASE_URL;

    try {
      const response = await axios.post(`${BASE_URL}/upload`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      if (response.status === 200) {
        const jsonResponse = response.data;
        setIdfData(jsonResponse);
      }
      console.log(idfData)
    } catch (error) {
      console.error("Erro ao fazer upload do arquivo CSV: \n", error);
      alert("Erro ao fazer upload do arquivo. \nTente novamente.");
    }
  }

  return (
    <Container>
      <Input onUpload={(file) => handleCSV(file)} />
      <Report data={idfData} />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  height: 100vw;
  min-height: calc(100vh - 80px);
  padding: 100px 50px 50px 50px;
  box-sizing: border-box;
`;
