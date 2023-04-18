import { BrowserRouter, Route, Routes } from "react-router-dom"
import React from "react"
import styled from "styled-components"

import Header from "./components/Header"
import Footer from "./components/Footer"
import Main from "./pages/Main"
import About from "./pages/About"

function App() {
  return (
    <BrowserRouter>
      <Container>
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/sobre" element={<About />} />
        </Routes>
        <Footer />
      </Container>
    </BrowserRouter>
  )
}

export default App;

const Container = styled.main`
  min-width: 375px;
  min-height: 667px;
`;