import React from "react";
import RecipeCardDisplay from "./RecipeCardDisplay";
import Quiz from './Quiz';

const classicCocktails = [
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
        ]
    },
    {
        title: "Barrel-aged Negroni",
        ingredients: {
            booze: ["1 oz Gin", "1 oz Sweet Vermouth", "1 oz Campari"],
            garnishes: ["Orange Peel"]
        },
        steps: [
            "Combine ingredients in a barrel.",
            "Age for a few weeks (typically around 4-6 weeks).",
            "Stir with ice and strain into a glass.",
            "Garnish with an orange peel."
        ]
    },
    {
        title: "Benton’s Old Fashioned",
        ingredients: {
            booze: ["2 oz Bourbon"],
            syrups: ["0.25 oz Benton’s Bacon Infused Maple Syrup"],
            bitters: ["2 dashes Angostura Bitters"],
            garnishes: ["Orange Peel"]
        },
        steps: [
            "Stir bourbon, syrup, and bitters with ice.",
            "Strain into a glass with a large ice cube.",
            "Garnish with an orange peel."
        ]
    },
    {
        title: "Bramble",
        ingredients: {
            booze: ["2 oz Gin"],
            syrups: ["0.75 oz Blackberry Liqueur", "0.5 oz Lemon Juice", "0.5 oz Simple Syrup"],
            garnishes: ["Blackberries"]
        },
        steps: [
            "Shake gin, blackberry liqueur, lemon juice, and simple syrup with ice.",
            "Strain into a glass filled with crushed ice.",
            "Garnish with blackberries."
        ]
    },
    {
        title: "Breakfast Martini",
        ingredients: {
            booze: ["1.5 oz Gin"],
            syrups: ["0.5 oz Orange Marmalade", "0.5 oz Lemon Juice"],
            garnishes: ["Lemon Twist"]
        },
        steps: [
            "Shake gin, marmalade, and lemon juice with ice.",
            "Strain into a chilled martini glass.",
            "Garnish with a lemon twist."
        ]
    },
    {
        title: "Chartreuse Swizzle",
        ingredients: {
            booze: ["1.5 oz Green Chartreuse", "1 oz Lime Juice"],
            syrups: ["0.5 oz Simple Syrup"],
            others: ["Soda Water"],
            garnishes: ["Mint Sprig"]
        },
        steps: [
            "Fill a glass with crushed ice.",
            "Add green Chartreuse, lime juice, and simple syrup.",
            "Swizzle to combine.",
            "Top with soda water and garnish with a mint sprig."
        ]
    },
    {
        title: "Earl Grey MarTEAni",
        ingredients: {
            booze: ["1.5 oz Gin"],
            syrups: ["0.5 oz Earl Grey Tea Syrup", "0.5 oz Lemon Juice"],
            garnishes: ["Lemon Twist"]
        },
        steps: [
            "Shake gin, Earl Grey tea syrup, and lemon juice with ice.",
            "Strain into a chilled martini glass.",
            "Garnish with a lemon twist."
        ]
    },
    {
        title: "Gin Basil Smash",
        ingredients: {
            booze: ["2 oz Gin"],
            syrups: ["0.75 oz Lemon Juice", "0.5 oz Simple Syrup"],
            others: ["5-6 Basil Leaves"],
            garnishes: ["Basil Leaf"]
        },
        steps: [
            "Muddle basil leaves with lemon juice and simple syrup in a shaker.",
            "Add gin and ice, then shake well.",
            "Strain into a rocks glass with ice.",
            "Garnish with a basil leaf."
        ]
    },
    {
        title: "Gin Gin Mule",
        ingredients: {
            booze: ["2 oz Gin"],
            syrups: ["0.75 oz Lime Juice"],
            others: ["Ginger Beer"],
            garnishes: ["Mint Sprig"]
        },
        steps: [
            "Muddle mint leaves in a shaker.",
            "Add gin, lime juice, and ice, then shake.",
            "Strain into a mule mug with ice.",
            "Top with ginger beer and garnish with a mint sprig."
        ]
    },
    {
        title: "Gold Rush",
        ingredients: {
            booze: ["2 oz Bourbon"],
            syrups: ["0.75 oz Honey Syrup", "0.75 oz Lemon Juice"],
            garnishes: ["Lemon Twist"]
        },
        steps: [
            "Shake bourbon, honey syrup, and lemon juice with ice.",
            "Strain into a rocks glass over ice.",
            "Garnish with a lemon twist."
        ]
    },
    {
        title: "Gunshop Fizz",
        ingredients: {
            booze: ["2 oz Bourbon"],
            syrups: ["0.75 oz Lemon Juice", "0.25 oz Simple Syrup"],
            others: ["Soda Water"],
            garnishes: ["Lemon Slice"]
        },
        steps: [
            "Shake bourbon, lemon juice, and simple syrup with ice.",
            "Strain into a tall glass with ice.",
            "Top with soda water and garnish with a lemon slice."
        ]
    },
    {
        title: "Jasmine",
        ingredients: {
            booze: ["1.5 oz Gin", "0.5 oz Grand Marnier"],
            syrups: ["0.5 oz Lemon Juice"],
            others: ["0.25 oz Campari"],
            garnishes: ["Lemon Twist"]
        },
        steps: [
            "Shake all ingredients with ice.",
            "Strain into a chilled coupe glass.",
            "Garnish with a lemon twist."
        ]
    },
    {
        title: "Oaxaca Old Fashioned",
        ingredients: {
            booze: ["0.75 oz Mezcal", "0.75 oz Reposado Tequila"],
            syrups: ["0.25 oz Agave Syrup"],
            bitters: ["2 dashes Angostura Bitters"],
            garnishes: ["Orange Peel"]
        },
        steps: [
            "Stir mezcal, tequila, agave syrup, and bitters with ice.",
            "Strain into a glass with a large ice cube.",
            "Garnish with an orange peel."
        ]
    },
    {
        title: "Old Cuban",
        ingredients: {
            booze: ["1.5 oz Aged Rum"],
            syrups: ["0.5 oz Simple Syrup"],
            others: ["3 dashes Angostura Bitters"],
            garnishes: ["Mint Sprig"]
        },
        steps: [
            "Stir all ingredients with ice.",
            "Strain into a coupe glass.",
            "Garnish with a mint sprig."
        ]
    },
    {
        title: "Penicillin",
        ingredients: {
            booze: ["2 oz Blended Scotch", "0.25 oz Islay Scotch"],
            syrups: ["0.75 oz Honey Syrup", "0.75 oz Lemon Juice"],
            garnishes: ["Candied Ginger"]
        },
        steps: [
            "Shake blended Scotch, honey syrup, and lemon juice with ice.",
            "Strain into a rocks glass over ice.",
            "Float Islay Scotch on top and garnish with candied ginger."
        ]
    },
    {
        title: "Red Hook",
        ingredients: {
            booze: ["2 oz Rye Whiskey"],
            syrups: ["0.5 oz Maraschino Liqueur"],
            bitters: ["2 dashes Angostura Bitters"],
            garnishes: ["Cherry"]
        },
        steps: [
            "Stir rye whiskey, maraschino liqueur, and bitters with ice.",
            "Strain into a chilled coupe glass.",
            "Garnish with a cherry."
        ]
    },
    {
        title: "Seelbach Cocktail",
        ingredients: {
            booze: ["1 oz Bourbon", "1 oz Cointreau"],
            syrups: ["0.25 oz Angostura Bitters", "0.25 oz Peychaud's Bitters"],
            others: ["Champagne"],
            garnishes: ["Lemon Twist"]
        },
        steps: [
            "Stir bourbon, Cointreau, and bitters with ice.",
            "Strain into a flute glass.",
            "Top with champagne and garnish with a lemon twist."
        ]
    },
    {
        title: "Tommy’s Margarita",
        ingredients: {
            booze: ["2 oz Tequila"],
            syrups: ["0.5 oz Agave Syrup", "1 oz Lime Juice"],
            garnishes: ["Lime Wheel"]
        },
        steps: [
            "Shake tequila, agave syrup, and lime juice with ice.",
            "Strain into a rocks glass over ice.",
            "Garnish with a lime wheel."
        ]
    },
    {
        title: "Trident",
        ingredients: {
            booze: ["1.5 oz Rye Whiskey", "0.75 oz Rum"],
            syrups: ["0.25 oz Cinnamon Syrup", "0.25 oz Maraschino Liqueur"],
            garnishes: ["Cinnamon Stick"]
        },
        steps: [
            "Shake all ingredients with ice.",
            "Strain into a chilled coupe glass.",
            "Garnish with a cinnamon stick."
        ]
    },
    {
        title: "Trinidad Sour",
        ingredients: {
            booze: ["1 oz Angostura Bitters"],
            syrups: ["0.75 oz Orgeat Syrup", "0.25 oz Lemon Juice"],
            garnishes: ["Lemon Peel"]
        },
        steps: [
            "Shake all ingredients with ice.",
            "Strain into a chilled coupe glass.",
            "Garnish with a lemon peel."
        ]
    },
    {
        title: "White Negroni",
        ingredients: {
            booze: ["1 oz Gin", "1 oz Suze"],
            syrups: ["1 oz Lillet Blanc"],
            garnishes: ["Lemon Peel"]
        },
        steps: [
            "Stir all ingredients with ice.",
            "Strain into a rocks glass with ice.",
            "Garnish with a lemon peel."
        ]
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
        ]
    },
    {
        title: "Ancient Mariner",
        ingredients: {
            booze: ["2 oz Rum", "0.5 oz Orange Liqueur"],
            syrups: ["0.75 oz Lime Juice", "0.25 oz Cinnamon Syrup"],
            garnishes: ["Cinnamon Stick"]
        },
        steps: [
            "Shake all ingredients with ice.",
            "Strain into a rocks glass with ice.",
            "Garnish with a cinnamon stick."
        ]
    },
    {
        title: "The Art Of Choke",
        ingredients: {
            booze: ["1.5 oz Cynar"],
            syrups: ["0.75 oz Lemon Juice"],
            others: ["Soda Water"],
            garnishes: ["Lemon Wheel"]
        },
        steps: [
            "Shake cynar and lemon juice with ice.",
            "Strain into a rocks glass over ice.",
            "Top with soda water and garnish with a lemon wheel."
        ]
    },
    {
        title: "Barbacoa",
        ingredients: {
            booze: ["2 oz Mezcal"],
            syrups: ["0.75 oz Lime Juice", "0.5 oz Agave Syrup"],
            garnishes: ["Lime Wheel"]
        },
        steps: [
            "Shake mezcal, lime juice, and agave syrup with ice.",
            "Strain into a rocks glass over ice.",
            "Garnish with a lime wheel."
        ]
    },
    {
        title: "Basil Gimlet",
        ingredients: {
            booze: ["2 oz Gin"],
            syrups: ["0.75 oz Lime Juice", "0.5 oz Simple Syrup"],
            others: ["6-8 Basil Leaves"],
            garnishes: ["Basil Leaf"]
        },
        steps: [
            "Muddle basil leaves with lime juice and simple syrup in a shaker.",
            "Add gin and ice, then shake well.",
            "Strain into a coupe glass.",
            "Garnish with a basil leaf."
        ]
    },
    {
        title: "Beuser and Angus Special",
        ingredients: {
            booze: ["2 oz Rye Whiskey"],
            syrups: ["0.75 oz Lemon Juice", "0.5 oz Maple Syrup"],
            bitters: ["2 dashes Angostura Bitters"],
            garnishes: ["Lemon Twist"]
        },
        steps: [
            "Shake whiskey, lemon juice, maple syrup, and bitters with ice.",
            "Strain into a rocks glass with ice.",
            "Garnish with a lemon twist."
        ]
    },
    {
        title: "Bitter Giuseppe",
        ingredients: {
            booze: ["1.5 oz Amaro", "1 oz Sweet Vermouth"],
            bitters: ["1 dash Orange Bitters"],
            garnishes: ["Orange Peel"]
        },
        steps: [
            "Stir all ingredients with ice.",
            "Strain into a chilled coupe glass.",
            "Garnish with an orange peel."
        ]
    },
    {
        title: "Boss Colada",
        ingredients: {
            booze: ["2 oz Rum"],
            syrups: ["1 oz Coconut Cream", "2 oz Pineapple Juice"],
            garnishes: ["Pineapple Wedge"]
        },
        steps: [
            "Blend rum, coconut cream, and pineapple juice with ice.",
            "Pour into a hurricane glass.",
            "Garnish with a pineapple wedge."
        ]
    },
    {
        title: "Bourbon Renewal",
        ingredients: {
            booze: ["2 oz Bourbon"],
            syrups: ["0.5 oz Lemon Juice", "0.25 oz Simple Syrup"],
            bitters: ["2 dashes Angostura Bitters"],
            garnishes: ["Lemon Twist"]
        },
        steps: [
            "Shake bourbon, lemon juice, simple syrup, and bitters with ice.",
            "Strain into a coupe glass.",
            "Garnish with a lemon twist."
        ]
    },
    {
        title: "Brancolada",
        ingredients: {
            booze: ["2 oz Rum", "0.5 oz Branca Menta"],
            syrups: ["1 oz Coconut Cream", "2 oz Pineapple Juice"],
            garnishes: ["Pineapple Wedge"]
        },
        steps: [
            "Blend rum, Branca Menta, coconut cream, and pineapple juice with ice.",
            "Pour into a hurricane glass.",
            "Garnish with a pineapple wedge."
        ]
    },
    {
        title: "Bywater",
        ingredients: {
            booze: ["2 oz Rye Whiskey"],
            syrups: ["0.5 oz Orange Liqueur"],
            bitters: ["2 dashes Peychaud's Bitters"],
            garnishes: ["Lemon Peel"]
        },
        steps: [
            "Stir all ingredients with ice.",
            "Strain into a chilled coupe glass.",
            "Garnish with a lemon peel."
        ]
    },
    {
        title: "Carondelet",
        ingredients: {
            booze: ["2 oz Rye Whiskey"],
            syrups: ["0.5 oz Sweet Vermouth", "0.5 oz Amaro"],
            bitters: ["2 dashes Angostura Bitters"],
            garnishes: ["Orange Peel"]
        },
        steps: [
            "Stir all ingredients with ice.",
            "Strain into a chilled coupe glass.",
            "Garnish with an orange peel."
        ]
    },
    {
        title: "CIA",
        ingredients: {
            booze: ["2 oz Gin"],
            syrups: ["0.5 oz Lime Juice", "0.5 oz Simple Syrup"],
            others: ["0.25 oz Green Chartreuse"],
            garnishes: ["Lime Wheel"]
        },
        steps: [
            "Shake gin, lime juice, simple syrup, and Green Chartreuse with ice.",
            "Strain into a rocks glass with ice.",
            "Garnish with a lime wheel."
        ]
    },
    {
        title: "Conference",
        ingredients: {
            booze: ["1.5 oz Rye Whiskey"],
            syrups: ["0.75 oz Lemon Juice", "0.25 oz Honey Syrup"],
            bitters: ["2 dashes Angostura Bitters"],
            garnishes: ["Lemon Twist"]
        },
        steps: [
            "Shake rye whiskey, lemon juice, honey syrup, and bitters with ice.",
            "Strain into a coupe glass.",
            "Garnish with a lemon twist."
        ]
    },
    {
        title: "Corpse Reviver Number Blue",
        ingredients: {
            booze: ["1 oz Gin", "0.5 oz Blue Curacao", "0.5 oz Lillet Blanc"],
            syrups: ["0.25 oz Lemon Juice"],
            garnishes: ["Lemon Peel"]
        },
        steps: [
            "Shake all ingredients with ice.",
            "Strain into a chilled coupe glass.",
            "Garnish with a lemon peel."
        ]
    },
    {
        title: "Darkside",
        ingredients: {
            booze: ["2 oz Bourbon", "0.75 oz Blackberries"],
            syrups: ["0.5 oz Lime Juice", "0.25 oz Simple Syrup"],
            bitters: ["2 dashes Angostura Bitters"],
            garnishes: ["Blackberries"]
        },
        steps: [
            "Muddle blackberries with lime juice and simple syrup.",
            "Add bourbon and bitters, then shake with ice.",
            "Strain into a rocks glass with ice.",
            "Garnish with blackberries."
        ]
    },
    {
        title: "Death Flip",
        ingredients: {
            booze: ["2 oz Bourbon"],
            syrups: ["0.75 oz Lemon Juice", "0.5 oz Maple Syrup"],
            others: ["1 Egg White"],
            garnishes: ["Cinnamon Dust"]
        },
        steps: [
            "Shake bourbon, lemon juice, maple syrup, and egg white without ice.",
            "Add ice and shake again.",
            "Strain into a coupe glass.",
            "Garnish with cinnamon dust."
        ]
    },
    {
        title: "Division Bell",
        ingredients: {
            booze: ["2 oz Rye Whiskey"],
            syrups: ["0.5 oz Lemon Juice"],
            bitters: ["2 dashes Angostura Bitters"],
            garnishes: ["Lemon Peel"]
        },
        steps: [
            "Shake rye whiskey, lemon juice, and bitters with ice.",
            "Strain into a chilled coupe glass.",
            "Garnish with a lemon peel."
        ]
    },
    {
        title: "Eastside",
        ingredients: {
            booze: ["2 oz Gin"],
            syrups: ["0.75 oz Lime Juice"],
            others: ["5-6 Cucumber Slices", "Soda Water"],
            garnishes: ["Cucumber Slice"]
        },
        steps: [
            "Muddle cucumber slices with lime juice in a shaker.",
            "Add gin and ice, then shake well.",
            "Strain into a rocks glass over ice.",
            "Top with soda water and garnish with a cucumber slice."
        ]
    },
    {
        title: "Elder Fashioned",
        ingredients: {
            booze: ["2 oz Bourbon"],
            syrups: ["0.25 oz Elderflower Liqueur"],
            bitters: ["2 dashes Angostura Bitters"],
            garnishes: ["Orange Peel"]
        },
        steps: [
            "Stir bourbon, elderflower liqueur, and bitters with ice.",
            "Strain into a glass with a large ice cube.",
            "Garnish with an orange peel."
        ]
    },
    {
        title: "The Ellison",
        ingredients: {
            booze: ["2 oz Rye Whiskey"],
            syrups: ["0.5 oz Lemon Juice", "0.25 oz Honey Syrup"],
            bitters: ["2 dashes Angostura Bitters"],
            garnishes: ["Lemon Twist"]
        },
        steps: [
            "Shake rye whiskey, lemon juice, honey syrup, and bitters with ice.",
            "Strain into a coupe glass.",
            "Garnish with a lemon twist."
        ]
    },
    {
        title: "Final Ward",
        ingredients: {
            booze: ["1 oz Rye Whiskey", "1 oz Chartreuse", "1 oz Maraschino Liqueur"],
            syrups: ["0.75 oz Lemon Juice"],
            garnishes: ["Maraschino Cherry"]
        },
        steps: [
            "Shake rye whiskey, Chartreuse, maraschino liqueur, and lemon juice with ice.",
            "Strain into a chilled coupe glass.",
            "Garnish with a maraschino cherry."
        ]
    },
    {
        title: "Gin Blossom",
        ingredients: {
            booze: ["2 oz Gin"],
            syrups: ["0.75 oz Lemon Juice", "0.5 oz Honey Syrup"],
            others: ["2 dashes Orange Bitters"],
            garnishes: ["Lemon Twist"]
        },
        steps: [
            "Shake gin, lemon juice, honey syrup, and orange bitters with ice.",
            "Strain into a chilled coupe glass.",
            "Garnish with a lemon twist."
        ]
    },
    {
        title: "Ginger Rogers",
        ingredients: {
            booze: ["1.5 oz Gin"],
            syrups: ["0.5 oz Lime Juice", "0.5 oz Ginger Syrup"],
            others: ["Club Soda"],
            garnishes: ["Lime Wheel"]
        },
        steps: [
            "Shake gin, lime juice, and ginger syrup with ice.",
            "Strain into a rocks glass filled with ice.",
            "Top with club soda and garnish with a lime wheel."
        ]
    },
    {
        title: "Gordon’s Cup",
        ingredients: {
            booze: ["2 oz Gin"],
            syrups: ["0.75 oz Lime Juice"],
            others: ["5-6 Mint Leaves", "Club Soda"],
            garnishes: ["Mint Sprig"]
        },
        steps: [
            "Muddle mint leaves with lime juice in a shaker.",
            "Add gin and ice, then shake well.",
            "Strain into a rocks glass filled with ice.",
            "Top with club soda and garnish with a mint sprig."
        ]
    },
    {
        title: "Greenpoint",
        ingredients: {
            booze: ["2 oz Rye Whiskey", "0.5 oz Yellow Chartreuse"],
            syrups: ["0.5 oz Sweet Vermouth"],
            bitters: ["2 dashes Angostura Bitters"],
            garnishes: ["Orange Peel"]
        },
        steps: [
            "Stir rye whiskey, yellow chartreuse, sweet vermouth, and bitters with ice.",
            "Strain into a chilled coupe glass.",
            "Garnish with an orange peel."
        ]
    },
    {
        title: "Hard Sell",
        ingredients: {
            booze: ["2 oz Bourbon"],
            syrups: ["0.75 oz Lemon Juice", "0.5 oz Honey Syrup"],
            others: ["2 dashes Angostura Bitters"],
            garnishes: ["Lemon Twist"]
        },
        steps: [
            "Shake bourbon, lemon juice, honey syrup, and bitters with ice.",
            "Strain into a rocks glass with ice.",
            "Garnish with a lemon twist."
        ]
    },
    {
        title: "Hard Start",
        ingredients: {
            booze: ["1.5 oz Bourbon"],
            syrups: ["0.75 oz Lemon Juice", "0.25 oz Maple Syrup"],
            bitters: ["2 dashes Angostura Bitters"],
            garnishes: ["Lemon Peel"]
        },
        steps: [
            "Shake bourbon, lemon juice, maple syrup, and bitters with ice.",
            "Strain into a rocks glass with ice.",
            "Garnish with a lemon peel."
        ]
    },
    {
        title: "Jamaican Firefly",
        ingredients: {
            booze: ["1.5 oz Rum"],
            syrups: ["0.75 oz Lime Juice", "0.5 oz Ginger Syrup"],
            others: ["2 dashes Angostura Bitters"],
            garnishes: ["Lime Wheel"]
        },
        steps: [
            "Shake rum, lime juice, ginger syrup, and bitters with ice.",
            "Strain into a rocks glass filled with ice.",
            "Garnish with a lime wheel."
        ]
    },
    {
        title: "Joy Division",
        ingredients: {
            booze: ["2 oz Vodka", "0.5 oz St. Germain"],
            syrups: ["0.75 oz Lemon Juice"],
            others: ["2 dashes Orange Bitters"],
            garnishes: ["Lemon Twist"]
        },
        steps: [
            "Shake vodka, St. Germain, lemon juice, and orange bitters with ice.",
            "Strain into a chilled coupe glass.",
            "Garnish with a lemon twist."
        ]
    },
    {
        title: "Juliet & Romeo",
        ingredients: {
            booze: ["1.5 oz Gin", "0.5 oz Campari"],
            syrups: ["0.75 oz Lime Juice"],
            others: ["2 dashes Orange Bitters"],
            garnishes: ["Lime Wheel"]
        },
        steps: [
            "Shake gin, campari, lime juice, and bitters with ice.",
            "Strain into a chilled coupe glass.",
            "Garnish with a lime wheel."
        ]
    },
    {
        title: "Kentucky Buck",
        ingredients: {
            booze: ["2 oz Bourbon"],
            syrups: ["0.75 oz Lemon Juice", "0.5 oz Ginger Syrup"],
            others: ["2 dashes Angostura Bitters", "Soda Water"],
            garnishes: ["Lemon Wheel"]
        },
        steps: [
            "Shake bourbon, lemon juice, ginger syrup, and bitters with ice.",
            "Strain into a rocks glass with ice.",
            "Top with soda water and garnish with a lemon wheel."
        ]
    },
    {
        title: "La Perla",
        ingredients: {
            booze: ["1.5 oz Tequila", "0.5 oz Mezcal"],
            syrups: ["0.75 oz Lime Juice"],
            garnishes: ["Lime Wheel"]
        },
        steps: [
            "Shake tequila, mezcal, and lime juice with ice.",
            "Strain into a rocks glass with ice.",
            "Garnish with a lime wheel."
        ]
    },
    {
        title: "Laphroaig Project",
        ingredients: {
            booze: ["1.5 oz Laphroaig Scotch"],
            syrups: ["0.5 oz Sweet Vermouth", "0.25 oz Simple Syrup"],
            garnishes: ["Orange Peel"]
        },
        steps: [
            "Stir all ingredients with ice.",
            "Strain into a chilled coupe glass.",
            "Garnish with an orange peel."
        ]
    },
    {
        title: "Left Hand",
        ingredients: {
            booze: ["2 oz Rye Whiskey", "0.5 oz Campari"],
            syrups: ["0.5 oz Sweet Vermouth"],
            bitters: ["2 dashes Angostura Bitters"],
            garnishes: ["Cherry"]
        },
        steps: [
            "Stir rye whiskey, campari, sweet vermouth, and bitters with ice.",
            "Strain into a chilled coupe glass.",
            "Garnish with a cherry."
        ]
    },
    {
        title: "Little Italy",
        ingredients: {
            booze: ["2 oz Rye Whiskey", "1 oz Sweet Vermouth"],
            syrups: ["0.5 oz Fernet Branca"],
            garnishes: ["Orange Twist"]
        },
        steps: [
            "Stir rye whiskey, sweet vermouth, and Fernet Branca with ice.",
            "Strain into a chilled coupe glass.",
            "Garnish with an orange twist."
        ]
    },
    {
        title: "Medicina Latina",
        ingredients: {
            booze: ["1.5 oz Tequila", "0.75 oz Aperol"],
            syrups: ["0.5 oz Lime Juice", "0.25 oz Agave Syrup"],
            garnishes: ["Lime Wheel"]
        },
        steps: [
            "Shake tequila, Aperol, lime juice, and agave syrup with ice.",
            "Strain into a chilled coupe glass.",
            "Garnish with a lime wheel."
        ]
    },
    {
        title: "Moon Cocktail",
        ingredients: {
            booze: ["2 oz Gin", "0.5 oz Lemon Juice"],
            syrups: ["0.5 oz Simple Syrup"],
            others: ["Soda Water"],
            garnishes: ["Lemon Twist"]
        },
        steps: [
            "Shake gin, lemon juice, and simple syrup with ice.",
            "Strain into a rocks glass with ice.",
            "Top with soda water and garnish with a lemon twist."
        ]
    },
    {
        title: "Nuclear Daiquiri",
        ingredients: {
            booze: ["2 oz Rum"],
            syrups: ["0.75 oz Lime Juice", "0.5 oz Simple Syrup"],
            others: ["0.25 oz Absinthe"],
            garnishes: ["Lime Wheel"]
        },
        steps: [
            "Shake rum, lime juice, simple syrup, and absinthe with ice.",
            "Strain into a chilled coupe glass.",
            "Garnish with a lime wheel."
        ]
    },
    {
        title: "Paddington",
        ingredients: {
            booze: ["2 oz Gin"],
            syrups: ["0.75 oz Lemon Juice", "0.5 oz Orange Marmalade Syrup"],
            bitters: ["2 dashes Angostura Bitters"],
            garnishes: ["Orange Twist"]
        },
        steps: [
            "Shake gin, lemon juice, orange marmalade syrup, and bitters with ice.",
            "Strain into a chilled coupe glass.",
            "Garnish with an orange twist."
        ]
    },
    {
        title: "Porn Star Martini",
        ingredients: {
            booze: ["1.5 oz Vodka", "0.5 oz Passionfruit Liqueur"],
            syrups: ["0.75 oz Passionfruit Purée", "0.5 oz Vanilla Syrup"],
            others: ["Champagne or Prosecco"],
            garnishes: ["Passionfruit Half"]
        },
        steps: [
            "Shake vodka, passionfruit liqueur, passionfruit purée, and vanilla syrup with ice.",
            "Strain into a coupe glass.",
            "Serve with a side shot of champagne or prosecco and garnish with a passionfruit half."
        ]
    },
    {
        title: "Ranglum",
        ingredients: {
            booze: ["2 oz Gin"],
            syrups: ["0.5 oz Lime Juice", "0.25 oz Simple Syrup"],
            others: ["1 oz Ginger Beer"],
            garnishes: ["Lime Wheel"]
        },
        steps: [
            "Shake gin, lime juice, and simple syrup with ice.",
            "Strain into a rocks glass with ice.",
            "Top with ginger beer and garnish with a lime wheel."
        ]
    },
    {
        title: "Revolver",
        ingredients: {
            booze: ["2 oz Bourbon"],
            syrups: ["0.5 oz Coffee Liqueur"],
            bitters: ["2 dashes Angostura Bitters"],
            garnishes: ["Orange Peel"]
        },
        steps: [
            "Stir bourbon, coffee liqueur, and bitters with ice.",
            "Strain into a chilled coupe glass.",
            "Garnish with an orange peel."
        ]
    },
    {
        title: "Russian Spring Punch",
        ingredients: {
            booze: ["1.5 oz Vodka"],
            syrups: ["0.75 oz Lemon Juice", "0.25 oz Sugar Syrup"],
            others: ["1 oz Crème de Cassis", "Soda Water"],
            garnishes: ["Lemon Twist"]
        },
        steps: [
            "Shake vodka, lemon juice, sugar syrup, and crème de cassis with ice.",
            "Strain into a tall glass with ice.",
            "Top with soda water and garnish with a lemon twist."
        ]
    },
    {
        title: "Siesta",
        ingredients: {
            booze: ["1.5 oz Tequila"],
            syrups: ["0.5 oz Lime Juice", "0.5 oz Aperol"],
            bitters: ["2 dashes Angostura Bitters"],
            garnishes: ["Lime Wheel"]
        },
        steps: [
            "Shake tequila, lime juice, Aperol, and bitters with ice.",
            "Strain into a rocks glass with ice.",
            "Garnish with a lime wheel."
        ]
    },
    {
        title: "Silver Lining",
        ingredients: {
            booze: ["2 oz Gin"],
            syrups: ["0.75 oz Lemon Juice", "0.25 oz Simple Syrup"],
            others: ["1 oz Club Soda"],
            garnishes: ["Lemon Twist"]
        },
        steps: [
            "Shake gin, lemon juice, and simple syrup with ice.",
            "Strain into a chilled coupe glass.",
            "Top with club soda and garnish with a lemon twist."
        ]
    },
    {
        title: "The Slope",
        ingredients: {
            booze: ["2 oz Bourbon"],
            syrups: ["0.75 oz Lemon Juice", "0.5 oz Maple Syrup"],
            bitters: ["2 dashes Angostura Bitters"],
            garnishes: ["Lemon Peel"]
        },
        steps: [
            "Shake bourbon, lemon juice, maple syrup, and bitters with ice.",
            "Strain into a rocks glass with ice.",
            "Garnish with a lemon peel."
        ]
    },
    {
        title: "St. Germain Cocktail",
        ingredients: {
            booze: ["1.5 oz Gin"],
            syrups: ["0.5 oz St. Germain Elderflower Liqueur"],
            others: ["0.5 oz Lime Juice", "Champagne"],
            garnishes: ["Lime Twist"]
        },
        steps: [
            "Shake gin, St. Germain, and lime juice with ice.",
            "Strain into a chilled coupe glass.",
            "Top with champagne and garnish with a lime twist."
        ]
    },
    {
        title: "Staggerac",
        ingredients: {
            booze: ["2 oz Rye Whiskey"],
            syrups: ["0.25 oz Absinthe"],
            bitters: ["3 dashes Peychaud's Bitters"],
            garnishes: ["Lemon Peel"]
        },
        steps: [
            "Rinse a glass with absinthe and discard excess.",
            "Stir rye whiskey and bitters with ice.",
            "Strain into the prepared glass.",
            "Garnish with a lemon peel."
        ]
    },
    {
        title: "Tantris Sidecar",
        ingredients: {
            booze: ["2 oz Cognac"],
            syrups: ["1 oz Lemon Juice", "0.5 oz Triple Sec"],
            garnishes: ["Orange Peel"]
        },
        steps: [
            "Shake cognac, lemon juice, and triple sec with ice.",
            "Strain into a chilled coupe glass.",
            "Garnish with an orange peel."
        ]
    },
    {
        title: "Twinkle",
        ingredients: {
            booze: ["1.5 oz Gin"],
            syrups: ["0.5 oz Lemon Juice", "0.25 oz Simple Syrup"],
            others: ["Champagne"],
            garnishes: ["Lemon Twist"]
        },
        steps: [
            "Shake gin, lemon juice, and simple syrup with ice.",
            "Strain into a flute glass.",
            "Top with champagne and garnish with a lemon twist."
        ]
    },
    {
        title: "Weeski",
        ingredients: {
            booze: ["2 oz Scotch Whisky"],
            syrups: ["0.75 oz Lemon Juice", "0.5 oz Honey Syrup"],
            bitters: ["2 dashes Angostura Bitters"],
            garnishes: ["Lemon Peel"]
        },
        steps: [
            "Shake scotch, lemon juice, honey syrup, and bitters with ice.",
            "Strain into a chilled coupe glass.",
            "Garnish with a lemon peel."
        ]
    },
    {
        title: "Wibble",
        ingredients: {
            booze: ["2 oz Gin"],
            syrups: ["0.75 oz Lemon Juice", "0.5 oz Simple Syrup"],
            others: ["1 oz Grenadine"],
            garnishes: ["Lemon Twist"]
        },
        steps: [
            "Shake gin, lemon juice, simple syrup, and grenadine with ice.",
            "Strain into a chilled coupe glass.",
            "Garnish with a lemon twist."
        ]
    },
    {
        title: "Wildest Redhead",
        ingredients: {
            booze: ["1.5 oz Bourbon"],
            syrups: ["0.5 oz Cherry Heering Liqueur"],
            bitters: ["2 dashes Angostura Bitters"],
            garnishes: ["Luxardo Cherry"]
        },
        steps: [
            "Stir bourbon, cherry Heering, and bitters with ice.",
            "Strain into a chilled rocks glass.",
            "Garnish with a Luxardo cherry."
        ]
    },
    {
        title: "The Criterium",
        ingredients: {
            booze: ["2 oz Gin"],
            syrups: ["0.5 oz Lemon Juice", "0.25 oz Simple Syrup"],
            bitters: ["2 dashes Angostura Bitters"],
            garnishes: ["Lemon Twist"]
        },
        steps: [
            "Shake gin, lemon juice, simple syrup, and bitters with ice.",
            "Strain into a chilled coupe glass.",
            "Garnish with a lemon twist."
        ]
    },
    {
        title: "Eeyore’s Requiem",
        ingredients: {
            booze: ["1.5 oz Gin", "0.5 oz Creme de Violette"],
            syrups: ["0.25 oz Lemon Juice"],
            bitters: ["2 dashes Angostura Bitters"],
            garnishes: ["Lemon Twist"]
        },
        steps: [
            "Shake gin, creme de violette, lemon juice, and bitters with ice.",
            "Strain into a chilled coupe glass.",
            "Garnish with a lemon twist."
        ]
    },
    {
        title: "Fernando",
        ingredients: {
            booze: ["2 oz Tequila"],
            syrups: ["0.5 oz Lime Juice", "0.5 oz Orange Juice"],
            others: ["0.25 oz Agave Syrup"],
            garnishes: ["Lime Wheel"]
        },
        steps: [
            "Shake tequila, lime juice, orange juice, and agave syrup with ice.",
            "Strain into a chilled coupe glass.",
            "Garnish with a lime wheel."
        ]
    },
    {
        title: "French Pearl",
        ingredients: {
            booze: ["1.5 oz Gin"],
            syrups: ["0.5 oz Absinthe", "0.75 oz Lemon Juice"],
            bitters: ["2 dashes Peychaud's Bitters"],
            garnishes: ["Lemon Twist"]
        },
        steps: [
            "Shake gin, absinthe, lemon juice, and bitters with ice.",
            "Strain into a chilled coupe glass.",
            "Garnish with a lemon twist."
        ]
    },
    {
        title: "Kill-Devil",
        ingredients: {
            booze: ["2 oz Rum"],
            syrups: ["0.75 oz Lime Juice", "0.5 oz Honey Syrup"],
            others: ["Dash of Angostura Bitters"],
            garnishes: ["Lime Wedge"]
        },
        steps: [
            "Shake rum, lime juice, honey syrup, and bitters with ice.",
            "Strain into a rocks glass with ice.",
            "Garnish with a lime wedge."
        ]
    },
    {
        title: "La Guepe Verte",
        ingredients: {
            booze: ["2 oz Absinthe"],
            syrups: ["0.5 oz Lime Juice"],
            bitters: ["1 dash Peychaud's Bitters"],
            garnishes: ["Lime Wheel"]
        },
        steps: [
            "Shake absinthe, lime juice, and bitters with ice.",
            "Strain into a chilled coupe glass.",
            "Garnish with a lime wheel."
        ]
    },
    {
        title: "Mr. Brown",
        ingredients: {
            booze: ["1.5 oz Bourbon", "1 oz Coffee Liqueur"],
            syrups: ["0.25 oz Simple Syrup"],
            bitters: ["2 dashes Angostura Bitters"],
            garnishes: ["Orange Peel"]
        },
        steps: [
            "Stir bourbon, coffee liqueur, simple syrup, and bitters with ice.",
            "Strain into a chilled rocks glass.",
            "Garnish with an orange peel."
        ]
    },
    {
        title: "Remember the Alimony",
        ingredients: {
            booze: ["2 oz Rye Whiskey"],
            syrups: ["0.5 oz Lemon Juice"],
            bitters: ["2 dashes Angostura Bitters"],
            garnishes: ["Lemon Twist"]
        },
        steps: [
            "Shake rye whiskey, lemon juice, and bitters with ice.",
            "Strain into a chilled coupe glass.",
            "Garnish with a lemon twist."
        ]
    },
    {
        title: "Salt and Ash",
        ingredients: {
            booze: ["1.5 oz Mezcal"],
            syrups: ["0.5 oz Lime Juice"],
            others: ["0.25 oz Agave Syrup"],
            garnishes: ["Lime Wheel"]
        },
        steps: [
            "Shake mezcal, lime juice, and agave syrup with ice.",
            "Strain into a chilled coupe glass.",
            "Garnish with a lime wheel."
        ]
    },
    {
        title: "Seven-Spice Sour",
        ingredients: {
            booze: ["2 oz Bourbon"],
            syrups: ["0.75 oz Lemon Juice", "0.5 oz Simple Syrup"],
            others: ["Pinch of Seven-Spice Powder"],
            garnishes: ["Lemon Peel"]
        },
        steps: [
            "Shake bourbon, lemon juice, simple syrup, and seven-spice powder with ice.",
            "Strain into a rocks glass.",
            "Garnish with a lemon peel."
        ]
    },
    {
        title: "Star and Garter",
        ingredients: {
            booze: ["2 oz Gin"],
            syrups: ["0.5 oz Lime Juice", "0.5 oz Simple Syrup"],
            bitters: ["2 dashes Angostura Bitters"],
            garnishes: ["Lime Twist"]
        },
        steps: [
            "Shake gin, lime juice, simple syrup, and bitters with ice.",
            "Strain into a chilled coupe glass.",
            "Garnish with a lime twist."
        ]
    },
    {
        title: "Apple Manhattan",
        ingredients: {
            booze: ["2 oz Rye Whiskey"],
            syrups: ["0.75 oz Apple Brandy"],
            bitters: ["2 dashes Angostura Bitters"],
            garnishes: ["Apple Slice"]
        },
        steps: [
            "Stir rye whiskey, apple brandy, and bitters with ice.",
            "Strain into a chilled coupe glass.",
            "Garnish with an apple slice."
        ]
    },
    {
        title: "Añejo Highball",
        ingredients: {
            booze: ["2 oz Añejo Tequila"],
            syrups: ["0.5 oz Lime Juice"],
            others: ["Top with Soda Water"],
            garnishes: ["Lime Wedge"]
        },
        steps: [
            "Build Añejo tequila and lime juice in a tall glass with ice.",
            "Top with soda water.",
            "Garnish with a lime wedge."
        ]
    },
    {
        title: "Cable Car",
        ingredients: {
            booze: ["2 oz Rum"],
            syrups: ["0.75 oz Lime Juice", "0.5 oz Orange Curacao"],
            others: ["1 dash Angostura Bitters"],
            garnishes: ["Orange Peel"]
        },
        steps: [
            "Shake rum, lime juice, orange curacao, and bitters with ice.",
            "Strain into a chilled coupe glass.",
            "Garnish with an orange peel."
        ]
    },
    {
        title: "Combustible Edison",
        ingredients: {
            booze: ["2 oz Bourbon"],
            syrups: ["0.75 oz Sweet Vermouth"],
            bitters: ["2 dashes Angostura Bitters"],
            garnishes: ["Orange Peel"]
        },
        steps: [
            "Stir bourbon, sweet vermouth, and bitters with ice.",
            "Strain into a chilled coupe glass.",
            "Garnish with an orange peel."
        ]
    },
    {
        title: "The Debonair",
        ingredients: {
            booze: ["1.5 oz Gin"],
            syrups: ["0.5 oz Dry Vermouth"],
            others: ["0.25 oz Fernet Branca"],
            garnishes: ["Lemon Twist"]
        },
        steps: [
            "Stir gin, dry vermouth, and Fernet Branca with ice.",
            "Strain into a chilled coupe glass.",
            "Garnish with a lemon twist."
        ]
    },
    {
        title: "Drink Without A Name",
        ingredients: {
            booze: ["2 oz Rye Whiskey"],
            syrups: ["0.75 oz Lemon Juice", "0.25 oz Simple Syrup"],
            garnishes: ["Lemon Peel"]
        },
        steps: [
            "Shake rye whiskey, lemon juice, and simple syrup with ice.",
            "Strain into a chilled coupe glass.",
            "Garnish with a lemon peel."
        ]
    },
    {
        title: "The Fitzgerald",
        ingredients: {
            booze: ["2 oz Gin"],
            syrups: ["0.5 oz Lemon Juice", "0.25 oz Simple Syrup"],
            bitters: ["2 dashes Angostura Bitters"],
            garnishes: ["Lemon Twist"]
        },
        steps: [
            "Shake gin, lemon juice, simple syrup, and bitters with ice.",
            "Strain into a chilled coupe glass.",
            "Garnish with a lemon twist."
        ]
    },
    {
        title: "Flying Kangaroo",
        ingredients: {
            booze: ["1.5 oz Vodka"],
            syrups: ["0.75 oz Lemon Juice", "0.25 oz Triple Sec"],
            garnishes: ["Lemon Wheel"]
        },
        steps: [
            "Shake vodka, lemon juice, and triple sec with ice.",
            "Strain into a chilled coupe glass.",
            "Garnish with a lemon wheel."
        ]
    },
    {
        title: "Juniperotivo",
        ingredients: {
            booze: ["2 oz Gin"],
            syrups: ["0.5 oz Lime Juice", "0.25 oz Simple Syrup"],
            others: ["1 oz Vermouth Bianco"],
            garnishes: ["Lime Wheel"]
        },
        steps: [
            "Shake gin, lime juice, simple syrup, and vermouth bianco with ice.",
            "Strain into a chilled coupe glass.",
            "Garnish with a lime wheel."
        ]
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
        ]
    },
    {
        title: "Perfect Pear",
        ingredients: {
            booze: ["2 oz Gin"],
            syrups: ["0.75 oz Pear Liqueur"],
            syrups: ["0.5 oz Lemon Juice"],
            garnishes: ["Pear Slice"]
        },
        steps: [
            "Shake gin, pear liqueur, and lemon juice with ice.",
            "Strain into a chilled coupe glass.",
            "Garnish with a pear slice."
        ]
    },
    {
        title: "Ritz Cocktail",
        ingredients: {
            booze: ["2 oz Gin"],
            syrups: ["0.5 oz Lemon Juice", "0.25 oz Simple Syrup"],
            garnishes: ["Lemon Peel"]
        },
        steps: [
            "Shake gin, lemon juice, and simple syrup with ice.",
            "Strain into a chilled coupe glass.",
            "Garnish with a lemon peel."
        ]
    },
    {
        title: "Swimming Pool",
        ingredients: {
            booze: ["2 oz Rum"],
            syrups: ["0.5 oz Blue Curacao"],
            others: ["1 oz Coconut Cream", "1 oz Pineapple Juice"],
            garnishes: ["Pineapple Wedge"]
        },
        steps: [
            "Shake rum, blue curacao, coconut cream, and pineapple juice with ice.",
            "Strain into a tall glass with ice.",
            "Garnish with a pineapple wedge."
        ]
    },
    {
        title: "Treacle",
        ingredients: {
            booze: ["2 oz Rye Whiskey"],
            syrups: ["0.5 oz Black Treacle Syrup"],
            bitters: ["2 dashes Angostura Bitters"],
            garnishes: ["Orange Peel"]
        },
        steps: [
            "Stir rye whiskey, black treacle syrup, and bitters with ice.",
            "Strain into a chilled rocks glass.",
            "Garnish with an orange peel."
        ]
    },
    {
        title: "Whiskey Smash",
        ingredients: {
            booze: ["2 oz Bourbon"],
            syrups: ["0.75 oz Lemon Juice"],
            others: ["1 oz Simple Syrup", "Mint Leaves"],
            garnishes: ["Mint Sprig"]
        },
        steps: [
            "Shake bourbon, lemon juice, simple syrup, and mint leaves with ice.",
            "Strain into a rocks glass filled with crushed ice.",
            "Garnish with a mint sprig."
        ]
    },
    {
        title: "Vesper Martini",
        ingredients: {
            booze: ["3 oz Gin", "1 oz Vodka", "0.5 oz Lillet Blanc"],
            garnishes: ["Lemon Twist"]
        },
        steps: [
            "Stir all ingredients with ice until well chilled.",
            "Strain into a chilled martini glass.",
            "Garnish with a lemon twist."
        ]
    },
    {
        title: "Corpse Reviver No. 2",
        ingredients: {
            booze: ["0.75 oz Gin", "0.75 oz Cointreau", "0.75 oz Lillet Blanc"],
            syrups: ["0.75 oz Lemon Juice"],
            others: ["Absinthe Rinse"],
            garnishes: ["Cherry"]
        },
        steps: [
            "Rinse a glass with absinthe and discard excess.",
            "Shake remaining ingredients with ice until well chilled.",
            "Strain into the prepared glass.",
            "Garnish with a cherry."
        ]
    },
    {
        title: "Jungle Bird",
        ingredients: {
            booze: ["1.5 oz Dark Rum", "0.75 oz Campari"],
            syrups: ["1.5 oz Pineapple Juice", "0.5 oz Lime Juice", "0.5 oz Simple Syrup"],
            garnishes: ["Pineapple Wedge"]
        },
        steps: [
            "Shake all ingredients with ice until well chilled.",
            "Strain into a rocks glass over ice.",
            "Garnish with a pineapple wedge."
        ]
    },
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
    },
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
            booze: ["2 oz Gin"],
            syrups: ["0.5 oz Dry Vermouth"],
            garnishes: ["Lemon twist"]
        },
        steps: [
            "Stir gin and vermouth with ice until well chilled.",
            "Strain into a chilled martini glass.",
            "Garnish with a lemon twist or olive."
        ]
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
            "Garnish with a lemon twist or olive."
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
    },
    {
        title: "French 75",
        ingredients: {
            booze: ["1 oz Gin"],
            syrups: ["0.5 Lemon Juice", "0.5 oz Simple Syrup"],
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
        ]
    },
];

const ModernClassics = () => {
    return (
        <>
            <RecipeCardDisplay mainTitle="Modern Classics" recipes={classicCocktails} />
            <Quiz cocktails={classicCocktails} />
        </>
    );
};

export default ModernClassics;
