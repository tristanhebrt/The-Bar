import React, { useState, useEffect, useRef, Children } from "react";
import styled from "styled-components";
import Quiz from "./Quiz";

const RecipeCardDisplay = ({ mainTitle, recipes }) => {
    const [allFlipped, setAllFlipped] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedFilter, setSelectedFilter] = useState([]);
    const [isFilterOpen, setIsFilterOpen] = useState(false);
    const cardRefs = useRef([]);

    const handleFlipAll = () => {
        setAllFlipped(!allFlipped);
    };

    const handleClearSearch = () => {
        setSearchQuery("");
        setSelectedFilter([]); // Clear the selected filters
    };

    const handleSearchChange = (event) => {
        setSearchQuery(event.target.value);
    };

    const toggleFilterMenu = () => {
        setIsFilterOpen(!isFilterOpen);
    };

    const handleFilterChange = (event) => {
        const selectedOption = event.target.value;
        setSelectedFilter((prevSelected) =>
            prevSelected.includes(selectedOption)
                ? prevSelected.filter((item) => item !== selectedOption)
                : [...prevSelected, selectedOption]
        );
    };

    const flattenIngredients = (ingredients) => {
        const allIngredients = [
            ...(ingredients?.booze || []),
            ...(ingredients?.syrups || []),
            ...(ingredients?.bitters || []),
            ...(ingredients?.others || []),
            ...(ingredients?.garnishes || []),
        ];
        return allIngredients.map((ingredient) => ingredient.toLowerCase());
    };

    const filteredRecipes = recipes
    .filter((recipe) => {
        const matchesSearchQuery = recipe.title
            .toLowerCase()
            .includes(searchQuery.toLowerCase());

        const flattenedIngredients = flattenIngredients(recipe.ingredients);

        const matchesFilters =
            selectedFilter.length === 0 ||
            selectedFilter.every((filter) =>
                flattenedIngredients.some((ingredient) =>
                    ingredient.includes(filter.toLowerCase())
                )
            );

        return matchesSearchQuery && matchesFilters;
    })
    .sort((a, b) => a.title.localeCompare(b.title)); // Sort alphabetically

    return (
        <Container>
            <TitleContainer>
                <Title>{mainTitle}</Title>
            </TitleContainer>
            <SearchContainer>
                <FilterButton onClick={toggleFilterMenu} isOpen={isFilterOpen}>
                    <img src="/assets/filter.png" alt="Filter" />
                </FilterButton>
                <SearchInput
                    type="text"
                    placeholder="Find a cocktail..."
                    value={searchQuery}
                    onChange={handleSearchChange}
                />
                <ClearButton onClick={handleClearSearch}>Clear</ClearButton>
                <FlipAllButton onClick={handleFlipAll}>
                    {allFlipped ? "Unflip" : "Flip"}
                </FlipAllButton>
                <Quiz cocktails={recipes} />
            </SearchContainer>

            {/* Filter Dropdown */}
            {isFilterOpen && (
                <FilterMenu>
                    {["vodka", "gin", "rum", "whiskey", "tequila", "lime", "lemon", "simple", "agave", "demerara"].map(
                        (item, index) => (
                            <FilterOption key={index}>
                                <label>
                                    <input
                                        type="checkbox"
                                        value={item}
                                        onChange={handleFilterChange}
                                        checked={selectedFilter.includes(item)}
                                    />
                                    {item.charAt(0).toUpperCase() + item.slice(1)}
                                </label>
                            </FilterOption>
                        )
                    )}
                </FilterMenu>
            )}

            <CardContainer>
                {filteredRecipes.length === 0 ? (
                    <p>No cocktails match the selected filters.</p>
                ) : (
                    filteredRecipes.map((recipe, index) => (
                        <RecipeCard
                            key={index}
                            title={recipe.title}
                            content={[...(recipe.ingredients?.booze || []),
                            ...(recipe.ingredients?.syrups || []),
                            ...(recipe.ingredients?.bitters || []),
                            ...(recipe.ingredients?.others || []),
                            ...(recipe.ingredients?.garnishes || []),]}
                            steps={recipe.steps}
                            notes={recipe.notes}
                            allFlipped={allFlipped}
                        />
                    ))
                )}
            </CardContainer>
        </Container>
    );
};

