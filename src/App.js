import { BrowserRouter, Route, Routes } from "react-router-dom"
import React from "react"
import styled from "styled-components"

import About from "./pages/About"
import Header from "./components/Header"
import Main from "./pages/Main"

function App() {
  return (
    <BrowserRouter>
      <Container>
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/sobre" element={<About />} />
        </Routes>
      </Container>
    </BrowserRouter>
  )
}

export default App;

const Container = styled.main`
  width: 100%;
  min-width: 375px;
  height: 100%;
  min-height: 667px;
  background-color: lightgray;
`;