import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";

const FoodCardDisplay = ({ mainTitle, foodList }) => {
    const [allFlipped, setAllFlipped] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");
    const cardRefs = useRef([]);

    const handleFlipAll = () => {
        setAllFlipped(!allFlipped);
    };

    const handleClearSearch = () => {
        setSearchQuery("");
    };

    const filteredFoods = foodList
        .filter((food) => {
            const searchLower = searchQuery.toLowerCase();
            return (
                food.title.toLowerCase().includes(searchLower) ||
                food.ingredients.toLowerCase().includes(searchLower) ||
                food.description.toLowerCase().includes(searchLower) ||
                food.options.toLowerCase().includes(searchLower) ||
                food.winePairings.toLowerCase().includes(searchLower) ||
                food.allergens.toLowerCase().includes(searchLower)
            );
        })
        .sort((a, b) => a.title.localeCompare(b.title));

    return (
        <Container>
            <TitleContainer>
                <TopLeftOrnament/>
                <Title>{mainTitle}</Title>
                <TopRightOrnament/>
            </TitleContainer>
            <SearchContainer>
                <SearchInput
                    type="text"
                    placeholder="Find a dish..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
                <ClearButton onClick={handleClearSearch}>Clear</ClearButton>
            </SearchContainer>

            <CardContainer>
                {filteredFoods.length === 0 ? (
                    <p>No dishes match your search.</p>
                ) : (
                    filteredFoods.map((food, index) => (
                        <FoodCard
                            key={index}
                            food={food}
                            allFlipped={allFlipped}
                        />
                    ))
                )}
            </CardContainer>
            <TitleContainer>
                <BottomLeftOrnament/>
                <FlipAllButton onClick={handleFlipAll}>
                    {allFlipped ? "Unflip" : "Flip"}
                </FlipAllButton>
                <BottomRightOrnament/>
            </TitleContainer>
            <BlackLine />
        </Container>
    );
};

const FoodCard = React.forwardRef(({ food, allFlipped }, ref) => {
    const [flipped, setFlipped] = useState(false);
    const [showOverlay, setShowOverlay] = useState(false);
    const [showWineOverlay, setShowWineOverlay] = useState(false);

    useEffect(() => {
        setFlipped(allFlipped);
    }, [allFlipped]);

    return (
        <>
            <Card ref={ref} className={flipped ? "flipped" : ""} onClick={() => setFlipped(!flipped)}>
                <CardInner className={flipped ? "flipped" : ""}>
                    <CardFront>
                        <h2>{food.title}</h2>
                    </CardFront>
                    <CardBackContainer>
                        <CardBack>
                            <TastingNotes>
                                <h3>Ingredients</h3>
                                <p>{food.ingredients}</p>
                            </TastingNotes>
                            <MoreButton onClick={(e) => {
                                e.stopPropagation();
                                setShowOverlay(true);
                            }}>Details</MoreButton>
                            {food.winePairings && (
                                <WineButton onClick={(e) => {
                                    e.stopPropagation();
                                    setShowWineOverlay(true);
                                }}>Wine Pairings</WineButton>
                            )}
                        </CardBack>
                    </CardBackContainer>
                </CardInner>
            </Card>

            {showOverlay && (
                <Overlay>
                    <OverlayContent>
                        <OrnamentContainer>
                            <TopLeftOrnament />
                            <h2>{food.title}</h2>
                            <TopRightOrnament />
                        </OrnamentContainer>
                        <FoodDetails>
                            {food.description && (
                                <DetailItem>
                                    <Label>Description</Label>
                                    <Value>{food.description}</Value>
                                </DetailItem>
                            )}
                            {food.options && (
                                <DetailItem>
                                    <Label>Options</Label>
                                    <Value>{food.options}</Value>
                                </DetailItem>
                            )}
                            {food.allergens && (
                                <DetailItem>
                                    <Label>Allergies</Label>
                                    <Value>{food.allergens}</Value>
                                </DetailItem>
                            )}
                        </FoodDetails>
                        <OrnamentContainer>
                            <BottomLeftOrnament />
                            <CloseButton onClick={() => setShowOverlay(false)}>Close</CloseButton>
                            <BottomRightOrnament />
                        </OrnamentContainer>
                    </OverlayContent>
                </Overlay>
            )}
            {showWineOverlay && (
                <Overlay>
                    <OverlayContent>
                        <OrnamentContainer>
                            <TopLeftOrnament />
                            <h2>Wine Pairings</h2>
                            <TopRightOrnament />
                        </OrnamentContainer>
                        <FoodDetails>
                            <p>
                            {food.winePairings && (
                                <DetailItem>
                                    <Value>{food.winePairings}</Value>
                                </DetailItem>
                            )}
                            </p>
                        </FoodDetails>
                        <OrnamentContainer>
                            <BottomLeftOrnament />
                            <CloseButton onClick={() => setShowWineOverlay(false)}>Close</CloseButton>
                            <BottomRightOrnament />
                        </OrnamentContainer>
                    </OverlayContent>
                </Overlay>
            )}
        </>
    );
});


