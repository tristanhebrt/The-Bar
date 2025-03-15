import styled from "styled-components";

const Title = styled.header`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 50vh;
    padding: 2rem;

    color: white;
    background: url("/assets/alora-bar-2.jpg") center/cover no-repeat;
    
    @media (max-width: 600px) {
        height: 100vh;
        background: url("/assets/alora-bar-6.jpg") center/cover no-repeat;
    }

    h1 {
        font-size: 7rem;
        font-family: var(--fancy-font);

        @media (max-width: 600px) {
            font-size: 2.5rem;
            padding: 0.5rem 1rem 0.5rem 1rem;
            background: rgba(0, 0, 0, 0.8);
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
