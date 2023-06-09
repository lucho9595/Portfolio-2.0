import React, { useEffect } from "react";
import styled from "styled-components";
import Navbar from "./Navbar";
import Linea from "../../public/img/line.png";
import Programmer from "../../public/img/Programmer.png";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Sphere, MeshDistortMaterial } from "@react-three/drei";
import { Link } from "react-router-dom";


const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  @media only screen and (max-width: 768px) {
    height: 200vh;
  }
`;

const Container = styled.div`
  height: 100%;
  scroll-snap-align: center;
  width: 1400px;
  display: flex;
  justify-content: space-between;
  @media only screen and (max-width: 768px) {
    width: 100vw;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

const Left = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
  @media only screen and (max-width: 768px) {
    flex: 1;
    align-items: center;
  }
`;


const Title = styled.h1`
  font-size: 74px;
  @media only screen and (max-width: 768px) {
    text-align: center;
  }
`;

const WhatWeDo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Line = styled.img`
  height: 5px;
`;

const Subtitle = styled.h2`
  color: #da4ea2;
`;

const Desc = styled.p`
  font-size: 24px;
  color: lightgray;
  @media only screen and (max-width: 768px) {
    padding: 20px;
    text-align: center;
  }
`;

const Right = styled.div`
  flex: 3;
  position: relative;
  @media only screen and (max-width: 768px) {
    flex: 1;
    width: 100%;
  }
`;

const Img = styled.img`
  width: 800px;
  height: 600px;
  object-fit: contain;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  animation: animate 2s infinite ease alternate;
  @media only screen and (max-width: 768px) {
    width: 300px;
    height: 300px;
  }
  @keyframes animate {
    to {
      transform: translateY(20px);
    }
  }
`;


export default function Hero() {
  //logica para la traduccion
  useEffect((e) => {
    const flagElements = document.getElementById("flags");

    const textsToChange = document.querySelectorAll("[data-section]")

    const getData = async (language) => {
      const requestJson = await fetch(`/${language}.json`
        , {
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          }
        }
      )
      const texts = await requestJson.json();
      console.log(texts)

      for (const textToChange of textsToChange) {
        const section = textToChange.dataset.section;
        const value = textToChange.dataset.value;

        textToChange.innerHTML = texts[section][value];
      };
    }

    flagElements.addEventListener('click', (e) => {
      getData(e.target.parentElement.dataset.language)
    })
  }, []);


  return (
    <Section>
      <Navbar />
      <Container>
        <Left>
          <Title data-section="hero" data-value="title">
            Think. Make. Solve.
          </Title>
          <WhatWeDo>
            <Line src={Linea} />
            <Subtitle data-section="hero" data-value="subtitle">Hello</Subtitle>
          </WhatWeDo>
          <Desc>
            <p data-section="hero" data-value="description">I'm <span className="name">Luciano Coronel</span>, Full Stack Web Developer</p>
          </Desc>
        </Left>
        <Right>
          <Canvas>
            <OrbitControls enableZoom={false} />
            <ambientLight intensity={1} />
            <directionalLight position={[3, 2, 1]} />
            <Sphere args={[1, 100, 200]} scale={2.5}>
              <MeshDistortMaterial
                color="#3b264b"
                attach="material"
                distort={0.5}
                speed={2}
              />
            </Sphere>
          </Canvas>
          <Img src={Programmer} />
        </Right>
      </Container>
    </Section>
  )
};