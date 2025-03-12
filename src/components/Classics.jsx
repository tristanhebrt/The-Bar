import React from "react";
import RecipeCardDisplay from "./RecipeCardDisplay";
import Quiz from './Quiz'

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
        ]
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
        ]
    },
    {
        title: "Martini",
        ingredients: {
            booze: ["2.5 oz Gin"],
            syrups: ["0.5 oz Dry Vermouth"],
            garnishes: ["Lemon twist or olive"]
        },
        steps: [
            "Stir gin and vermouth with ice until well chilled.",
            "Strain into a chilled martini glass.",
            "Garnish with a lemon twist or olive."
        ]
    },
    {
        title: "Negroni",
        ingredients: {
            booze: ["1 oz Gin"],
            syrups: ["1 oz Sweet Vermouth"],
            bitters: ["1 oz Campari"],
            garnishes: ["Orange peel"]
        },
        steps: [
            "Stir all ingredients with ice until well chilled.",
            "Strain into a rocks glass over a large ice cube.",
            "Garnish with an orange peel."
        ]
    },
    {
        title: "Daiquiri",
        ingredients: {
            booze: ["2 oz White Rum"],
            syrups: ["1 oz Fresh Lime Juice", "0.75 oz Simple Syrup"]
        },
        steps: [
            "Shake all ingredients with ice until well chilled.",
            "Strain into a chilled coupe glass.",
            "No garnish."
        ]
    },
    {
        title: "Whiskey Sour",
        ingredients: {
            booze: ["2 oz Bourbon"],
            syrups: ["0.75 oz Fresh Lemon Juice", "0.75 oz Simple Syrup"],
            others: ["Egg white"],
            garnishes: ["Cherry or orange slice"]
        },
        steps: [
            "Dry shake all ingredients (without ice) if using egg white.",
            "Add ice and shake again until chilled.",
            "Strain into a rocks glass over ice.",
            "Garnish with a cherry or orange slice."
        ]
    },
    {
        title: "Margarita",
        ingredients: {
            booze: ["2 oz Tequila"],
            syrups: ["1 oz Fresh Lime Juice", "0.75 oz Cointreau or Triple Sec"],
            garnishes: ["Salt rim", "Lime wheel"]
        },
        steps: [
            "Shake all ingredients with ice until chilled.",
            "Strain into a rocks glass over ice.",
            "Garnish with a lime wheel."
        ]
    },
    {
        title: "Mojito",
        ingredients: {
            booze: ["2 oz White Rum"],
            syrups: ["1 oz Fresh Lime Juice", "0.75 oz Simple Syrup"],
            others: ["6-8 Mint Leaves", "Soda Water"],
            garnishes: ["Mint"]
        },
        steps: [
            "Muddle mint leaves and simple syrup in a glass.",
            "Add lime juice, rum, and ice, then stir.",
            "Top with soda water and garnish with mint."
        ]
    },
    {
        title: "Pina Colada",
        ingredients: {
            booze: ["2 oz White Rum"],
            syrups: ["3 oz Pineapple Juice", "1 oz Coconut Cream"],
            others: ["Blended with ice"],
            garnishes: ["Cherry", "Pineapple wedge"]
        },
        steps: [
            "Blend all ingredients with ice until smooth.",
            "Pour into a hurricane glass.",
            "Garnish with a cherry and pineapple wedge."
        ]
    },
    {
        title: "Sazerac",
        ingredients: {
            booze: ["2 oz Rye Whiskey"],
            syrups: ["1 Sugar Cube"],
            bitters: ["3 dashes Peychaud’s Bitters"],
            others: ["Absinthe rinse"],
            garnishes: ["Lemon twist"]
        },
        steps: [
            "Rinse a glass with absinthe and discard excess.",
            "Muddle sugar with bitters in a separate glass.",
            "Add whiskey, stir, then strain into the prepared glass.",
            "Garnish with a lemon twist."
        ]
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
        ]
    },
    {
        title: "Bloody Mary",
        ingredients: {
            booze: ["2 oz Vodka"],
            syrups: ["4 oz Tomato Juice", "0.5 oz Fresh Lemon Juice"],
            others: ["1 dash Worcestershire Sauce", "1 dash Hot Sauce", "Celery Salt", "Black Pepper"],
            garnishes: ["Celery Stalk"]
        },
        steps: [
            "Combine all ingredients and stir.",
            "Pour into a glass filled with ice.",
            "Garnish with a celery stalk."
        ]
    }
];

const Classics = () => {
    return (
        <>
            <RecipeCardDisplay mainTitle="Classic Cocktails" recipes={classicCocktails} />
            <Quiz cocktails={classicCocktails} />
        </>
    );
};

export default Classics;
