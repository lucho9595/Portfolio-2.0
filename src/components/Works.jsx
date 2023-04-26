import React, { useState } from "react";
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
flex-direction: column;
align-items: center;
justify-content: center;
.container{
    width: 1400px;
    display: flex;
    justify-content: space-between;
    .right{
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 20px;
        flex-wrap: wrap;
        position: relative;
    }
    .left{
        flex: 1;
        display: flex;
        flex-direction: column;
         gap: 20px;
        flex-wrap: wrap;
        .title{
            font-size: 65px;
        }
        .links{
            display: flex;
            flex-direction: column;
            gap: 20px;
            list-style: none;
            .link{
                font-size: 100px;
                font-weight: bold;
                cursor: pointer;
                color: transparent;
                -webkit-text-stroke: 1px white;
                  transition: color 1s ease-in;
                :hover{
                    color: pink;
                }
            }
        }
    }
}
`

const Works = () => {
    const [work, setWork] = useState("Pokedata")

    return (
        <Section3>
            <div className="container">
                <div className="left">
                    <h1 className="title">My works</h1>
                    <ul className="links">
                        {Data.map((item) => (
                            <li key={item} className="link" text={item} onClick={() => setWork(item)}>{item}</li>
                        ))}
                    </ul>
                </div>
                <div className="right">
                    {work === "Pokedata" ?
                        (<Pokedata />)
                        : work === "Videogame" ?
                            (<Videogame />)
                            : (<Ecommerce />)}
                </div>
            </div>
        </Section3>
    )
}

export default Works