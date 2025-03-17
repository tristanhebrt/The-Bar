import React from "react";
import CocktailCardDisplay from "./CocktailCardDisplay";

const modernCocktails = [
    {
        title: "Paper Plane",
        ingredients: {
            booze: ["0.75 oz Bourbon Whiskey", "0.75 oz Aperol", "0.75 oz Amaro Nonino"],
            syrups: ["0.75 oz Lemon Juice"],
            garnishes: ["Lemon Twist"]
        },
        steps: [
            "Shake all ingredients with ice until well chilled.",
            "Strain into a chilled coupe glass.",
            "Garnish with a lemon twist."
        ],
        notes: "A balanced cocktail with a mix of bitter, sweet, and sour flavors.",
        flavor: "Bitter, Citrus, Herbal"
    },
    {
        title: "Naked and Famous",
        ingredients: {
            booze: ["0.75 oz Mezcal", "0.75 oz Yellow Chartreuse", "0.75 oz Aperol"],
            syrups: ["0.75 oz Lime Juice"],
            garnishes: []
        },
        steps: [
            "Shake all ingredients with ice until well chilled.",
            "Strain into a chilled coupe glass.",
            "No garnish needed."
        ],
        notes: "A smoky and herbal cocktail with a citrusy finish.",
        flavor: "Smoky, Herbal, Citrus"
    },
    {
        title: "Aviation",
        ingredients: {
            booze: ["2 oz Gin", "0.5 oz Maraschino Liqueur"],
            syrups: ["0.5 oz Lemon Juice", "0.25 oz Crème de Violette"],
            garnishes: ["Cherry"]
        },
        steps: [
            "Shake all ingredients with ice until well chilled.",
            "Strain into a chilled coupe glass.",
            "Garnish with a cherry."
        ],
        notes: "A floral and slightly sweet cocktail with a hint of cherry.",
        flavor: "Floral, Cherry, Citrus"
    },
    {
        title: "Amaretto Sour",
        ingredients: {
            booze: ["2 oz Amaretto"],
            syrups: ["1 oz Lemon Juice", "0.5 oz Simple Syrup"],
            garnishes: ["Lemon Wheel"]
        },
        steps: [
            "Shake amaretto, lemon juice, and simple syrup with ice.",
            "Strain into a rocks glass over ice.",
            "Garnish with a lemon wheel."
        ],
        notes: "A sweet and tangy cocktail with a nutty almond flavor.",
        flavor: "Nutty, Tangy, Sweet"
    },
    {
        title: "Lemon Drop",
        ingredients: {
            booze: ["2 oz Vodka"],
            syrups: ["0.75 oz Lemon Juice", "0.25 oz Triple Sec"],
            others: ["1 dash Simple Syrup"],
            garnishes: ["Lemon Twist"]
        },
        steps: [
            "Shake vodka, lemon juice, triple sec, and simple syrup with ice.",
            "Strain into a chilled martini glass.",
            "Garnish with a lemon twist."
        ],
        notes: "A tart and sweet cocktail with a strong lemon flavor.",
        flavor: "Tart, Sweet, Citrus"
    }
];

const ModernCocktails = () => {
    return (
        <>
            <CocktailCardDisplay mainTitle="Modern Cocktails" recipes={modernCocktails} />
        </>
    );
};

export default ModernCocktails;
