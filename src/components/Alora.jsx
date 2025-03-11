import React from "react";
import RecipeCardDisplay from "./RecipeCardDisplay";

const aloraCocktails = [
    {
        title: "Into the Fire",
        content: [
            "2 oz Prebatch",
            "1 oz Lime Juice",
            "0.5 oz Agave Syrup",
            "Spicy Rim"
        ],
        steps: [
            "Shake all ingredients with ice until well chilled.",
            "Strain into a Rocks glass with cracked ice.",
            "Garnish with a lime wheel."
        ]
    },
    {
        title: "Secret Rosee",
        content: [
            "2 oz Prebatch",
            "0.75 oz Lemon Juice",
            "0.5 oz Raspberry Syrup",
            "Basil Leaves",
            "Rose Lemonade",
            "1 Flower"
        ],
        steps: [
            "Shake all ingredients with a basil leaf and ice until well chilled.",
            "Strain into a Collins glass.",
            "Garnish with a basil bunch and a flower."
        ]
    },
    {
        title: "Boat Party",
        content: [
            "2.25 oz Prebatch",
            "1 oz Lime Juice",
            "1 oz Banana Syrup",
            "Mint Leaves",
            "3 Banana Chips",
            "5 Dashes Angostura Bitters",
        ],
        steps: [
            "Shake all ingredients with ice until well chilled.",
            "Add mint to the bottom of a Collins glass.",
            "Strain into the glass.",
            "Add cracked ice.",
            "Cover with Angostura Bitters.",
            "Garnish with banana chips."
        ]
    },
    {
        title: "Sunset Chaser",
        content: [
            "2 oz Prebatch",
            "0.75 oz Lemon Juice",
            "0.75 oz Earl Grey Syrup",
            "1 oz Blood Orange Juice",
            "2 Dashes Foamer",
            "5 Dashes Walnut Bitters"
        ],
        steps: [
            "Shake all ingredients with ice until well chilled.",
            "Strain into a chilled Coupe glass.",
            "Garnish with a half circle of walnut bitters.",
            "Make a streak in the walnut bitters."
        ]
    },
    {
        title: "Prime Thyme",
        content: [
            "2 oz Dry Gin",
            "0.75 oz Fresh Lime Juice",
            "0.5 oz Thyme Syrup",
            "Cucumber Tonic Soda",
            "1 Thyme Sprig"
        ],
        steps: [
            "Shake all ingredients with ice until well chilled.",
            "Strain into a Collins glass.",
            "Top with cucumber tonic soda.",
            "Garnish with a thyme sprig."
        ]
    },
    {
        title: "Bourbon Tunover",
        content: [
            "2.25 oz Prebatch",
            "0.33 oz Cinnamon Syrup",
            "1 Apple Wheel"
        ],
        steps: [
            "Stir all ingredients with ice until well chilled.",
            "Strain into a rocks glass with a large ice cube.",
            "Stir again.",
            "Garnish with an apple wheel."
        ]
    },
    {
        title: "Dreamer",
        content: [
            "2 oz Prebatch",
            "0.75 oz Fresh Lemon Juice",
            "0.5 oz Crush Syrup",
            "1 Flower"
        ],
        steps: [
            "Shake all ingredients with ice until well chilled.",
            "Strain into a Coupe.",
            "Garnish with a flower."
        ]
    },
    {
        title: "Espresso Martini",
        content: [
            "1.5 oz Vodka",
            "0.5 oz Coffee Liquor",
            "1.5 oz Esspresso",
            "0.25 oz Demerara Syrup",
            "3 Coffee Beans"
        ],
        steps: [
            "Shake all ingredients with ice until well chilled.",
            "Strain into a Coupe.",
            "Garnish with the coffee beans."
        ]
    },
];

const Alora = () => {
    return <RecipeCardDisplay mainTitle="Alora Cocktails" recipes={aloraCocktails} />;
};

export default Alora;
