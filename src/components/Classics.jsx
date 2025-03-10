import React from "react";
import RecipeCardDisplay from "./RecipeCardDisplay";

const classicCocktails = [
    {
        title: "Old Fashioned",
        content: [
            "2 oz Bourbon or Rye", 
            "0.25 oz demerara", 
            "2 dashes Angostura bitters", 
            "Orange twist"
        ]
    },
    {
        title: "Margarita",
        content: [
            "2 oz Tequila",
            "1 oz Lime juice",
            "0.75 oz Triple sec",
            "Salt rim"
        ]
    },
    {
        title: "Negroni",
        content: [
            "1 oz Gin",
            "1 oz Campari",
            "1 oz Sweet Vermouth",
            "Orange peel"
        ]
    },
    {
        title: "Daiquiri",
        content: [
            "2 oz White rum",
            "0.75 oz Lime juice",
            "0.75 oz Simple syrup"
        ]
    },
    {
        title: "Manhattan",
        content: [
            "2 oz Rye or Bourbon",
            "1 oz Sweet Vermouth",
            "2 dashes Angostura bitters",
            "Cherry garnish"
        ]
    },
    {
        title: "Martini",
        content: [
            "2.5 oz Gin or Vodka",
            "0.5 oz Dry Vermouth",
            "Lemon twist or Olive"
        ]
    },
    {
        title: "Whiskey Sour",
        content: [
            "2 oz Bourbon",
            "0.75 oz Lemon juice",
            "0.75 oz Simple syrup",
            "Egg white (optional)"
        ]
    },
    {
        title: "Mojito",
        content: [
            "2 oz White rum",
            "0.75 oz Lime juice",
            "0.75 oz Simple syrup",
            "Mint leaves",
            "Club soda"
        ]
    },
    {
        title: "Cosmopolitan",
        content: [
            "1.5 oz Vodka",
            "1 oz Cranberry juice",
            "0.75 oz Triple sec",
            "0.5 oz Lime juice"
        ]
    },
    {
        title: "Bloody Mary",
        content: [
            "2 oz Vodka",
            "4 oz Tomato juice",
            "0.5 oz Lemon juice",
            "Worcestershire sauce",
            "Hot sauce",
            "Celery salt"
        ]
    },
    {
        title: "Pina Colada",
        content: [
            "2 oz White rum",
            "3 oz Pineapple juice",
            "1 oz Coconut cream",
            "Blended with ice"
        ]
    },
    {
        title: "French 75",
        content: [
            "1 oz Gin",
            "0.5 oz Lemon juice",
            "0.5 oz Simple syrup",
            "Champagne"
        ]
    },
    {
        title: "Sazerac",
        content: [
            "2 oz Rye whiskey",
            "1 sugar cube",
            "2 dashes Peychaud’s bitters",
            "Absinthe rinse",
            "Lemon peel"
        ]
    },
    {
        title: "Mai Tai",
        content: [
            "1 oz White rum",
            "1 oz Dark rum",
            "0.5 oz Lime juice",
            "0.5 oz Orange curaçao",
            "0.25 oz Orgeat syrup"
        ]
    }
];

const Classics = () => {
    return <RecipeCardDisplay mainTitle="Classic Cocktails" recipes={classicCocktails} />;
};

export default Classics;
