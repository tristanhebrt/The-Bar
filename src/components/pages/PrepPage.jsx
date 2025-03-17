import React from "react";
import styled from "styled-components";
import BarPrep from "../lists/prep/BarPrep";

const PrepPage = () => {
    return<>
        <ComingSoon>Coming Soon</ComingSoon>
        <BarPrep />
    </>
};

export default PrepPage;

const ComingSoon = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 3rem;

    font-size: 3rem;
    font-weight: 800;
    color: var(--black);
`