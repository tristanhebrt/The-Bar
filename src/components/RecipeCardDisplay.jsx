import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";

const RecipeCardDisplay = ({ mainTitle, recipes }) => {
    const [allFlipped, setAllFlipped] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");
    const cardRefs = useRef([]);

    // Function to handle the flipping of all cards
    const handleFlipAll = () => {
        setAllFlipped(!allFlipped);
    };

    // Function to clear the search input
    const handleClearSearch = () => {
        setSearchQuery("");
    };

    // Function to handle the search query change
    const handleSearchChange = (event) => {
        setSearchQuery(event.target.value);
    };

    return (
        <Container>
            <TitleContainer>
                <Title>{mainTitle}</Title>
            </TitleContainer>
            {/* Search Bar Positioned Between Cards and Scrollbar */}
            <SearchContainer>
                <SearchInput
                    type="text"
                    placeholder="Find a cocktail..."
                    value={searchQuery}
                    onChange={handleSearchChange}
                />
                <ClearButton onClick={handleClearSearch}>Clear</ClearButton>
                <FlipAllButton onClick={handleFlipAll}>
                    {allFlipped ? "Unflip All" : "Flip All"}
                </FlipAllButton>
            </SearchContainer>
            <CardContainer>
                {recipes
                    .filter(recipe =>
                        recipe.title.toLowerCase().includes(searchQuery.toLowerCase())
                    )
                    .map((recipe, index) => (
                        <RecipeCard
                            key={index}
                            ref={(el) => cardRefs.current[index] = el} // Reference for scrolling
                            title={recipe.title}
                            content={[
                                ...(recipe.ingredients?.booze || []),
                                ...(recipe.ingredients?.syrups || []),
                                ...(recipe.ingredients?.bitters || []),
                                ...(recipe.ingredients?.garnishes || [])
                            ]}
                            steps={recipe.steps}
                            allFlipped={allFlipped}
                        />
                    ))}
            </CardContainer>
        </Container>
    );
};

const RecipeCard = React.forwardRef(({ title, content, steps, allFlipped }, ref) => {
    const [flipped, setFlipped] = useState(false);
    const [showOverlay, setShowOverlay] = useState(false);

    useEffect(() => {
        setFlipped(allFlipped);
    }, [allFlipped]);

    const handleCardClick = () => {
        setFlipped(!flipped);
    };

    const handleMoreClick = (e) => {
        e.stopPropagation(); // Prevents flipping when clicking "More"
        setShowOverlay(true);
    };

    const handleCloseOverlay = () => setShowOverlay(false);

    return (
        <>
            <Card ref={ref} className={flipped ? "flipped" : ""} onClick={handleCardClick}>
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
});

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
    height: auto;
`;

const TitleContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background: var(--highlight2);
    position: relative;
    padding: 1rem;
`;

const Title = styled.h1`
    font-family: var(--title-font);
    font-weight: 400;
    font-size: 3rem;
    text-transform: uppercase;
    color: var(--secondary);
    text-align: center;
`;

const SearchContainer = styled.div`
    display: flex;
    justify-content: center;
    gap: 1rem;
    align-items: center;
    padding: 1rem;
    background: var(--highlight2);
`;

const SearchInput = styled.input`
    padding: 5px;
    font-family: var(--main-font);
    font-size: 1.5rem;
    border-radius: 5px;
    border: 1px solid var(--primary);
    width: 250px;
`;

const ClearButton = styled.button`
    padding: 5px 10px;
    font-family: var(--main-font);
    font-size: 1.5rem;
    border-radius: 5px;
    background: var(--highlight3);
    color: var(--black);
    border: none;
    cursor: pointer;
    transition: background 0.3s ease;

    &:hover {
        background: var(--secondary);
    }
`;

const FlipAllButton = styled.button`
    padding: 5px 10px;
    font-family: var(--main-font);
    font-size: 1.5rem;
    border-radius: 5px;
    background: var(--highlight3);
    color: var(--black);
    border: none;
    cursor: pointer;
    transition: background 0.3s ease;

    &:hover {
        background: var(--secondary);
    }
`;

const CardContainer = styled.div`
    display: grid;
    grid-auto-flow: column;
    grid-auto-columns: max-content;
    overflow-x: auto;
    overflow-y: hidden;
    gap: 1rem;
    padding: 1rem;
    scrollbar-width: thick;
    scrollbar-color: var(--black) var(--primary);

    &::-webkit-scrollbar {
        height: 10px;
    }

    &::-webkit-scrollbar-track {
        background: var(--primary);
        border-radius: 10px;
    }

    &::-webkit-scrollbar-thumb {
        background: var(--secondary);
        border-radius: 10px;
        transition: background 0.3s ease;
    }

    &::-webkit-scrollbar-thumb:hover {
        background: var(--primary);
    }
`;

const Card = styled.div`
    width: 250px;
    height: 400px;
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
