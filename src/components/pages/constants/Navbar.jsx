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
            <NavLink to="/">Cocktails</NavLink>
            <NavLink to="/wines">Wines</NavLink>
            <NavLink to="/beers">Beers</NavLink>
            <NavLink to="/foods">Food</NavLink>
            <NavLink to="/checklist">Checklists</NavLink>
        </Nav>
    );
};

export default Navbar;
