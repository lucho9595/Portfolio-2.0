import React from "react";
import styled from "styled-components";

const Section4 = styled.div`
height: 100vh;
scroll-snap-align: center;
.container{
    width: 100%;
    display: flex;
    justify-content: space-between;
    gap: 50px;
    .left{
        flex: 1;
        display: flex;
        align-items: center;
        justify-content: center;
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
                        <textarea className="textarea" placeholder="Write your message"></textarea>
                        <button className="btn">Send</button>

                    </form>
                </div>
                <div className="right">

                </div>
            </div>
        </Section4>
    )
}

export default Contact