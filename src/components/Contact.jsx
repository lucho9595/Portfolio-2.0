import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import styled from "styled-components";
import Maps from "./Map";

const Section4 = styled.div`
  height: 100vh;
  scroll-snap-align: center;


`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  gap: 50px;

@media only screen and (max-width: 768px) {
    height: 20%;
    width: 20%;
    margin-top: 90px;
  }

`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  @media only screen and (max-width: 768px) {
    justify-content: center;

  }
`;

const Form = styled.form`
  width: 500px;
  display: flex;
  flex-direction: column;
  gap: 25px;

  @media only screen and (max-width: 768px) {
    width: 300px;
  }
`;


const Title = styled.h1`
  font-weight: 200;
`;
const Input = styled.input`
  padding: 20px;
  background-color: #e8e6e6;
  border: none;
  border-radius: 5px;
`;

const TextArea = styled.textarea`
  padding: 20px;
  border: none;
  border-radius: 5px;
  background-color: #e8e6e6;
`;

const Button = styled.button`
  background-color: #da4ea2;
  color: white;
  border: none;
  font-weight: bold;
  cursor: pointer;
  border-radius: 5px;
  padding: 20px;
`;

const Right = styled.div`
  flex: 1;
  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

export default function Contact() {
    const ref = useRef()

    const [success, setSuccess] = useState(null)

    const handleSubmit = e => {
        e.preventDefault();
        emailjs.sendForm('service_wk7208k', 'template_ztlccjk', ref.current, 'Cv-Y0aYLM2UTkCfZz')
            .then((result) => {
                console.log(result.text);
                setSuccess(true)
            }, (error) => {
                console.log(error.text);
                setSuccess(false)
            });
    }

    return (
        <Section4>
            <Container>
                <Left>
                    <Form ref={ref} onSubmit={(e) => handleSubmit(e)}>
                        <Title>
                            Contact Us
                        </Title>
                        <Input placeholder="Name" name='name' type="text"></Input>
                        <Input placeholder="Email" name='email' type="email"></Input>
                        <Input placeholder="Phone Number" name='phone_number' type="email"></Input>
                        <TextArea placeholder="Write your message" rows={10} name='message'></TextArea>
                        <Button type="submit">Send</Button>
                        {success &&
                            "Your message has been sent. We'll get back to you soon :)"
                        }
                    </Form>
                </Left>
                <Right>
                    <Maps />
                </Right>
            </Container>
        </Section4>
    )
};