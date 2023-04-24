import React from "react";
import styled from "styled-components";

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
    }
    .left{
        flex: 1;
        display: flex;
        flex-direction: column;
         gap: 20px;
        flex-wrap: wrap;
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
    return (
        <Section3>
            <div className="container">
                <div className="left">
                    <h1>My works</h1>
                    <ul className="links">
                        {Data.map((item) => (
                            <li key={item} className="link" text={item}>{item}</li>
                        ))}
                    </ul>
                </div>
                <div className="right">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa nulla sit nostrum atque maiores provident voluptatum, repellendus aspernatur fuga, voluptatibus soluta quo excepturi ullam eum hic. Voluptate odio veniam iste!
                </div>
            </div>
        </Section3>
    )
}

export default Works