/* Styled Components */

const TasteProfileSection = styled.div`
    width: 100%;
`;

const TasteItem = styled.div`
    margin: 0.25rem;
`;

const ScaleContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    width: 100%;
`;

const ScaleLabel = styled.span`
    text-align: center;
    font-family: var(--main-font);
    font-size: 1.2rem;
    font-weight: 600;
    width: 5rem;
    white-space: nowrap;
    color: var(--black);
`;

const ScaleBar = styled.div`
    flex-grow: 1;
    height: 0.5rem;
    background: var(--light-grey);
    position: relative;
    overflow: hidden;
`;

const ScaleFill = styled.div`
    height: 100%;
    width: ${props => props.width}%;
    background: var(--light-grey);
    position: absolute;
    left: 0;
    transition: width 0.5s ease-out;
    
    &::after {
        content: "";
        position: absolute;
        right: 0;
        top: 0;
        bottom: 0;
        width: 1rem;
        background: var(--primary);
    }
`;

const TastingNotes = styled.div`
    margin-bottom: 1.5rem;
    h3 {
        color: var(--primary);
        font-size: 1.6rem;
        margin-bottom: 0.5rem;
    }
    p {
        font-size: 1.4rem;
        line-height: 1.4;
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
    background: var(--black);

    h2 {
        font-family: var(--main-font);
        font-size: 2.5rem;
        color: var(--white);
        width: 90%;
    }
`;

const CardBack = styled.div`
    background: var(--light-grey);
    padding: 1.5rem;
    text-align: left;
    width: 100%;
    
    p {
        font-size: 1.4rem;
        margin: 0.5rem 0;
    }

    strong {
        color: var(--primary);
    }
`;

const FoodDetails = styled.div`
    padding: 1rem;
    width: 90%;
    margin: 0 auto;
`;

const DetailItem = styled.div`
    margin: 1rem 0;
`;

const Label = styled.span`
    font-family: var(--text-font);
    font-size: 3rem;
    font-weight: 800;
    margin-right: 1rem;

    @media (max-width: 600px) {
        font-size: 1.5rem;
    }
`;

const Value = styled.span`
    font-size: 1.25rem;
    font-weight: 600;
    display: block;
    margin-top: 0.5rem;
`;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    height: auto;
    padding-top: 10rem;
    background: var(--white);

    @media (max-width: 600px) {
        padding-top: 3rem;
    }
`;

const BlackLine = styled.div`
    width: 60%;
    height: 3px;
    align-self: center;
    margin-top: 3rem;
    background: var(--black);
`;

const TitleContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    background: var(--white);
    position: relative;
    padding: 1rem;
    width: 100%;
`;

const Title = styled.h1`
    font-family: var(--title-font);
    font-weight: 600;
    font-size: 3rem;
    text-transform: uppercase;
    color: var(--black);
    text-align: center;

    @media (max-width: 600px) {
        font-size: 2rem;
    }
`;

const SearchContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 1rem;
    padding: 1rem;
    background: var(--white);

    @media (max-width: 600px) {
        gap: 0.5rem;
        padding: 1rem;
        
    }
`;

const SearchInput = styled.input`
    padding: 5px;
    font-family: var(--main-font);
    font-size: 1.5rem;
    background: var(--black);
    border: 1px solid var(--primary);
    width: 250px;
`;

const ClearButton = styled.button`
    padding: 5px 10px;
    font-family: var(--text-font);
    font-size: 1.2rem;
    background: var(--black);
    color: var(--white);
    border: none;
    cursor: pointer;
    transition: background 0.3s ease, transform 0.1s ease;

    &:hover {
        background: var(--highlight3);
    }

    &:active {
        transform: scale(0.95);
    }
`;

const FlipAllButton = styled.button`
    padding: 5px 10px;
    width: 80px;
    font-family: var(--text-font);
    font-size: 1.2rem;
    background: var(--black);
    color: var(--white);
    border: none;
    cursor: pointer;
    transition: background 0.3s ease;

    &:hover {
        background: var(--highlight3);
    }

    &:active {
        transform: scale(0.95);
    }
`;

const CardContainer = styled.div`
    display: grid;
    grid-auto-flow: column;
    grid-auto-columns: max-content;
    overflow-x: auto;
    overflow-y: hidden;
    gap: 1rem;
    padding: 1rem 1rem 2rem 1rem;
    background: var(--white);
    scrollbar-width: thick;
    scrollbar-color: var(--black) var(--white);

    p {
        font-size: 1.5rem;
        color: var(--black);
        margin-left: 10vw;
    }

    &::-webkit-scrollbar {
        height: 10px;
    }

    &::-webkit-scrollbar-track {
        background: var(--white);
        border-radius: 10px;
    }

    &::-webkit-scrollbar-thumb {
        background: var(--white);
        border-radius: 10px;
        transition: background 0.3s ease;
    }

    &::-webkit-scrollbar-thumb:hover {
        background: var(--white);
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

const CardBackContainer = styled(CardFront)`
    background: var(--light-grey);
    transform: rotateY(180deg);
    font-family: var(--main-font);
    font-size: 1.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;

    p {
        margin: 0.1rem 0;
        align-self: flex-start;
        color: var(--black);
    }
`;

const MoreButton = styled.button`
    position: absolute;
    bottom: 0.5rem;
    left: 0.5rem;
    padding: 5px 10px;
    margin-top: 1rem;
    font-size: 1rem;
    font-family: var(--text-font);
    border: none;
    background: var(--white);
    color: var(--black);
    cursor: pointer;
    transition: background 0.3s ease;

    &:hover {
        background: var(--light-grey);
    }
`;

const WineButton = styled.button`
    position: absolute;
    bottom: 0.5rem;
    right: 0.5rem;
    padding: 5px 10px;
    margin-top: 1rem;
    font-size: 1rem;
    font-family: var(--text-font);
    border: none;
    background: var(--white);
    color: var(--black);
    cursor: pointer;
    transition: background 0.3s ease;

    &:hover {
        background: var(--light-grey);
    }
`;

const Overlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.8);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;
    opacity: 0;
    animation: fadeIn 0.2s forwards;

    @media (max-width: 600px) {
        width: 100vw;
        height: 100vh;
        background: var(--white);
    }
    
    @keyframes fadeIn {
        to {
            opacity: 1;
        }
    }
`;

const OverlayContent = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    overflow: hidden;
    background: var(--white);
    color: var(--black);
    padding: 1rem;
    
    text-align: center;
    opacity: 0;
    animation: contentFadeIn 0.5s forwards;
    
    @keyframes contentFadeIn {
        to {
            opacity: 1;
        }
    }
    
    h2 {
        align-self: center;
        font-family: var(--title-font);
        font-size: 3rem;
        margin: 0 1rem 0rem 1rem;

        @media (max-width: 600px) {
            font-size: 2rem;
        }
    }

    h3 {
        font-family: var(--title-font);
        font-size: 3rem;

        @media (max-width: 600px) {
            font-size: 2rem;
        }
    }
        
    h4 {
        align-self: center;
        font-family: var(--title-font);
        font-size: 3rem;
        margin-top: 1rem;

        @media (max-width: 600px) {
            font-size: 2rem;
        }
    }

    p {
        font-family: var(--main-font);
        font-size: 2rem;

        @media (max-width: 600px) {
            font-size: 1.5rem;
        }
    }

    button {
        align-self: center;
    }
`;

const CloseButton = styled.button`
    padding: 5px 10px;
    font-size: 1.2rem;
    font-family: var(--text-font);
    border: none;
    background: var(--black);
    color: var(--white);
    cursor: pointer;
    transition: background 0.3s ease;

    &:hover {
        background: var(--secondary);
    }
`;

const Ornament = styled.img`
    position: relative;
    width: 100px;
    height: 100px;
    
    @media (max-width: 600px) {
        width: 50px;
        height: 50px;
    }

    ${({ rotate }) => rotate && `rotate: ${rotate};`}
`;

const OrnamentComponent = ({ rotate, alt }) => (
    <Ornament src="/assets/corner-ornament.png" alt={alt} rotate={rotate} />
);

const TopLeftOrnament = () => <OrnamentComponent rotate="90deg" alt="Top Left Ornament" />;
const TopRightOrnament = () => <OrnamentComponent rotate="180deg" alt="Top Right Ornament" />;
const BottomLeftOrnament = () => <OrnamentComponent alt="Bottom Left Ornament" />;
const BottomRightOrnament = () => <OrnamentComponent rotate="270deg" alt="Bottom Right Ornament" />;

const OrnamentContainer = styled.div`
    display: flex;
    justify-content: space-between;
    background: var(--white);
    position: relative;
    width: 100%;
`;

export default FoodCardDisplay;
