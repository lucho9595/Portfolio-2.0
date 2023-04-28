import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Logo4 from "../../public/img/Logo4.png";
import Spanish from "../../public/es.svg";
import English from "../../public/us.svg";
import { BsGithub, BsWhatsapp } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";

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
        text-decoration: none;
        .logo{
            .logo{
                cursor: pointer;
                height: 50px;
            }
        }
        .link{
            display: flex;
            gap: 20px;
            list-style: none;
            text-decoration: none;
            cursor: pointer;
            @media only screen and (max-width: 768px){
                display: none;
            }
        }
        .link .bio{ 
            color: white;
            text-decoration: none;
                }
        }
    .icons{
        display: flex;
        align-items: center;
        gap: 20px;
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
                    <Link href="/" className="logo">
                        <img src={Logo4} className="logo"/>
                    </Link>
                    <ul className="link">
                        <Link to="/biography" className="bio">
                            <li>Biography</li>
                        </Link>
                        <li>Social networks:</li>
                        <Link to="https://wa.me/1137601819" target="_blank" className="bio">
                        <li><BsWhatsapp /></li>
                        </Link>
                        <Link to="/biography" target="_blank" className="bio">
                        <li><BsLinkedin /></li>
                        </Link>
                        <Link to="/biography" target="_blank" className="bio">
                        <li><BsGithub /></li>
                        </Link>
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
                </div>
            </div>
        </Section2>
    )
}

export default Navbar