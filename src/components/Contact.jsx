import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import styled from "styled-components";
import Map from "./Map";

const Section4 = styled.div`
height: 100vh;
scroll-snap-align: center;
.container{
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    gap: 50px;
    .left{
        flex: 1;
        display: flex;
        justify-content: flex-end;
        align-items: center;        
    .form{
            width: 500px;
            display: flex;
            flex-direction: column;
            gap: 25px;
            .title{
                .subtitle{
                    font-weight: 200;
                }
            }
            .input{
                padding: 20px;
                background-color: lightgray;
                border: none;
                border-radius: 5px;
            }
            .textarea{
                padding: 20px;
                background-color: lightgray;
                border: none;
                border-radius: 5px;
            }
            .btn{
                background-color: #da4ea2;
                color: white;
                border: none;
                font-weight: bold;
                cursor: pointer;
                border-radius: 5px;
                padding: 20px;
            }
        } 
    }
    .right{
        flex: 1;
    }
}
`

const Contact = () => {
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
            <div className="container">
                <div className="left">
                    <form ref={ref} className="form" onSubmit={(e) => handleSubmit(e)}>
                        <div className="title">
                            <h1 className="subtitle">Contact Us</h1>
                        </div>
                        <input className="input" placeholder="Name" name='name' type="text"></input>
                        <input className="input" placeholder="Email" name='email' type="email"></input>
                        <input className="input" placeholder="Phone Number" name='phone_number' type="email"></input>
                        <textarea className="textarea" placeholder="Write your message" rows={10} name='message'></textarea>
                        <button className="btn" type="submit">Send</button>
                        {success &&
                            "Your message has been sent. We'll get back to you soon :)"
                        }
                    </form>
                </div>
                <div className="right">
                    <Map />
                </div>
            </div>
        </Section4>
    )
}

export default Contact