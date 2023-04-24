import React from "react";
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
    return (
        <Section4>
            <div className="container">
                <div className="left">
                    <form className="form">
                        <div className="title">
                            <h1 className="subtitle">Contact Us</h1>
                        </div>
                        <input className="input" placeholder="Name"></input>
                        <input className="input" placeholder="Email"></input>
                        <input className="input" placeholder="Phone Number"></input>
                        <textarea className="textarea" placeholder="Write your message" rows={10}></textarea>
                        <button className="btn">Send</button>

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