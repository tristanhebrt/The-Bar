import React from "react";
import RecipeCardDisplay from "./RecipeCardDisplay";

const classicCocktails = [
    {
        title: "Old Fashioned",
        content: [
            "2 oz Whiskey",
            "0.25 oz Demerara Syrup",
            "3 dashes Angostura Bitters",
            "Orange peel"
        ],
        steps: [
            "Stir all ingredients with ice until well chilled.",
            "Strain into a rocks glass with a large ice cube.",
            "Stir again.",
            "Garnish with an orange peel."
        ]
    },
    {
        title: "Manhattan",
        content: [
            "2 oz Rye Whiskey",
            "1 oz Sweet Vermouth",
            "2 dashes Angostura Bitters",
            "Cherry"
        ],
        steps: [
            "Stir all ingredients with ice until well chilled.",
            "Strain into a chilled coupe glass.",
            "Garnish with a cherry."
        ]
    },
    {
        title: "Martini",
        content: [
            "2.5 oz Gin",
            "0.5 oz Dry Vermouth",
            "Lemon twist or olive"
        ],
        steps: [
            "Stir gin and vermouth with ice until well chilled.",
            "Strain into a chilled martini glass.",
            "Garnish with a lemon twist or olive."
        ]
    },
    {
        title: "Negroni",
        content: [
            "1 oz Gin",
            "1 oz Sweet Vermouth",
            "1 oz Campari",
            "Orange peel"
        ],
        steps: [
            "Stir all ingredients with ice until well chilled.",
            "Strain into a rocks glass over a large ice cube.",
            "Garnish with an orange peel."
        ]
    },
    {
        title: "Daiquiri",
        content: [
            "2 oz White Rum",
            "1 oz Fresh Lime Juice",
            "0.75 oz Simple Syrup"
        ],
        steps: [
            "Shake all ingredients with ice until well chilled.",
            "Strain into a chilled coupe glass.",
            "No garnish."
        ]
    },
    {
        title: "Whiskey Sour",
        content: [
            "2 oz Bourbon",
            "0.75 oz Fresh Lemon Juice",
            "0.75 oz Simple Syrup",
            "Egg white"
        ],
        steps: [
            "Dry shake all ingredients (without ice) if using egg white.",
            "Add ice and shake again until chilled.",
            "Strain into a rocks glass over ice.",
            "Garnish with a cherry or orange slice."
        ]
    },
    {
        title: "Margarita",
        content: [
            "2 oz Tequila",
            "1 oz Fresh Lime Juice",
            "0.75 oz Cointreau or Triple Sec",
            "Salt rim"
        ],
        steps: [
            "Shake all ingredients with ice until chilled.",
            "Strain into a rocks glass over ice.",
            "Garnish with a lime wheel."
        ]
    },
    {
        title: "Mojito",
        content: [
            "2 oz White Rum",
            "1 oz Fresh Lime Juice",
            "0.75 oz Simple Syrup",
            "6-8 Mint Leaves",
            "Soda Water"
        ],
        steps: [
            "Muddle mint leaves and simple syrup in a glass.",
            "Add lime juice, rum, and ice, then stir.",
            "Top with soda water and garnish with mint."
        ]
    },
    {
        title: "Pina Colada",
        content: [
            "2 oz White Rum",
            "3 oz Pineapple Juice",
            "1 oz Coconut Cream",
            "Blended with ice"
        ],
        steps: [
            "Blend all ingredients with ice until smooth.",
            "Pour into a hurricane glass.",
            "Garnish with a cherry and pineapple wedge."
        ]
    },
    {
        title: "Sazerac",
        content: [
            "2 oz Rye Whiskey",
            "1 Sugar Cube",
            "3 dashes Peychaud’s Bitters",
            "Absinthe rinse",
            "Lemon twist"
        ],
        steps: [
            "Rinse a glass with absinthe and discard excess.",
            "Muddle sugar with bitters in a separate glass.",
            "Add whiskey, stir, then strain into the prepared glass.",
            "Garnish with a lemon twist."
        ]
    },
    {
        title: "French 75",
        content: [
            "1 oz Gin",
            "0.5 oz Lemon Juice",
            "0.5 oz Simple Syrup",
            "Champagne"
        ],
        steps: [
            "Shake gin, lemon juice, and simple syrup with ice.",
            "Strain into a flute glass.",
            "Top with Champagne and garnish with a lemon twist."
        ]
    },
    {
        title: "Bloody Mary",
        content: [
            "2 oz Vodka",
            "4 oz Tomato Juice",
            "0.5 oz Fresh Lemon Juice",
            "1 dash Worcestershire Sauce",
            "1 dash Hot Sauce",
            "Celery Salt",
            "Black Pepper",
            "Celery Stalk"
        ],
        steps: [
            "Combine all ingredients and stir.",
            "Pour into a glass filled with ice.",
            "Garnish with a celery stalk."
        ]
    }
];

const Classics = () => {
    return <RecipeCardDisplay mainTitle="Classic Cocktails" recipes={classicCocktails} />;
};

export default Classics;
