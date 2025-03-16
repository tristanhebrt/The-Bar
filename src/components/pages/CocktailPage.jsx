import React from "react";

import Classics from "../lists/cocktails/Classics"
import Modern from '../lists/cocktails/Modern'
import Alora from '../lists/cocktails/Alora'
import MasterList from '../lists/cocktails/MasterList'

const CocktailPage = () => {
    return <>
        <MasterList />
        <Classics />
        <Modern />
        <Alora />
    </>
};

export default CocktailPage;
