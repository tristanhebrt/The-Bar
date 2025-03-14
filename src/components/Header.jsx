import styled from "styled-components";

const Title = styled.header`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 35vh;
    padding: 2rem;

    color: white;
    background: var(--black);

    h1 {
        font-size: 8vw;
        font-family: var(--fancy-font);
    }
`;

function Header() {
    return (
        <Title>
            <h1>The Bartender's Guide</h1>
        </Title>
    );
}

export default Header;
