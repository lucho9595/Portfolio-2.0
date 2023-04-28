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

const items = [
    {
        src: '../../public/Skills/A.png',
        altText: 'Angular',
        caption: 'Angular',
        key: 1,
    },
    {
        src: '../../public/Skills/PY.png',
        altText: 'Python',
        caption: 'Python',
        key: 2,
    },
    {
        src: '../../public/Skills/RT.png',
        altText: 'React',
        caption: 'React',
        key: 3,
    },
    {
        src: '../../public/Skills/RX.png',
        altText: 'Redux',
        caption: 'Redux',
        key: 4,
    },
    {
        src: '../../public/Skills/B.png',
        altText: 'Bootstrap',
        caption: 'Bootstrap',
        key: 5,
    },
    {
        src: '../../public/Skills/T.png',
        altText: 'Tailwind',
        caption: 'Tailwind',
        key: 6,
    },
    {
        src: './../public/Skills/ST.png',
        altText: 'Styled-Components',
        caption: 'Styled-Components',
        key: 7,
    },
    {
        src: './../public/Skills/H.png',
        altText: 'HTML',
        caption: 'HTML',
        key: 8,
    },
    {
        src: './../public/Skills/C.png',
        altText: 'CSS',
        caption: 'CSS',
        key: 9,
    },
    {
        src: './../public/Skills/JAVASCRIPT.png',
        altText: 'Javascript',
        caption: 'Javascript',
        key: 10,
    },
    {
        src: './../public/Skills/NODEJS.png',
        altText: 'Node.Js',
        caption: 'Node.Js',
        key: 11,
    },
    {
        src: './../public/Skills/g.png',
        altText: 'Spring-Boot',
        caption: 'Spring-Boot',
        key: 12,
    },
    {
        src: './../public/Skills/E.png',
        altText: 'Express',
        caption: 'Express',
        key: 13,
    },
    {
        src: './../public/Skills/S.png',
        altText: 'Sequelize',
        caption: 'Sequelize',
        key: 14,
    },
    {
        src: './../public/Skills/G (2).png',
        altText: 'Git',
        caption: 'Git',
        key: 15,
    },
    {
        src: './../public/Skills/PM.png',
        altText: 'Postman',
        caption: 'Postman',
        key: 16,
    },
    {
        src: './../public/Skills/P.png',
        altText: 'PostgreSql',
        caption: 'PostgreSql',
        key: 17,
    },
    {
        src: './../public/Skills/M.png',
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

    const slides = items.map((item) => {
        return (
            <CarouselItem
                onExiting={() => setAnimating(true)}
                onExited={() => setAnimating(false)}
                key={item.src}
            >
                <Image src={item.src} alt={item.altText} />
                <CarouselCaption
                    captionText={item.caption}
                    captionHeader={item.caption}
                />
            </CarouselItem>
        );
    });

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
                {slides}
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

`

const Image = styled.img`
   height: 500px; 
   width: 1200px;
   
   @media only screen and (max-width: 768px) {
        height: 350px;
        width: 100%;
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