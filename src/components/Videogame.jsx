import React from "react";
import Video from "../../public/img/Sin título 2.png";
import styled from "styled-components";
import { HiCursorClick } from "react-icons/hi";

const Container = styled.div`
    .contenedor figure{
       position:relative;
        height: 350px;
        cursor: pointer;
        width: 650px;
        overflow: hidden;
        border-radius: 6px;
        box-shadow: 0px 15px 25px rgba(0,0,0,0.50);
    }
    .contenedor figure img{
        width: 100%;
        height: 100%;
        transition: all 400ms ease-out;
        will-change: transform;

    @media only screen and (max-width: 768px) {
        width: 350px;
        height: 180px;
        margin-left: 20px;
    }
    }
    .contenedor figure .capa{
        position: absolute;
        top: 0;
        width: 100%;
        height: 100%;
        background: rgba(225, 106, 248, 0.7);
        transition: all 400ms ease-out;
        opacity: 0;
        visibility: hidden;
       text-align: center;
    }
    .contenedor figure:hover > .capa {
        opacity: 1;
        visibility: visible;

            @media only screen and (max-width: 768px) {
        width: 350px;
        height: 180px;
        margin-left: 20px;
    }

    }
    .contenedor figure:hover > .capa h3{
        margin-top: 70px;
        margin-bottom: 15px;
        @media only screen and (max-width: 768px) {
            font-size: 19px;
            font-weight: 800;
            margin-top: 25px;
            margin-bottom: 9px;
        }
    }
    .contenedor figure:hover > img{
        transform: scale(1.3);

        @media only screen and (max-width: 768px) {
            transform: scale(1);
        }
    }
    .contenedor figure .capa h3{
        color: #050505;
        font-size: 30px;
        font-weight: 800;
        margin-bottom: 120px;
        transition: all 400ms ease-out;
        margin-top: 30px;
    }
    .contenedor figure .capa p{
        color: #fff;
        font-size: 15px;
        font-weight: 400;
        line-height: 1.5;
        width: 100%;
        max-width: 220px;
        margin: auto;

            @media only screen and (max-width: 768px) {
            font-size: 13px;
            font-weight: 400;
        }
    }
    .contenedor figure .capa .click{
        color: #1323ff;
        text-decoration: none;
        margin-top: 15px;
        font-size: 25px;
        font-weight: 900;

        @media only screen and (max-width: 768px) {
            font-size: 16px;
            font-weight: 900;
        }
    }
    `

export default function Videogame() {

    return (
        <Container>
            <div className="contenedor">
                <a href="https://proyect-videogame-lucho9595.vercel.app/" target="_blank">
                    <figure>
                        <img src={Video} />
                        <div className="capa">
                            <h3>VIDEOGAME</h3>
                            <p>
                                Diseñar y desarrollar una app de videojuegos que incluía:
                                búsqueda , filtrados, creación y ordenamientos
                            </p>
                            <div className="click">
                                <span>Click Here</span><HiCursorClick />
                            </div>
                        </div>
                    </figure>
                </a>
            </div>
        </Container>
    )
}