import React, { useEffect, useState } from 'react';
import {
    Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators,
    CarouselCaption,
} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components';
import A from "../../public/Skills/A.png";
import PY from "../../public/Skills/PY.png";
import RT from '../../public/Skills/RT.png';
import RX from '../../public/Skills/RX.png';
import B from '../../public/Skills/B.png';
import T from '../../public/Skills/T.png';
import ST from '../../public/Skills/ST.png';
import H from '../../public/Skills/H.png';
import C from '../../public/Skills/C.png';
import JAVASCRIPT from '../../public/Skills/JAVASCRIPT.png';
import NODEJS from '../../public/Skills/NODEJS.png';
import g from '../../public/Skills/g.png';
import E from '../../public/Skills/E.png';
import S from '../../public/Skills/S.png';
import GI from '../../public/Skills/GI.png';
import PM from '../../public/Skills/PM.png';
import P from '../../public/Skills/P.png';
import M from '../../public/Skills/M.png';

const items = [
    {
        src: `${A}`,
        altText: 'Angular',
        caption: 'Angular',
        key: 1,
    },
    {
        src: `${PY}`,
        altText: 'Python',
        caption: 'Python',
        key: 2,
    },
    {
        src: `${RT}`,
        altText: 'React',
        caption: 'React',
        key: 3,
    },
    {
        src: `${RX}`,
        altText: 'Redux',
        caption: 'Redux',
        key: 4,
    },
    {
        src: `${B}`,
        altText: 'Bootstrap',
        caption: 'Bootstrap',
        key: 5,
    },
    {
        src: `${T}`,
        altText: 'Tailwind',
        caption: 'Tailwind',
        key: 6,
    },
    {
        src: `${ST}`,
        altText: 'Styled-Components',
        caption: 'Styled-Components',
        key: 7,
    },
    {
        src: `${H}`,
        altText: 'HTML',
        caption: 'HTML',
        key: 8,
    },
    {
        src: `${C}`,
        altText: 'CSS',
        caption: 'CSS',
        key: 9,
    },
    {
        src: `${JAVASCRIPT}`,
        altText: 'Javascript',
        caption: 'Javascript',
        key: 10,
    },
    {
        src: `${NODEJS}`,
        altText: 'Node.Js',
        caption: 'Node.Js',
        key: 11,
    },
    {
        src: `${g}`,
        altText: 'Spring-Boot',
        caption: 'Spring-Boot',
        key: 12,
    },
    {
        src: `${E}`,
        altText: 'Express',
        caption: 'Express',
        key: 13,
    },
    {
        src: `${S}`,
        altText: 'Sequelize',
        caption: 'Sequelize',
        key: 14,
    },
    {
        src: `${GI}`,
        altText: 'Git',
        caption: 'Git',
        key: 15,
    },
    {
        src: `${PM}`,
        altText: 'Postman',
        caption: 'Postman',
        key: 16,
    },
    {
        src: `${P}`,
        altText: 'PostgreSql',
        caption: 'PostgreSql',
        key: 17,
    },
    {
        src: `${M}`,
        altText: 'MySQL',
        caption: 'MySQL',
        key: 18,
    },

];

export default function Skills(args) {
    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);

    const next = () => {
        if (animating) return;
        const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
        setActiveIndex(nextIndex);
    };

    const previous = () => {
        if (animating) return;
        const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
        setActiveIndex(nextIndex);
    };

    const goToIndex = (newIndex) => {
        if (animating) return;
        setActiveIndex(newIndex);
    };

    //logica para la traduccion
    useEffect((e) => {
        const flagElements = document.getElementById("flags");

        const textsToChange = document.querySelectorAll("[data-section]")

        const changeLanguage = async (language) => {
            const requestJson = await fetch(`../../public/languages/${language}.json`)

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
        <Container>
            <Title data-section="Skills" data-value="title">My Skills</Title>
            <Carousel
                activeIndex={activeIndex}
                next={next}
                previous={previous}
                {...args}
            >
                <CarouselIndicators
                    items={items}
                    activeIndex={activeIndex}
                    onClickHandler={goToIndex}
                />
                {items.map((item) => {
                    return (
                        <CarouselItem
                            onExiting={() => setAnimating(true)}
                            onExited={() => setAnimating(false)}
                            key={item.src}
                        >
                            <div className='img'>
                                <img src={item.src} alt={item.altText} className='img2' />
                            </div>
                            <CarouselCaption
                                captionText={item.caption}
                                captionHeader={item.caption}
                            />
                        </CarouselItem>);
                })}
                <CarouselControl
                    direction="prev"
                    directionText="Previous"
                    onClickHandler={previous}
                />
                <CarouselControl
                    direction="next"
                    directionText="Next"
                    onClickHandler={next}
                />
            </Carousel>
        </Container>
    );
}

const Container = styled.div`
height: 100vh;
scroll-snap-align: center;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;

   @media only screen and (max-width: 768px) {
        margin-bottom: 250px;
    }
.img{
    height: 500px;
    display: flex;
    width: 1200px;
    flex-direction: column;
    align-items: center;  
     .img2{
    display:flex;
    justify-content: center;
    width: 450px;
    height: 350px;
   }

      @media only screen and (max-width: 768px) {
        height: 350px;
        width: 100%;
    }
}
`

const Title = styled.h1`
font-size: 50px;
margin-bottom: 35px;

@media only screen and (max-width: 768px) {
    font-size: 30px;
    margin-bottom: 20px;
}
`