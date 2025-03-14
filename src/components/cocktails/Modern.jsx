import React from "react";
import RecipeCardDisplay from "../RecipeCardDisplay";

const modernCocktails = [
    {
        title: "Cosmopolitan",
        ingredients: {
            booze: ["1.5 oz Vodka", "0.5 oz Triple Sec"],
            syrups: ["1 oz Cranberry Juice", "0.5 oz Lime Juice"],
            garnishes: ["Lime Wheel"]
        },
        steps: [
            "Shake all ingredients with ice until well chilled.",
            "Strain into a chilled coupe glass.",
            "Garnish with a lime wheel."
        ],
        notes: "A tart and tangy cocktail with a hint of sweetness from the cranberry juice."
    },
    {
        title: "Espresso Martini",
        ingredients: {
            booze: ["1.5 oz Vodka", "0.5 oz Coffee Liqueur"],
            syrups: ["1.5 oz Espresso", "0.25 oz Demerara Syrup"],
            garnishes: ["3 Coffee Beans"]
        },
        steps: [
            "Shake all ingredients with ice until well chilled.",
            "Strain into a chilled coupe.",
            "Garnish with coffee beans."
        ],
        notes: "A rich and smooth cocktail with a strong coffee flavor."
    },
    {
        title: "Paper Plane",
        ingredients: {
            booze: ["0.75 oz Bourbon", "0.75 oz Aperol", "0.75 oz Amaro Nonino"],
            syrups: ["0.75 oz Lemon Juice"],
            garnishes: ["Lemon Twist"]
        },
        steps: [
            "Shake all ingredients with ice until well chilled.",
            "Strain into a chilled coupe glass.",
            "Garnish with a lemon twist."
        ],
        notes: "A balanced cocktail with a mix of bitter, sweet, and sour flavors."
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
        notes: "A smoky and herbal cocktail with a citrusy finish."
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
        notes: "A floral and slightly sweet cocktail with a hint of cherry."
    },
    {
        title: "Aperol Spritz",
        ingredients: {
            booze: ["3 oz Prosecco", "2 oz Aperol"],
            others: ["Splash of Soda Water"],
            garnishes: ["Orange Slice"]
        },
        steps: [
            "Fill a wine glass with ice.",
            "Add Aperol and Prosecco.",
            "Top with soda water.",
            "Garnish with an orange slice."
        ],
        notes: "A refreshing and slightly bitter cocktail with a bubbly finish."
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
        notes: "A sweet and tangy cocktail with a nutty almond flavor."
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
        notes: "A tart and sweet cocktail with a strong lemon flavor."
    },
];

const ModernCocktails = () => {
    return (
        <>
            <RecipeCardDisplay mainTitle="Modern Cocktails" recipes={modernCocktails} />
        </>
    );
};

export default ModernCocktails;
