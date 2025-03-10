import React, { useState } from "react";
import styled from "styled-components";

const RecipeCardDisplay = ({ mainTitle, recipes }) => {
    return (
        <Container>
            <Title>{mainTitle}</Title>
            <CardContainer>
                {recipes.map((recipe, index) => (
                    <RecipeCard 
                        key={index} 
                        title={recipe.title} 
                        content={recipe.content} 
                        steps={recipe.steps} 
                    />
                ))}
            </CardContainer>
        </Container>
    );
};

const RecipeCard = ({ title, content, steps }) => {
    const [flipped, setFlipped] = useState(false);
    const [showOverlay, setShowOverlay] = useState(false);

    const handleCardClick = () => setFlipped(!flipped);
    const handleMoreClick = (e) => {
        e.stopPropagation(); // Prevents flipping when clicking "More"
        setShowOverlay(true);
    };
    const handleCloseOverlay = () => setShowOverlay(false);

    return (
        <>
            <Card onClick={handleCardClick} className={flipped ? "flipped" : ""}>
                <CardInner className={flipped ? "flipped" : ""}>
                    <CardFront>
                        <h2>{title}</h2>
                    </CardFront>
                    <CardBack content={content} onMoreClick={handleMoreClick} />
                </CardInner>
            </Card>

            {showOverlay && (
                <Overlay>
                    <OverlayContent>
                        <h2>{title} - Steps</h2>
                        {steps.map((step, index) => (
                            <p key={index}>{step}</p>
                        ))}
                        <CloseButton onClick={handleCloseOverlay}>Close</CloseButton>
                    </OverlayContent>
                </Overlay>
            )}
        </>
    );
};

const CardBack = ({ content, onMoreClick }) => (
    <CardBackContainer>
        {content.map((item, index) => (
            <p key={index}>{item}</p>
        ))}
        <MoreButton onClick={onMoreClick}>More</MoreButton>
    </CardBackContainer>
);

/* Styled Components */
const Container = styled.div`
    text-align: center;
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
    display: grid;
    grid-auto-flow: column;
    grid-auto-columns: max-content;
    overflow-x: auto;
    overflow-y: hidden;
    gap: 1rem;
    padding: 1rem;
    scrollbar-width: thin;
    scrollbar-color: var(--secondary) rgba(255, 255, 255, 0.2);

    &::-webkit-scrollbar {
        height: 10px;
    }

    &::-webkit-scrollbar-track {
        background: rgba(255, 255, 255, 0.1);
        border-radius: 10px;
    }

    &::-webkit-scrollbar-thumb {
        background: var(--secondary);
        border-radius: 10px;
        border: 2px solid rgba(255, 255, 255, 0.3);
        transition: background 0.3s ease;
    }

    &::-webkit-scrollbar-thumb:hover {
        background: var(--primary);
    }
`;

const Card = styled.div`
    width: 250px;
    height: 500px;
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
    flex-direction: column;
    align-items: center;
    justify-content: center;

    p {
        margin: 0.25rem 0;
    }
`;

/* More Button */
const MoreButton = styled.button`
    margin-top: 1rem;
    padding: 5px 10px;
    font-size: 1.5rem;
    font-family: var(--main-font);
    border: none;
    background: var(--highlight3);
    color: var(--black);
    border-radius: 5px;
    cursor: pointer;
    transition: background 0.3s ease;

    &:hover {
        background: var(--secondary);
    }
`;

/* Overlay Styles */
const Overlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.7);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;
`;

const OverlayContent = styled.div`
    background: var(--primary);
    padding: 20px;
    width: auto;
    height: auto;
    border-radius: 10px;
    text-align: center;
    
    h2 {
        font-size: 3rem;
        margin-bottom: 10px;
    }

    p {
        font-size: 2rem;
        text-align: left;
        margin-bottom: 1rem;
    }
`;

/* Close Button */
const CloseButton = styled.button`
    margin-top: 1rem;
    padding: 5px 10px;
    font-size: 1.5rem;
    font-family: var(--main-font);
    border: none;
    background: var(--highlight3);
    color: var(--black);
    border-radius: 5px;
    cursor: pointer;
    transition: background 0.3s ease;

    &:hover {
        background: var(--secondary);
    }
`;

export default RecipeCardDisplay;
