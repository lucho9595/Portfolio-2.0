import React, { useEffect } from "react";
import styled from "styled-components";
import Cube from "./Cube";
import Cv from "../assets/CV.pdf";

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  justify-content: center;
`;

const Container = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  width: 1400px;
  display: flex;
  justify-content: space-between;
`;

const Left = styled.div`
  flex: 1;
  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
  @media only screen and (max-width: 768px) {
    align-items: center;
    text-align: center;
  }
`;

const Title = styled.h1`
  font-size: 74px;
  @media only screen and (max-width: 768px) {
    font-size: 60px;
  }
`;

const WhatWeDo = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  gap: 10px;
  .buttonDownload{
            cursor: pointer;
            border-radius: 4px;
            background-color: #df3df5;
            border: none;
            color: #FFFFFF;
            text-align: center;
            padding: 12px;
            width: 136px;
            transition: all 0.5s;
            margin: 5px;
            text-decoration: none;
            }
        .buttonDownload:hover {
            background-color: #333;
            color: white;
            }
`;

export default function Who() {
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
      <Container>
        <Left>
          <Cube />
        </Left>
        <Right>
          <Title data-section="who" data-value="title">
            Who am I?
          </Title>
          <WhatWeDo data-section="who" data-value="description">
            Hello, welcome to my website, my name is Luciano Coronel and I am a Full Stack Web Developer.
            I work with programming languages widely used in the Technology Industry. I enjoy creatins scalable websites
            and applications. I love learning and putting into practice the new knowledge that I am learning over time.
            <a href={Cv} target="_blank" className="buttonDownload" data-section="who" data-value="button">Download CV</a>
          </WhatWeDo>
        </Right>
      </Container>
    </Section>
  )
}