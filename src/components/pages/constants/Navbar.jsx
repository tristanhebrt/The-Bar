import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Nav = styled.nav`
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
            <NavLink to="/prep">Prep</NavLink>
        </Nav>
    );
};

export default Navbar;
