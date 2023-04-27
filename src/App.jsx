import React from "react";
import { BrowserRouter as Routes, Route } from "react-router-dom";
import styled from "styled-components";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Who from "./components/Who";
import Works from "./components/Works";
import Skills from "./components/Skills";
import Biography from "./pages/Biography";
import PageNotFound from "./pages/Pagenotfound";

const Container = styled.div`
height: 100vh;
scroll-snap-type: y mandatory;
scroll-behavior: smooth;
overflow-y: auto;
scrollbar-width: none;
color: white;
background: url("./img/bg.jpeg");
&::-webkit-scrollbar{
  display: none;
}
`

function App() {

  return (
    <Container>
      <Hero />
      <Who />
      <Works />
      <Skills />
      <Contact />
      {/* <Routes>
        <Route path="/biography" element={<Biography />} />
        <Route path="/*" element={<PageNotFound />} />
      </Routes> */}
    </Container>
  )
}

export default App