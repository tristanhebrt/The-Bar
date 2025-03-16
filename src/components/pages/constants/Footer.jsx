import styled from "styled-components";

const Footer = styled.footer`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 35vh;
    padding: 2rem;

    color: black;
    background: var(--white);
    
    @media (max-width: 600px) {
        height: 20vh;
        background: var(--white);
    }

    p {
        font-size: 3rem;
        font-family: var(--main-font);

        @media (max-width: 600px) {
            font-size: 2rem;
            padding: 0.5rem 1rem 0.5rem 1rem;
        }
    }
`;


function Header() {
    return (
        <Footer>
            <p>Curated by Tristan</p>
        </Footer>
    );
}

export default Header;
