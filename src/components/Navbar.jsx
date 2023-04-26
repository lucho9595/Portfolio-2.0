import React from "react";
import styled from "styled-components";
import Logo4 from "../../public/img/Logo4.png";
import Cv from "../assets/CV- CORONEL LUCIANO - 23-04-2023.pdf";

const Section2 = styled.div`
display: flex;
justify-content: center;
.navbar{
    width: 1400px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px 0px;
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
            padding: 10px;
            width: 100px;
            transition: all 0.5s;
            margin: 5px;
            text-decoration: none;
            }
        .buttonDownload:hover {
            background-color: #333;
            color: white;
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
                        <li>Studio</li>
                        <li>Work</li>
                        <li>Contact</li>
                    </ul>
                </div>
                <div className="icons">
                    <a href={Cv} target="_blank" className="buttonDownload">Download CV</a>
                </div>
            </div>
        </Section2>
    )
}

export default Navbar