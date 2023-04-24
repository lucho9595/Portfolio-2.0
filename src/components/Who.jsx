import React from "react";
import styled from "styled-components";
import Developer from "../../public/img/Developer.png";

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
                position: relative;
        .img{
            width: 500px;
            height: 600px;
            object-fit: contain;
            position: absolute;
            top: 0;
            bottom: 0;
            right: 0;
            left: 0;
            margin: auto;
            animation: animate 2s infinite ease alternate;

            @keyframes animate {
                to{
                    transform: translateY(15px);
                }
            }
        }
    }

    .right{
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 20px;
        flex-wrap: wrap;
        .title h3{
            font-size:100px;
        }
        .leyend{
            font-size:33px;
        }
    }
}
`

const Hero = () => {
    return (
        <Section>
            <div className="container">
                <div className="left">
                    <img src={Developer} className="img" />
                </div>
                <div className="right">
                    <div className="title">
                        <h3>
                            Who am I?
                        </h3>
                    </div>
                    <div className="leyend">
                        <p>Hello, welcome to my website, my name is Luciano Coronel and I am a Full Stack Web Developer.
                            I work with programming languages widely used in the Technology Industry. I enjoy creatins scalable websites
                            and applications. I love learning and putting into practice the new knowledge that I am learning over time.</p>
                    </div>
                </div>
            </div>
        </Section>
    )
}

export default Hero