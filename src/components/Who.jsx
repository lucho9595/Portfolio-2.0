import React from "react";
import styled from "styled-components";
import Cube from "./Cube";

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
  align-items: center;
  gap: 10px;
`;

const Hero = () => {
    return (
        <Section>
            <Container>
                <Left>
                    <Cube />
                </Left>
                <Right>
                    <Title>
                        Who am I?
                    </Title>
                    <WhatWeDo>
                        Hello, welcome to my website, my name is Luciano Coronel and I am a Full Stack Web Developer.
                        I work with programming languages widely used in the Technology Industry. I enjoy creatins scalable websites
                        and applications. I love learning and putting into practice the new knowledge that I am learning over time.
                    </WhatWeDo>
                </Right>
            </Container>
        </Section>
    )
}

export default Hero