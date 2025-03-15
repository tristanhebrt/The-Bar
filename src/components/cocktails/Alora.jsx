import React from "react";
import RecipeCardDisplay from "../RecipeCardDisplay";

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
        ],
        notes: "A spicy and tangy cocktail with a refreshing lime finish.",
        flavor: "Spicy, Tangy, Refreshing"
    },
    {
        title: "Secret Rose",
        ingredients: {
            booze: ["2 oz Tequila", "0.5 oz Lillet"],
            syrups: ["0.75 oz Lemon Juice", "0.5 oz Raspberry Syrup"],
            others: ["Basil Leaves", "Rose Lemonade"],
            garnishes: ["1 Flower", "Basil Bunch"]
        },
        steps: [
            "Shake all ingredients with a basil leaf and ice until well chilled.",
            "Strain into a Collins glass.",
            "Top off with rose lemonade.",
            "Garnish with a basil bunch and a flower."
        ],
        notes: "A floral and fruity cocktail with a hint of basil.",
        flavor: "Floral, Fruity, Herbal"
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
            "Shake the prebatch, lime juice & banana syrup with ice until well chilled.",
            "Add mint to the bottom of a Collins glass.",
            "Strain into the glass, fill with cracked ice.",
            "Top off with crushed ice, cover with Angostura Bitters. ",
            "Garnish with banana chips."
        ],
        notes: "A tropical cocktail with a refreshing mint and banana flavor.",
        flavor: "Tropical, Minty, Banana"
    },
    {
        title: "Sunset Chaser",
        ingredients: {
            booze: ["1.5 oz Tequila", "0.5 oz Grand Marnier"],
            syrups: ["0.75 oz Lemon Juice", "0.75 oz Earl Grey Syrup", "1 oz Blood Orange Juice"],
            others: ["2 dashes Foamer", "Flower"],
            bitters: ["3-5 dashes Walnut Bitters"]
        },
        steps: [
            "Shake the prebatch, lemon juice, earl grey syrup, blood orange juice and foamer with ice until well chilled.",
            "Strain into a chilled Coupe glass.",
            "Garnish with walnut bitters and make a streak",
            "Add a flower to the center."
        ],
        notes: "A sophisticated cocktail with a blend of citrus and tea flavors.",
        flavor: "Citrus, Tea, Sophisticated"
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
        ],
        notes: "A refreshing cocktail with herbal thyme and cucumber notes.",
        flavor: "Herbal, Refreshing, Cucumber"
    },
    {
        title: "Bourbon Turnover",
        ingredients: {
            booze: ["1.5 oz Bourbon", "0.75 oz Calvados"],
            syrups: ["0.33 oz Cinnamon Syrup"],
            bitters: ["2 dashes Angostura Bitters"],
            garnishes: ["1 Apple Wheel"]
        },
        steps: [
            "Stir all ingredients with ice until well chilled.",
            "Strain into a rocks glass with a large ice cube.",
            "Garnish with an apple wheel."
        ],
        notes: "A warm and spicy cocktail with a hint of apple and cinnamon.",
        flavor: "Warm, Spicy, Apple"
    },
    {
        title: "Dreamer",
        ingredients: {
            booze: ["1.5 oz Pisco", "0.5 oz Vanilla Liqueur"],
            syrups: ["0.75 oz Lemon Juice", "0.5 oz Crush Syrup"],
            garnishes: ["1 Flower"]
        },
        steps: [
            "Shake the prebatch, lemon juice and crush syrup with ice until well chilled.",
            "Strain into a Coupe.",
            "Garnish with a flower."
        ],
        notes: "A light and floral cocktail with a citrusy finish.",
        flavor: "Light, Floral, Citrusy"
    },
    {
        title: "Love Note",
        ingredients: {
            booze: ["1.75 oz Gin", "0.5 oz Aperol"],
            syrups: ["1 oz Lemon Juice", "0.5 oz Simple Syrup", "0.5 oz Juice Blend"],
            garnishes: ["Love Note"]
        },
        steps: [
            "Shake all ingredients with ice.",
            "Strain into a Coupe.",
            "Garnish with a love note."
        ],
        notes: "A light and floral cocktail with a citrusy finish.",
        flavor: "Bittersweet, Floral, Citrusy"
    },
    {
        title: "Orchard Dream",
        ingredients: {
            booze: ["2 oz Gin"],
            syrups: ["0.75 oz Lime Juice", "1 oz Green Apple Juice", "0.75 oz Fennel Syrup"],
            others: ["Salt"],
            garnishes: ["Fennel Leaf"]
        },
        steps: [
            "Shake all ingredients with ice.",
            "Strain into coupe glass.",
            "Garnish with fennel leaf."
        ],
        notes: "A refreshing cocktail with a hint of fennel and green apple.",
        flavor: "Refreshing, Fennel, Green Apple"
    },
    {
        title: "The Joker",
        ingredients: {
            booze: ["2 oz Tequila (upcharge Mezcal)"],
            syrups: ["1 oz Maca Syrup", "0.75 oz Lime Juice", "1 oz Coconut Water"],
            others: ["Salt"],
            garnishes: []
        },
        steps: [
            "Shake all ingredients quickly with ice.",
            "Strain into glass over pebble ice."
        ],
        notes: "A unique cocktail with a blend of maca and coconut flavors.",
        flavor: "Unique, Maca, Coconut"
    },
    {
        title: "Sundown Showdown",
        ingredients: {
            booze: ["1.5 oz Bourbon"],
            syrups: ["0.75 oz Pineapple Juice", "0.25 oz Ginger Syrup", "0.25 oz Cinnamon Syrup", "0.5 oz Lemon Juice"],
            bitters: ["1 dash Angostura"],
            others: ["IPA"],
            garnishes: []
        },
        steps: [
            "Shake all ingredients except the beer with ice.",
            "Strain into a barrel glass.",
            "Top with beer and ice, then top with crushed ice."
        ],
        notes: "A bold cocktail with a mix of pineapple, ginger, and cinnamon flavors.",
        flavor: "Bold, Pineapple, Ginger, Cinnamon"
    },
    {
        title: "Moonlight",
        ingredients: {
            booze: ["2 oz Flor de Cana 12"],
            syrups: ["0.25 oz Spiced Syrup"],
            bitters: ["2 dashes Angostura"],
            garnishes: []
        },
        steps: [
            "Stir all ingredients with ice.",
            "Strain into glass."
        ],
        notes: "A refined cocktail with classic flavor pairings reimagined.",
        flavor: "Refined, Classic, Spiced"
    },
    {
        title: "Alora OF",
        ingredients: {
            booze: ["2 oz Woodford Bourbon"],
            syrups: ["0.25 oz Demerara Syrup"],
            bitters: ["4 dashes Angostura"],
            garnishes: []
        },
        steps: [
            "Stir all ingredients with ice.",
            "Strain into glass."
        ],
        notes: "A classic old fashioned with a rich and smooth flavor.",
        flavor: "Classic, Rich, Smooth"
    },
    {
        title: "Grapefruit Tequila Sour",
        ingredients: {
            booze: ["2 oz Tequila 1800"],
            syrups: ["0.5 oz Grapefruit Juice", "0.75 oz Lemon Juice", "0.75 oz Simple Syrup"],
            others: ["Egg White", "Angostura/Vanilla Mist"],
            garnishes: []
        },
        steps: [
            "Dry shake all ingredients without ice.",
            "Add ice and shake again.",
            "Strain into coupe glass.",
            "Mist with Angostura/Vanilla."
        ],
        notes: "A tangy and smooth cocktail with a hint of vanilla.",
        flavor: "Tangy, Smooth, Vanilla"
    },
    {
        title: "Cucumber Collins",
        ingredients: {
            booze: ["1.5 oz Beefeater", "0.5 oz St Germaine"],
            syrups: ["0.5 oz Simple Syrup", "1 oz Lemon Juice"],
            others: ["2 slices Cucumber"],
            garnishes: []
        },
        steps: [
            "Muddle cucumber slices.",
            "Shake all ingredients with ice.",
            "Strain into collins glass."
        ],
        notes: "A refreshing cocktail with a crisp cucumber flavor.",
        flavor: "Refreshing, Crisp, Cucumber"
    },
    {
        title: "Off-White Negroni",
        ingredients: {
            booze: ["1.5 oz Botanist", "0.5 oz Lillet", "0.75 oz White Vermouth"],
            bitters: ["1 full Botanical Citrus Bitters"],
            garnishes: ["Lemon Twist"]
        },
        steps: [
            "Stir all ingredients with ice.",
            "Strain into glass over large rock.",
            "Garnish with lemon twist."
        ],
        notes: "A sophisticated twist on the classic Negroni with citrus and tea notes.",
        flavor: "Sophisticated, Citrus, Tea"
    },
    {
        title: "Alora Spritz",
        ingredients: {
            booze: ["0.75 oz Aperol", "0.5 oz Peach Liquor"],
            syrups: ["0.75 oz Lemon Juice", "0.75 oz Grapefruit Juice", "0.25 oz Simple Syrup"],
            others: ["3 oz Prosecco"],
            garnishes: ["Frozen Peaches"]
        },
        steps: [
            "Shake all ingredients except prosecco with ice.",
            "Strain into glass.",
            "Top with prosecco.",
            "Garnish with frozen peaches."
        ],
        notes: "A light and bubbly cocktail with peach and citrus flavors.",
        flavor: "Light, Bubbly, Peach, Citrus"
    },
];

const Alora = () => {
    return (
        <RecipeCardDisplay mainTitle="Alora Cocktails" recipes={aloraCocktails}></RecipeCardDisplay>
    );
};

export default Alora;