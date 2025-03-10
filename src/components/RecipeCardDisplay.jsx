import React, { useState } from "react";
import styled from "styled-components";

const RecipeCardDisplay = ({ mainTitle, recipes }) => {
    return (
        <Container>
            <Title>{mainTitle}</Title>
            <CardContainer>
                {recipes.map((recipe, index) => (
                    <RecipeCard key={index} title={recipe.title} content={recipe.content} />
                ))}
            </CardContainer>
        </Container>
    );
};

const RecipeCard = ({ title, content }) => {
    const [flipped, setFlipped] = useState(false);

    const handleCardClick = () => {
        setFlipped(!flipped);
    };

    return (
        <Card onClick={handleCardClick} className={flipped ? "flipped" : ""}>
            <CardInner className={flipped ? "flipped" : ""}>
                <CardFront>
                    <h2>{title}</h2>
                </CardFront>
                <CardBack content={content} />
            </CardInner>
        </Card>
    );
};

// New RecipeCardBack component to properly render the ingredients
const CardBack = ({ content }) => (
    <CardBackContainer>
        {content.map((item, index) => (
            <p key={index}>{item}</p> // Using <p> to separate each ingredient
        ))}
    </CardBackContainer>
);

/* Styled Components */
const Container = styled.div`
    text-align: center;
    padding: 1rem;
    background: var(--highlight1);
    min-height: 100vh;
`;

const Title = styled.h1`
    font-family: var(--fancy-font);
    font-size: 4rem;
    color: var(--secondary);
    background: var(--highlight2);
    margin-bottom: 1rem;
`;

const CardContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 1rem;
`;

const Card = styled.div`
    width: 250px;
    height: 300px;
    perspective: 1000px;
    cursor: pointer;
`;

const CardInner = styled.div`
    width: 100%;
    height: 100%;
    position: relative;
    transition: transform 0.6s;
    transform-style: preserve-3d;

    &.flipped {
        transform: rotateY(-180deg);
    }
`;

const CardFront = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: absolute;
    backface-visibility: hidden;
    background: var(--highlight3);
    border-radius: 0.5rem;

    h2 {
        font-size: 2.5rem;
        color: var(--primary);
    }
`;

const CardBackContainer = styled(CardFront)`
    background: var(--highlight2);
    transform: rotateY(180deg);
    font-size: 1.5rem;
    padding: 0.5rem;
    display: flex;
    align-items: start;
    p {
        margin: 0.25rem 0;
    }
`;

export default RecipeCardDisplay;
