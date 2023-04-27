import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Logo4 from "../../public/img/Logo4.png";
import Cv from "../assets/CV- CORONEL LUCIANO - 23-04-2023.pdf";
import Spanish from "../../public/es.svg";
import English from "../../public/us.svg";

const Section2 = styled.div`
display: flex;
justify-content: center;

    @media only screen and (max-width: 768px){
        width: 100%;
        padding: 10px;
    }
.navbar{
    width: 1400px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px 0px;

    @media only screen and (max-width: 768px){
        width: 100%;
    }

    .links{
        display: flex;
        align-items: center;
        gap: 40px;
        .logo{
            .logo{
                height: 50px;
            }
        }
        .link{
            display: flex;
            gap: 20px;
            list-style: none;
            cursor: pointer;
            @media only screen and (max-width: 768px){
                display: none;
            }
        }
        }
    .icons{
        display: flex;
        align-items: center;
        gap: 20px;
        .buttonDownload{
            cursor: pointer;
            border-radius: 4px;
            background-color: #df3df5;
            border: none;
            color: #FFFFFF;
            text-align: center;
            padding: 12px;
            width: 136px;
            transition: all 0.5s;
            margin: 5px;
            text-decoration: none;
            }
        .buttonDownload:hover {
            background-color: #333;
            color: white;
            }
        .flags{
            width: 75px;
            display: flex;
            align-items: center;
            justify-content: space-between;

            .flags_item{
                width: 30px;  
            }

            .flags_item img{
                display: block;
                cursor: pointer;
            }

            @media only screen and (max-width: 768px) {
                width: 50px;
                #english{
                    margin-left:5px;
                    width: 23px;
                }
            }
        }
    }
}
`

const Navbar = () => {
    return (
        <Section2>
            <div className="navbar">
                <div className="links">
                    <div className="logo">
                        <img src={Logo4} className="logo" />
                    </div>
                    <ul className="link">
                        <li>Home</li>
                        <Link to="/biography">
                            <li>Biography</li>
                        </Link>
                        <li>Work</li>
                        <li>Skills</li>
                        <li>Contact</li>
                    </ul>
                </div>
                <div className="icons">
                    <div className="flags" id="flags">
                        <div className="flags_item" data-language="es">
                            <img src={Spanish} id="spanish" />
                        </div>
                        <div className="flags_item" data-language="en">
                            <img src={English} id="english" />
                        </div>
                    </div>
                    <a href={Cv} target="_blank" className="buttonDownload">Download CV</a>
                </div>
            </div>
        </Section2>
    )
}

export default Navbar