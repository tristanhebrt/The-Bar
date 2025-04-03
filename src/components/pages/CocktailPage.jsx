import React from "react";
import CocktailCardDisplay from "../lists/cocktails/CocktailCardDisplay";

import { CLASSIC_COCKTAILS } from "../lists/cocktails/classicCocktails";
import { MODERN_COCKTAILS } from "../lists/cocktails/modernCocktails";
import { ALORA_COCKTAILS } from '../lists/cocktails/aloraCocktails';
import { RANDOM_COCKTAILS } from '../lists/cocktails/randomCocktails';

const allCocktails = [...RANDOM_COCKTAILS, ...CLASSIC_COCKTAILS, ...MODERN_COCKTAILS, ...ALORA_COCKTAILS];
const CocktailPage = () => {
    return <>
        <CocktailCardDisplay mainTitle="All Cocktails" recipes={allCocktails} />
        <CocktailCardDisplay mainTitle="Alora Cocktails" recipes={ALORA_COCKTAILS} />
        <CocktailCardDisplay mainTitle="Classic Cocktails" recipes={CLASSIC_COCKTAILS} />
        <CocktailCardDisplay mainTitle="Modern Cocktails" recipes={MODERN_COCKTAILS} />
    </>
};

export default CocktailPage;
