import React from "react";
import CocktailCardDisplay from "../lists/cocktails/CocktailCardDisplay";

import { CLASSIC_COCKTAILS } from "../lists/cocktails/classicCocktails";
import { MODERN_COCKTAILS } from "../lists/cocktails/modernCocktails";
import { ALORA_COCKTAILS } from '../lists/cocktails/aloraCocktails';
import { MASTER_COCKTAILS } from '../lists/cocktails/masterCocktails';

const CocktailPage = () => {
    return <>
        <CocktailCardDisplay mainTitle="All Cocktails" recipes={MASTER_COCKTAILS} />
        <CocktailCardDisplay mainTitle="Alora Cocktails" recipes={ALORA_COCKTAILS} />
        <CocktailCardDisplay mainTitle="Classic Cocktails" recipes={CLASSIC_COCKTAILS} />
        <CocktailCardDisplay mainTitle="Modern Cocktails" recipes={MODERN_COCKTAILS} />
    </>
};

export default CocktailPage;
