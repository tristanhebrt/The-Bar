import styled from "styled-components";

const Title = styled.header`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 35vh;
    padding: 2rem;

    color: white;
    background: var(--black);

    @media (max-width: 600px) {
        height: 100vh;
    }

    h1 {
        font-size: 7rem;
        font-family: var(--fancy-font);

        @media (max-width: 600px) {
        font-size: 2.5rem;
    }
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
