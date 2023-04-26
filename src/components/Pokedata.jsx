import React from "react";
import Poke from "../../public/img/Sin título 3.png";
import styled from "styled-components";
import { ImSphere } from "react-icons/im";

const Container = styled.div`
.proyecto{
    display: flex;
    align-items: center;
    justify-content: center;
    .img{
        border-radius: 20px;
        width: 800px;
        height: 400px;
        position: absolute;
        top: 0;
        bottom: 0;
    }
}

.btn{
    display: flex;
    justify-content: center;
    align-content: center;
        .buttonDownload{
            border-radius: 4px;
            background-color: #df3df5;
            border: none;
            color: #FFFFFF;
            text-align: center;
            padding: 10px;
            width: 100px;
            transition: all 0.5s;
            margin: 5px;
            text-decoration: none;
            display: flex;
            justify-content: center;
            gap: 10px;
            }
}
`

export default function Pokedata() {
    return (
        <Container>
            <div >
                <div className="proyecto">
                    <img src={Poke} alt="" className="img" />
                </div>
                <div className="btn">
                    <a href="https://google.com" target="_blank" className="buttonDownload">See page <ImSphere /></a>
                </div>
            </div>
        </Container>
    )
}