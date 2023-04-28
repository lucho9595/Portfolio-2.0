import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Logo4 from "../../public/img/Logo4.png";
import Spanish from "../../public/es.svg";
import English from "../../public/us.svg";
import { BsGithub, BsWhatsapp, BsLinkedin } from "react-icons/bs";
import { SiGmail } from "react-icons/si";

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

export default function Navbar() {

    //logica para la traduccion
    useEffect((e) => {
        const flagElements = document.getElementById("flags");

        const textsToChange = document.querySelectorAll("[data-section]")

        const changeLanguage = async (language) => {
            const requestJson = await fetch(`../../languages/${language}.json`)

            const texts = await requestJson.json();

            for (const textToChange of textsToChange) {
                const section = textToChange.dataset.section;
                const value = textToChange.dataset.value;

                textToChange.innerHTML = texts[section][value];
            };
        };

        flagElements.addEventListener('click', (e) => {
            changeLanguage(e.target.parentElement.dataset.language)
        })
    }, []);

    return (
        <Section2>
            <div className="navbar">
                <div className="links">
                    <Link href="/" className="logo">
                        <img src={Logo4} className="logo" />
                    </Link>
                    <ul className="link">
                        <li data-section="Navbar" data-value="title2">Social networks:</li>
                        <Link to="https://wa.me/1137601819" target="_blank" className="bio">
                            <li><BsWhatsapp /></li>
                        </Link>
                        <Link to="https://www.linkedin.com/in/luciano-coronel-90503bb8" target="_blank" className="bio">
                            <li><BsLinkedin /></li>
                        </Link>
                        <Link to="https://github.com/lucho9595" target="_blank" className="bio">
                            <li><BsGithub /></li>
                        </Link>
                        <Link to="mailto:lucianocoronel48@gmail.com" target="_blank" className="bio">
                            <li><SiGmail /></li>
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
};