import { BrowserRouter, Route, Routes } from "react-router-dom"
import React from "react"

import About from "./pages/About"
import Header from "./components/Header"
import Main from "./pages/Main"

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/sobre" element={<About />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;