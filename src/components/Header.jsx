import styled from "styled-components";

const Title = styled.header`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 2rem;

    color: white;
    background: var(--black);

    h1 {
        font-size: 6rem;
        font-family: var(--fancy-font);
    }

    img {
        width: 100px;
        margin-left: 2rem;
    }
`;

function Header() {
    return (
        <Title>
            <h1>The Bartender's Guide</h1>
            <img src="../src/assets/cocktail.jpg"></img>
        </Title>
    );
}

export default Header;
