import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Nav = styled.nav`
    position: sticky;
    top: 0;  /* This is the crucial missing property */
    z-index: 1000;  /* Ensures nav stays above other content */
    display: flex;
    justify-content: space-around;
    align-items: center;
    background: black;
    padding: 1rem;
`;

const NavLink = styled(Link)`
    color: white;
    text-decoration: none;
    font-size: 1.2rem;

    &:hover {
        text-decoration: underline;
    }
`;

const Navbar = () => {
    return (
        <Nav>
            <NavLink to="/">Cocktail</NavLink>
            <NavLink to="/wines">Wine</NavLink>
            <NavLink to="/beers">Beer</NavLink>
            <NavLink to="/foods">Food</NavLink>
            <NavLink to="/checklist">Checklist</NavLink>
        </Nav>
    );
};

export default Navbar;
