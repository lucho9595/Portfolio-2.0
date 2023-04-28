import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Pokedata from "./Pokedata";
import Videogame from "./Videogame";
import Ecommerce from "./Ecommerce";

const Data = [
  "Pokedata",
  "Videogame",
  "E-commerce",
]

const Section3 = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  justify-content: center;
  position: relative;
  color: black;
  font-size: 14px;
  font-weight: 300;
`;

const Container = styled.div`
  width: 1400px;
  display: flex;
  justify-content: space-between;
  @media only screen and (max-width: 768px) {
    width: 100%;
    flex-direction: column;
  }
`;

const Left = styled.div`
flex: 1;
display: flex;        
flex-flow: column;
gap: 30px;
align-items: center;
@media only screen and (max-width: 768px) {
    gap: 20px;
    padding: 20px;
    justify-content: center;
  }
`;


const Title = styled.h1`
font-size: 100px;
color: white;
margin-right: 110px;
margin-top: 50px;
@media only screen and (max-width: 768px) {
    font-size: 50px;
    margin-right: 0px;
    margin-top: 0px;
}
`;


const List = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 20px;    
  
    @media only screen and (max-width: 768px) {
        margin-right: 35px;
        align-items: center;
    }
`;

const ListItem = styled.li`
  font-size: 100px;
  font-weight: bold;
  cursor: pointer;
  color: transparent;
  -webkit-text-stroke: 1px white;
  position: relative;
  @media only screen and (max-width: 768px) {
    font-size: 24px;
    color: white;
    -webkit-text-stroke: 0px;
  }
  ::after {
    content: "${(props) => props.text}";
    position: absolute;
    top: 0;
    left: 0;
    color: pink;
    width: 0px;
    overflow: hidden;
    white-space: nowrap;
  }
  &:hover {
    ::after {
      animation: moveText 0.5s linear both;
      @keyframes moveText {
        to {
          width: 100%;
        }
      }
    }
  }
`;

const Right = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 20px;
    flex-wrap: wrap;
    position: relative;
`;

export default function Works() {
  const [work, setWork] = useState("Pokedata")

  //logica para la traduccion
  useEffect((e) => {
    const flagElements = document.getElementById("flags");

    const textsToChange = document.querySelectorAll("[data-section]")

    const changeLanguage = async (language) => {
      const requestJson = await fetch(`../../languages/${language}.json`)

      const texts = await requestJson.json();

      for (const textToChange of textsToChange) {
        const section = textToChange.dataset.section;
        const value = textToChange.dataset.value;

        textToChange.innerHTML = texts[section][value];
      };
    };

    flagElements.addEventListener('click', (e) => {
      changeLanguage(e.target.parentElement.dataset.language)
    })
  }, []);

  return (
    <Section3>
      <Container>
        <Left>
          <Title data-section="Works" data-value="title">My works</Title>
          <List>
            {Data.map((item) => (
              <ListItem key={item} className="link" text={item} onClick={() => setWork(item)}>{item}</ListItem>
            ))}
          </List>
        </Left>
        <Right>
          {work === "Pokedata" ?
            (<Pokedata />)
            : work === "Videogame" ?
              (<Videogame />)
              : (<Ecommerce />)}
        </Right>
      </Container>
    </Section3>
  )
}
