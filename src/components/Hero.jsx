import React from "react";
import styled from "styled-components";
import Navbar from "./Navbar";
import Line from "../../public/img/line.png";
import Programmer from "../../public/img/Programmer.png";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Sphere, MeshDistortMaterial } from "@react-three/drei";

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
        flex: 2;
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
            .name{
                color: #fd15c3;
            }
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
    .right{
        flex: 3;
        position: relative;
        .img{
            width: 800px;
            height: 600px;
            object-fit: contain;
            position: absolute;
            top: 0;
            bottom: 0;
            right: 0;
            left: 0;
            margin: auto;
            /* animation: animate 2s infinite ease alternate;

            @keyframes animate {
                to{
                    transform: translateY(15px);
                }
            } */
        }
    }
}
`

const Hero = () => {
    return (
        <Section>
            <Navbar />
            <div className="container">
                <div className="left">
                    <div className="leyend">
                        <h1>
                            Think. Make. Solve.
                        </h1>
                    </div>
                    <div className="wwd">
                        <img src={Line} className="line" />
                        <p className="letter">Hello</p>
                    </div>
                    <div className="sobremí">
                        <p>I'm <span className="name">Luciano Coronel</span>, Full Stack Web Developer</p>
                    </div>
                    <button className="button">Learn More</button>
                </div>
                <div className="right">
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
                    <img src={Programmer} className="img" />
                </div>
            </div>
        </Section>
    )
}

export default Hero