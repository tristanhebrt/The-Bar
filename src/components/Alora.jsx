import React from "react";
import RecipeCardDisplay from "./RecipeCardDisplay";
import Quiz from "./Quiz";

const aloraCocktails = [
    {
        title: "Into the Fire",
        ingredients: {
            booze: ["2 oz Prebatch"],
            syrups: ["1 oz Lime Juice", "0.5 oz Agave Syrup"],
            garnishes: ["Spicy Rim", "Lime Wheel"]
        },
        steps: [
            "Shake all ingredients with ice until well chilled.",
            "Strain into a Rocks glass with cracked ice.",
            "Garnish with a lime wheel."
        ]
    },
    {
        title: "Secret Rose",
        ingredients: {
            booze: ["2 oz Prebatch"],
            syrups: ["0.75 oz Lemon Juice", "0.5 oz Raspberry Syrup"],
            others: ["Basil Leaves", "Rose Lemonade"],
            garnishes: ["1 Flower", "Basil Bunch"]
        },
        steps: [
            "Shake all ingredients with a basil leaf and ice until well chilled.",
            "Strain into a Collins glass.",
            "Top off with rose lemonade.",
            "Garnish with a basil bunch and a flower."
        ]
    },
    {
        title: "Boat Party",
        ingredients: {
            booze: ["2.25 oz Prebatch"],
            syrups: ["1 oz Lime Juice", "1 oz Banana Syrup"],
            others: ["Mint Leaves"],
            bitters: ["5 dashes Angostura Bitters"],
            garnishes: ["3 Banana Chips"]
        },
        steps: [
            "Shake all ingredients with ice until well chilled.",
            "Add mint to the bottom of a Collins glass.",
            "Strain into the glass.",
            "Add cracked ice.",
            "Top off with crushed ice.",
            "Cover with Angostura Bitters.",
            "Garnish with banana chips."
        ]
    },
    {
        title: "Sunset Chaser",
        ingredients: {
            booze: ["2 oz Prebatch"],
            syrups: ["0.75 oz Lemon Juice", "0.75 oz Earl Grey Syrup", "1 oz Blood Orange Juice"],
            others: ["2 dashes Foamer", "Flower"],
            bitters: ["3-5 dashes Walnut Bitters"]
        },
        steps: [
            "Shake all ingredients with ice until well chilled.",
            "Strain into a chilled Coupe glass.",
            "Garnish with a half circle of walnut bitters.",
            "Make a streak in the walnut bitters.",
            "Add a flower to the center."
        ]
    },
    {
        title: "Prime Thyme",
        ingredients: {
            booze: ["2 oz Gin"],
            syrups: ["0.75 oz Lime Juice", "0.5 oz Thyme Syrup"],
            others: ["Cucumber Tonic Soda"],
            garnishes: ["3 Thyme Sprigs"]
        },
        steps: [
            "Shake all ingredients with ice until well chilled.",
            "Strain into a Collins glass.",
            "Top with cucumber tonic soda.",
            "Garnish with a thyme sprig bunch."
        ]
    },
    {
        title: "Bourbon Turnover",
        ingredients: {
            booze: ["2.25 oz Prebatch"],
            syrups: ["0.33 oz Cinnamon Syrup"],
            bitters: ["2 dashes Angostura Bitters"],
            garnishes: ["1 Apple Wheel"]
        },
        steps: [
            "Stir all ingredients with ice until well chilled.",
            "Strain into a rocks glass with a large ice cube.",
            "Garnish with an apple wheel."
        ]
    },
    {
        title: "Dreamer",
        ingredients: {
            booze: ["2 oz Prebatch"],
            syrups: ["0.75 oz Lemon Juice", "0.5 oz Crush Syrup"],
            garnishes: ["1 Flower"]
        },
        steps: [
            "Shake all ingredients with ice until well chilled.",
            "Strain into a Coupe.",
            "Garnish with a flower."
        ]
    }
];

const Alora = () => {
    return (
        <>
            <RecipeCardDisplay mainTitle="Alora Cocktails" recipes={aloraCocktails} />
            <Quiz cocktails={aloraCocktails} />
        </>
    );
};

export default Alora;