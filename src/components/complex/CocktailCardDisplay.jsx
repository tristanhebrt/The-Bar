import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import Quiz from "./Quiz";

const CocktailCardDisplay = ({ mainTitle, recipes }) => {
    const [allFlipped, setAllFlipped] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");
    const [ingredientSearch, setIngredientSearch] = useState(""); // New state for ingredient search
    const [selectedFilter, setSelectedFilter] = useState([]);
    const [isFilterOpen, setIsFilterOpen] = useState(false);
    const cardRefs = useRef([]);

    const handleFlipAll = () => {
        setAllFlipped(!allFlipped);
    };

    const handleClearSearch = () => {
        setSearchQuery("");
        setIngredientSearch(""); // Clear the ingredient search as well
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

    // Flatten ingredients to a simple array of lowercase strings
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

    // Update filtering logic:
    // - "searchQuery" only looks at cocktail titles.
    // - "ingredientSearch" now supports multiple ingredients separated by space.
    const filteredRecipes = recipes
        .filter((recipe) => {
            const titleMatches = recipe.title
                .toLowerCase()
                .includes(searchQuery.toLowerCase());

            const ingredientsList = flattenIngredients(recipe.ingredients);

            // Split ingredientSearch into terms (if any)
            const searchTerms = ingredientSearch.trim() === ""
                ? []
                : ingredientSearch.trim().split(/\s+/);

            const ingredientMatches =
                searchTerms.length === 0 ||
                searchTerms.every((term) =>
                    ingredientsList.some((ingredient) =>
                        ingredient.includes(term.toLowerCase())
                    )
                );

            const filtersMatch =
                selectedFilter.length === 0 ||
                selectedFilter.every((filter) =>
                    ingredientsList.some((ingredient) =>
                        ingredient.includes(filter.toLowerCase())
                    )
                );

            return titleMatches && ingredientMatches && filtersMatch;
        })
        .sort((a, b) => a.title.localeCompare(b.title)); // Sort alphabetically

    // Define ingredientFilters so that it is available in the render
    const ingredientFilters = [
        "vodka", "gin", "rum", "tequila", "whiskey"
    ];

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
                    placeholder="Find a cocktail..."
                    value={searchQuery}
                    onChange={handleSearchChange}
                />
                <FilterButton onClick={toggleFilterMenu} isOpen={isFilterOpen}>
                    <img src="/assets/filter.png" alt="Filter" />
                </FilterButton>
                <ClearButton onClick={handleClearSearch}>Clear</ClearButton>
            </SearchContainer>

            {/* Filter Dropdown */}
            {isFilterOpen && (
                <FilterMenu>
                    {/* New search bar to filter cocktails by ingredient */}
                    <IngredientSearchInput
                        type="text"
                        placeholder="Search by ingredient..."
                        value={ingredientSearch}
                        onChange={(e) => setIngredientSearch(e.target.value)}
                    />
                    {ingredientFilters.map((item, index) => (
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
                    ))}
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
                            content={[
                                ...(recipe.ingredients?.booze || []),
                                ...(recipe.ingredients?.syrups || []),
                                ...(recipe.ingredients?.bitters || []),
                                ...(recipe.ingredients?.others || []),
                                ...(recipe.ingredients?.garnishes || []),
                            ]}
                            steps={recipe.steps}
                            notes={recipe.notes}
                            allFlipped={allFlipped}
                        />
                    ))
                )}
            </CardContainer>
            <TitleContainer>
                <BottomLeftOrnament/>
                <ButtonsContainer>
                    <FlipAllButton onClick={handleFlipAll}>
                        {allFlipped ? "Unflip" : "Flip"}
                    </FlipAllButton>
                    <Quiz cocktails={recipes} />
                </ButtonsContainer>
                <BottomRightOrnament/>
            </TitleContainer>
            <BlackLine />
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
        e.stopPropagation(); // Prevent flipping when clicking "More"
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
                    <CardBackContainer>
                        <CardBack>
                            {content.map((item, index) => (
                                <p key={index}>{item}</p>
                            ))}
                            <MoreButton onClick={(e) => {
                                e.stopPropagation();
                                setShowOverlay(true);
                            }}>Details</MoreButton> 
                        </CardBack>                   
                    </CardBackContainer>                
                </CardInner>
            </Card>

            {showOverlay && (
                <Overlay>
                    <OverlayContent>
                        <OrnamentContainer>
                            <TopLeftOrnament />
                            <h2>{title}</h2>
                            <TopRightOrnament />
                        </OrnamentContainer>
                        <StepsContainer>
                            <h3>Steps</h3>
                            {steps.map((step, index) => (
                                <p key={index}>- {step}</p>
                            ))}
                            {notes && (
                                <>
                                    <h4>Notes</h4>
                                    <p>{notes}</p>
                                </>
                            )}
                        </StepsContainer>
                        <OrnamentContainer>
                            <BottomLeftOrnament />
                            <CloseButton onClick={handleCloseOverlay}>Close</CloseButton>
                            <BottomRightOrnament />
                        </OrnamentContainer>
                    </OverlayContent>
                </Overlay>
            )}
        </>
    );
});

/* Styled Components */
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

const ButtonsContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
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
        props.isOpen ? 'var(--highlight3)' : 'var(--black)'};
    color: var(--black);
    border: none;
    cursor: pointer;
    transition: background 0.3s ease;
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
        background: var(--highlight3);
    }

    &:active {
        transform: scale(0.95);
    }

    img {
        width: 1.2rem;
        height: auto;
    }
`;

const FilterMenu = styled.div`
    position: relative;
    width: 100%;
    height: auto;
    background: var(--white);
    color: var(--black);
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 1rem;
    padding: 1rem;
    z-index: 1000;
`;

const IngredientSearchInput = styled.input`
    padding: 5px;
    font-family: var(--main-font);
    font-size: 1.5rem;
    border: 1px solid var(--primary);
    width: 250px;
    margin-bottom: 1rem;
`;

const FilterOption = styled.div`
    label {
        font-size: 1.5rem;
        display: inline-block;
    }

    input {
        margin-right: 10px;
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

const StepsContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-bottom: 2rem;
    padding: 0.5rem;

    p{
        margin: 0;
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

export default CocktailCardDisplay;