const RecipeCard = React.forwardRef(({ title, content, steps, notes, allFlipped }, ref) => {
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
                        <h2>{title}</h2>
                        <h3>More</h3>
                        {steps.map((step, index) => (
                            <p key={index}>- {step}</p>
                        ))}
                        {notes && (
                            <>
                                <h3>Notes</h3>
                                <p>{notes}</p>
                            </>
                        )}
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
        <MoreButton onClick={onMoreClick}>Steps</MoreButton>
    </CardBackContainer>
);

/* Styled Components */
const Container = styled.div`
    text-align: center;
    height: auto;
    padding-bottom: 10rem;
    background: var(--black);

    @media (max-width: 600px) {
        padding-bottom: 0;
    }
`;

const TitleContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background: var(--white);
    position: relative;
    padding: 1rem;
`;

const Title = styled.h1`
    font-family: var(--title-font);
    font-weight: 600;
    font-size: 3rem;
    text-transform: uppercase;
    color: var(--black);
    text-align: center;
`;

const SearchContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 1rem;
    padding: 1rem;
    background: var(--white);
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

const FilterButton = styled.button`
    padding: 5px 10px;
    font-family: var(--main-font);
    font-size: 1.2rem;
    background: ${(props) =>
        props.isOpen ? 'var(--highlight3)' : 'var(--black)'}; /* Change background based on open state */
    color: var(--black);
    border: none;
    cursor: pointer;
    transition: background 0.3s ease;
    display: flex;
    align-items: center; /* Center the image vertically */
    justify-content: center; /* Center the image horizontally */

    &:hover {
        background: var(--highlight3);
    }

    &:active {
        transform: scale(0.95);
    }

    img {
        width: 1.2rem; /* Adjust image size */
        height: auto; /* Keep aspect ratio */
    }
`;

const FilterMenu = styled.div`
    position: relative;
    width: 100%;
    height: auto;
    background: var(--white);
    color: var(--black);
    display: flex;
    flex-wrap: wrap; /* Allow wrapping of filter options */
    justify-content: center;
    gap: 1rem; /* Add space between items */
    padding: 1rem;
    z-index: 1000;
`;

const FilterOption = styled.div`
    label {
        font-size: 1.5rem;
        display: inline-block;
    }

    input {
        margin-right: 10px;
    }

    /* Make filter options take full width on smaller screens */
    width: calc(% - 1rem); /* Default to 3 items per row */
    
    @media (max-width: 768px) {
        width: calc(% - 1rem); /* 2 items per row on medium screens */
    }

    @media (max-width: 480px) {
        width: %; /* 1 item per row on small screens */
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
        font-family: var(--title-font);
        font-size: 2.5rem;
        color: var(--white);
    }
`;

const CardBackContainer = styled(CardFront)`
    background: var(--highlight2);
    transform: rotateY(180deg);
    font-family: var(--main-font);
    font-size: 1.5rem;
    padding: 1rem 0 1rem 0.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative; /* Add this line */

    p {
        margin: 0.1rem 0;
        align-self: flex-start;
        color: var(--white);
    }
`;

const MoreButton = styled.button`
    position: absolute;
    bottom: 0.5rem;
    padding: 5px 10px;
    font-size: 1.2rem;
    font-family: var(--text-font);
    border: none;
    background: var(--highlight3);
    color: var(--black);
    cursor: pointer;
    transition: background 0.3s ease;

    &:hover {
        background: var(--secondary);
    }
`;

const Overlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.8);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;
    opacity: 0;
    animation: fadeIn 0.2s forwards;
    
    @keyframes fadeIn {
        to {
            opacity: 1;
        }
    }
`;

const OverlayContent = styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
    background: var(--primary);
    padding: 2rem;
    width: auto;
    height: auto;
    text-align: center;
    opacity: 0;
    animation: contentFadeIn 0.5s forwards; /* Delay to sync with overlay fade-in */
    
    @keyframes contentFadeIn {
        to {
            opacity: 1;
        }
    }
    
    h2 {
        font-family: var(--title-font);
        font-size: 3rem;
        margin-bottom: 20px;

        @media (max-width: 600px) {
            font-size: 2rem;
        }
    }

    h3 {
        font-family: var(--title-font);
        font-size: 3rem;
        color: var(--white);

        @media (max-width: 600px) {
            font-size: 2rem;
        }
    }

    p {
        font-family: var(--main-font);
        font-size: 2rem;
        text-align: left;
        color: var(--white);
        margin-bottom: 1rem;
        margin-left: 0; /* Remove left margin */

        @media (max-width: 600px) {
            font-size: 1.5rem;
            margin-bottom: 0.5rem;
        }
    }

    button {
        align-self: center; /* Center the button */
    }
`;

const CloseButton = styled.button`
    margin-top: 1rem;
    padding: 5px 10px;
    font-size: 1.2rem;
    font-family: var(--text-font);
    border: none;
    background: var(--highlight3);
    color: var(--black);
    cursor: pointer;
    transition: background 0.3s ease;

    &:hover {
        background: var(--secondary);
    }
`;


export default RecipeCardDisplay;
