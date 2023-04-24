import React from "react";
import styled from "styled-components";
import Line from "../../public/img/line.png";
import Programmer from "../../public/img/Programmer.png";

const Section = styled.div`
height: 100vh;
scroll-snap-align: center;
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-between;
.container{
    height: 100vh;
    scroll-snap-align: center;
    width: 1400px;
    display: flex;
    justify-content: space-between;
    .left{
        flex: 1;
    }
    .right{
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 20px;
        flex-wrap: wrap;
        .leyend h1{
            font-size:74px;
        }
        .wwd{
            display: flex;
            align-items: center;
            flex-wrap: wrap;    
            gap: 10px;   
            .line{
                height: 5px;
            }
            .letter{
                color: #fd15c3;
            }
        }
        .sobremí{
            font-size: 24px;
            color: lightgray;
        }
        .button{
            background-color: #da4ea2;
            color: white;
            font-weight: 500;
            width: 100px;
            border-radius: 10px;
            border: none;
            padding: 10px;
            cursor: pointer;
        }
    }
}
`

const Hero = () => {
    return (
        <Section>
            <div className="container">
                <div className="left">
                </div>
                <div className="right">
                    <div className="leyend">
                        <h1>
                            Think. Make. Solve.
                        </h1>
                    </div>
                    <div className="wwd">
                        <img src={Line} className="line" />
                        <p className="letter">What We Do</p>
                    </div>
                    <div className="sobremí">
                        <p>I am an ambitious, collaborative person, eager to grow professionally</p>
                    </div>
                    <button className="button">Learn More</button>
                </div>
            </div>
        </Section>
    )
}

export default Hero