import React from "react";
import RecipeCardDisplay from "../RecipeCardDisplay";

const classicCocktails = [
    {
        title: "Old Fashioned",
        ingredients: {
            booze: ["2 oz Whiskey"],
            syrups: ["0.25 oz Demerara Syrup"],
            bitters: ["3 dashes Angostura Bitters"],
            garnishes: ["Orange peel"]
        },
        steps: [
            "Stir all ingredients with ice until well chilled.",
            "Strain into a rocks glass with a large ice cube.",
            "Stir again.",
            "Garnish with an orange peel."
        ],
        notes: "A strong, slightly sweet, and aromatic cocktail with a hint of citrus."
    },
    {
        title: "Manhattan",
        ingredients: {
            booze: ["2 oz Rye Whiskey"],
            syrups: ["1 oz Sweet Vermouth"],
            bitters: ["2 dashes Angostura Bitters"],
            garnishes: ["Cherry"]
        },
        steps: [
            "Stir all ingredients with ice until well chilled.",
            "Strain into a chilled coupe glass.",
            "Garnish with a cherry."
        ],
        notes: "A rich and robust cocktail with a balance of sweetness and bitterness."
    },
    {
        title: "Martini",
        ingredients: {
            booze: ["2 oz Gin"],
            syrups: ["0.5 oz Dry Vermouth"],
            garnishes: ["Lemon twist"]
        },
        steps: [
            "Stir gin and vermouth with ice until well chilled.",
            "Strain into a chilled martini glass.",
            "Garnish with a lemon twist or olive."
        ],
        notes: "A crisp and clean cocktail with a botanical flavor from the gin."
    },
    {
        title: "Dirty Martini",
        ingredients: {
            booze: ["2 oz Gin", "0.25 oz Dry Vermouth"],
            others: ["1 oz Olive Brine"],
            garnishes: ["Olive Skewer"]
        },
        steps: [
            "Stir gin and vermouth with ice until well chilled.",
            "Strain into a chilled martini glass.",
            "Garnish with an olive skewer."
        ],
        notes: "A savory twist on the classic martini with a briny flavor from the olive brine."
    },
    {
        title: "Negroni",
        ingredients: {
            booze: ["1 oz Gin", "1 oz Sweet Vermouth", "1 oz Campari"],
            garnishes: ["Orange peel"]
        },
        steps: [
            "Stir all ingredients with ice until well chilled.",
            "Strain into a rocks glass over a large ice cube.",
            "Garnish with an orange peel."
        ],
        notes: "A bitter and sweet cocktail with a complex flavor profile."
    },
    {
        title: "Daiquiri",
        ingredients: {
            booze: ["2 oz White Rum"],
            syrups: ["1 oz Lime Juice", "0.75 oz Simple Syrup"]
        },
        steps: [
            "Shake all ingredients with ice until well chilled.",
            "Strain into a chilled coupe glass.",
            "No garnish."
        ],
        notes: "A refreshing and tart cocktail with a perfect balance of sweetness and acidity."
    },
    {
        title: "Whiskey Sour",
        ingredients: {
            booze: ["2 oz Bourbon"],
            syrups: ["0.75 oz Lemon Juice", "0.75 oz Simple Syrup"],
            others: ["Egg white"],
            garnishes: ["Cherry or Orange Slice"]
        },
        steps: [
            "Dry shake all ingredients (without ice) if using egg white.",
            "Add ice and shake again until chilled.",
            "Strain into a rocks glass over ice.",
            "Garnish with a cherry or orange slice."
        ],
        notes: "A smooth and frothy cocktail with a balance of sweet and sour flavors."
    },
    {
        title: "Margarita",
        ingredients: {
            booze: ["2 oz Tequila"],
            syrups: ["1 oz Lime Juice", "0.5 oz Cointreau"],
            garnishes: ["Salt rim", "Lime wheel"]
        },
        steps: [
            "Shake all ingredients with ice until chilled.",
            "Strain into a rocks glass over ice.",
            "Garnish with a lime wheel."
        ],
        notes: "A tangy and refreshing cocktail with a hint of sweetness and a salty finish."
    },
    {
        title: "Mojito",
        ingredients: {
            booze: ["2 oz White Rum"],
            syrups: ["1 oz Lime Juice", "0.75 oz Simple Syrup"],
            others: ["6-8 Mint Leaves", "Soda Water"],
            garnishes: ["Mint"]
        },
        steps: [
            "Muddle mint leaves and simple syrup in a glass.",
            "Add lime juice, rum, and ice, then stir.",
            "Top with soda water and garnish with mint."
        ],
        notes: "A light and refreshing cocktail with a minty and citrusy flavor."
    },
    {
        title: "Pina Colada",
        ingredients: {
            booze: ["2 oz White Rum"],
            syrups: ["3 oz Pineapple Juice", "1 oz Coconut Cream"],
            garnishes: ["Cherry", "Pineapple wedge"]
        },
        steps: [
            "Blend all ingredients with ice until smooth.",
            "Pour into a hurricane glass.",
            "Garnish with a cherry and pineapple wedge."
        ],
        notes: "A creamy and tropical cocktail with a sweet and fruity flavor."
    },
    {
        title: "Sazerac",
        ingredients: {
            booze: ["2 oz Rye Whiskey"],
            syrups: ["0.25 oz Simple Syrup"],
            bitters: ["3 Dashes Peychaud’s Bitters"],
            others: ["Absinthe rinse"],
            garnishes: ["Lemon twist"]
        },
        steps: [
            "Rinse a glass with absinthe and discard excess.",
            "Muddle sugar with bitters in a separate glass.",
            "Add whiskey, stir, then strain into the prepared glass.",
            "Garnish with a lemon twist."
        ],
        notes: "A strong and aromatic cocktail with a hint of anise from the absinthe."
    },
    {
        title: "French 75",
        ingredients: {
            booze: ["1 oz Gin"],
            syrups: ["0.5 oz Lemon Juice", "0.5 oz Simple Syrup"],
            others: ["Champagne"],
            garnishes: ["Lemon twist"]
        },
        steps: [
            "Shake gin, lemon juice, and simple syrup with ice.",
            "Strain into a flute glass.",
            "Top with Champagne and garnish with a lemon twist."
        ],
        notes: "A light and bubbly cocktail with a citrusy and slightly sweet flavor."
    },
    {
        title: "Caesar",
        ingredients: {
            booze: ["1.5 oz Vodka"],
            syrups: ["4 oz Tomato Juice", "1 oz Lime Juice"],
            others: ["1 dash Worcestershire Sauce", "1 dash Hot Sauce", "Celery Salt", "Black Pepper"],
            garnishes: ["Celery Stalk"]
        },
        steps: [
            "Combine all ingredients and stir.",
            "Pour into a glass filled with ice.",
            "Garnish with a celery stalk."
        ],
        notes: "A savory and spicy cocktail with a rich and tangy flavor."
    }
];

const Classics = () => {
    return (
        <>
            <RecipeCardDisplay mainTitle="Classic Cocktails" recipes={classicCocktails} />
        </>
    );
};

export default Classics;
