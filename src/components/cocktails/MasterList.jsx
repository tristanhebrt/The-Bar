import React from "react";
import RecipeCardDisplay from "../RecipeCardDisplay";


// Random cocktails


const randomCocktails = [
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
            booze: ["2 oz Bourbon Whiskey"],
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
            booze: ["2 oz Bourbon Whiskey"],
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
            booze: ["2 oz Bourbon Whiskey"],
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
            booze: ["1 oz Bourbon Whiskey", "1 oz Cointreau"],
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
            booze: ["2 oz Bourbon Whiskey"],
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
            booze: ["2 oz Bourbon Whiskey", "0.75 oz Blackberries"],
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
            booze: ["2 oz Bourbon Whiskey"],
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
            booze: ["2 oz Bourbon Whiskey"],
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
            booze: ["2 oz Bourbon Whiskey"],
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
            booze: ["1.5 oz Bourbon Whiskey"],
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
            booze: ["2 oz Bourbon Whiskey"],
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
            booze: ["1.5 oz Laphroaig Scotch Whiskey"],
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
            booze: ["2 oz Bourbon Whiskey"],
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
            booze: ["2 oz Bourbon Whiskey"],
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
            booze: ["1.5 oz Bourbon Whiskey"],
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
            booze: ["1.5 oz Bourbon Whiskey", "1 oz Coffee Liqueur"],
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
            booze: ["2 oz Bourbon Whiskey"],
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
            booze: ["2 oz Bourbon Whiskey"],
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
            booze: ["2 oz Bourbon Whiskey"],
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


// Modern Cocktails


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


// Alora Cocktails


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
            booze: ["1.5 oz Bourbon Whiskey", "0.75 oz Calvados"],
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
            booze: ["1.5 oz Bourbon Whiskey"],
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
            booze: ["2 oz Bourbon Whiskey"],
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
            booze: ["1.5 oz Botanist", "0.5 oz Lillet", "0.75 oz White Vermouth (peach & apricot tea infused)"],
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


// Classic Cocktails


const classicCocktails = [
    {
        title: "Aperol Spritz",
        ingredients: {
            booze: ["1.5 oz Aperol", "3 oz Prosecco"],
            others: ["2 oz Soda Water"],
            garnishes: ["Orange Half Wheel"]
        },
        steps: [
            "Build all ingredients in a white wine glass over ice.",
            "Top with soda water.",
            "Garnish with orange half wheel."
        ],
        notes: "Refreshing Italian aperitivo with bitter-sweet balance.",
        flavor: "Bitter, Sweet, Refreshing"
    },
    {
        title: "Aviation",
        ingredients: {
            booze: ["2 oz Gin"],
            syrups: ["0.5 oz Luxardo Maraschino", "0.75 oz Lemon Juice", "0.25 oz Simple Syrup"],
            others: ["1 tsp Giffard Violette"],
            garnishes: ["Cherry"]
        },
        steps: [
            "Shake all ingredients with ice until chilled.",
            "Double strain into chilled Nick and Nora glass.",
            "Garnish with cherry."
        ],
        notes: "Floral and sophisticated pre-prohibition classic.",
        flavor: "Floral, Sophisticated, Citrusy"
    },
    {
        title: "Boulevardier",
        ingredients: {
            booze: ["1 oz Bourbon Whiskey", "1 oz Campari", "1 oz Dolin Sweet Vermouth"],
            garnishes: ["Orange Zest"]
        },
        steps: [
            "Stir ingredients with ice for 30 seconds.",
            "Strain over large ice cube in rocks glass.",
            "Express orange zest over drink."
        ],
        notes: "Whiskey-based twist on the Negroni.",
        flavor: "Bitter, Whiskey, Aromatic"
    },
    {
        title: "Brooklyn",
        ingredients: {
            booze: ["2 oz Overproof Rye", "0.38 oz Dry Vermouth", "0.38 oz Sweet Vermouth"],
            syrups: ["0.25 oz Luxardo Maraschino"],
            bitters: ["1 dash Angostura"],
            garnishes: ["Lemon Twist"]
        },
        steps: [
            "Stir all ingredients with ice until well chilled.",
            "Strain into coupe glass.",
            "Express lemon twist over drink."
        ],
        notes: "Complex and spirit-forward Manhattan variation.",
        flavor: "Complex, Spirit-Forward, Aromatic"
    },
    {
        title: "Caipirinha",
        ingredients: {
            booze: ["2 oz Cachaça"],
            others: ["6 Lime Wedges"],
            syrups: ["0.75 oz Simple Syrup"],
            garnishes: ["Lime Wedge"]
        },
        steps: [
            "Muddle lime wedges with simple syrup in shaker.",
            "Add cachaça and ice, shake vigorously.",
            "Dump contents into rocks glass."
        ],
        notes: "Brazilian national cocktail with fresh lime.",
        flavor: "Fresh, Lime, Sweet"
    },
    {
        title: "Corpse Reviver #2",
        ingredients: {
            booze: ["0.75 oz Gin", "0.75 oz Cointreau", "0.75 oz Lillet Blanc"],
            syrups: ["0.75 oz Lemon Juice"],
            others: ["Absinthe Rinse"],
            garnishes: ["Lemon Twist"]
        },
        steps: [
            "Rinse coupe glass with absinthe and discard excess.",
            "Shake remaining ingredients with ice.",
            "Double strain into prepared glass."
        ],
        notes: "Citrus-forward cocktail with herbal complexity.",
        flavor: "Citrus, Herbal, Complex"
    },
    {
        title: "Cosmopolitan",
        ingredients: {
            booze: ["1.5 oz Vodka", "0.5 oz Cointreau"],
            syrups: ["1 oz Cranberry Juice", "0.5 oz Lime Juice"],
            garnishes: ["Lime Wheel"]
        },
        steps: [
            "Shake all ingredients with ice until chilled.",
            "Double strain into chilled coupe.",
            "Garnish with lime wheel."
        ],
        notes: "Tart and fruity 90s classic.",
        flavor: "Tart, Fruity, Refreshing"
    },
    {
        title: "Daiquiri",
        ingredients: {
            booze: ["2 oz White Rum"],
            syrups: ["1 oz Lime Juice", "0.75 oz Simple Syrup"],
            garnishes: ["Lime Wedge"]
        },
        steps: [
            "Shake all ingredients with ice until chilled.",
            "Double strain into chilled coupe.",
            "Garnish with lime wedge."
        ],
        notes: "Perfect balance of sweet and sour.",
        flavor: "Sweet, Sour, Refreshing"
    },
    {
        title: "Dark & Stormy",
        ingredients: {
            booze: ["2 oz Goslings Rum"],
            syrups: ["0.5 oz Ginger Syrup", "0.5 oz Lime Juice"],
            others: ["Soda Water"],
            garnishes: ["Dehydrated Lime"]
        },
        steps: [
            "Shake rum, ginger syrup, and lime juice with ice.",
            "Strain into mule mug over ice.",
            "Top with soda water and garnish."
        ],
        notes: "Spicy ginger and lime combination.",
        flavor: "Spicy, Ginger, Lime"
    },
    {
        title: "French 75",
        ingredients: {
            booze: ["1.5 oz Gin", "Prosecco"],
            syrups: ["0.75 oz Lemon Juice", "0.5 oz Simple Syrup"],
            garnishes: ["Lemon Twist"]
        },
        steps: [
            "Shake gin, lemon, and syrup with ice.",
            "Strain into champagne flute.",
            "Top with prosecco and garnish."
        ],
        notes: "Bubbly citrus cocktail with gin base.",
        flavor: "Bubbly, Citrus, Refreshing"
    },
    {
        title: "Gimlet",
        ingredients: {
            booze: ["2 oz Gin"],
            syrups: ["1 oz Lime Juice", "0.75 oz Simple Syrup"],
            garnishes: ["Lime Wedge"]
        },
        steps: [
            "Shake all ingredients with ice until chilled.",
            "Double strain into chilled coupe.",
            "Garnish with lime wedge."
        ],
        notes: "Crisp and refreshing lime-forward cocktail.",
        flavor: "Crisp, Lime, Refreshing"
    },
    {
        title: "Jungle Bird",
        ingredients: {
            booze: ["1.5 oz Dark Rum"],
            syrups: ["0.5 oz Simple Syrup", "0.5 oz Lime Juice"],
            others: ["1.5 oz Pineapple Juice", "0.75 oz Campari"],
            garnishes: ["Pineapple Leaf"]
        },
        steps: [
            "Shake all ingredients with ice until chilled.",
            "Strain over ice in rocks glass.",
            "Garnish with pineapple leaf."
        ],
        notes: "Tropical cocktail with bitter Campari balance.",
        flavor: "Tropical, Bitter, Refreshing"
    },
    {
        title: "Last Word",
        ingredients: {
            booze: ["0.75 oz Gin", "0.75 oz Green Chartreuse", "0.75 oz Luxardo Maraschino"],
            syrups: ["0.75 oz Lime Juice"],
            garnishes: ["Lime Twist"]
        },
        steps: [
            "Shake all ingredients with ice until chilled.",
            "Double strain into Nick and Nora glass.",
            "Express lime twist over drink."
        ],
        notes: "Perfect balance of herbal, sweet, and sour.",
        flavor: "Herbal, Sweet, Sour"
    },
    {
        title: "Margarita",
        ingredients: {
            booze: ["2 oz Tequila", "0.5 oz Cointreau"],
            syrups: ["1 oz Lime Juice", "0.5 oz Agave Syrup"],
            garnishes: ["Lime Wedge", "Salt Rim"]
        },
        steps: [
            "Rim rocks glass with salt.",
            "Shake all ingredients with ice.",
            "Strain over fresh ice and garnish."
        ],
        notes: "Classic tequila sour with salt rim.",
        flavor: "Tangy, Tequila, Refreshing"
    },
    {
        title: "Martini - Standard",
        ingredients: {
            booze: ["2 oz Gin", "0.5 oz Dry Vermouth"],
            bitters: ["1 dash Orange Bitters"],
            garnishes: ["Lemon Twist"]
        },
        steps: [
            "Stir ingredients with ice until well chilled.",
            "Strain into chilled Nick and Nora glass.",
            "Express lemon twist over drink."
        ],
        notes: "Classic gin martini with orange bitters.",
        flavor: "Dry, Gin, Citrus"
    },
    {
        title: "Martini - Dirty",
        ingredients: {
            booze: ["2 oz Gin", "0.25 oz Dry Vermouth"],
            others: ["0.5 oz Olive Brine"],
            garnishes: ["3 Olives"]
        },
        steps: [
            "Stir ingredients with ice until chilled.",
            "Strain into chilled Nick and Nora glass.",
            "Garnish with olives on skewer."
        ],
        notes: "Salty and briny martini variation.",
        flavor: "Salty, Briny, Gin"
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
        notes: "A rich and smooth cocktail with a strong coffee flavor.",
        flavor: "Coffee, Bitter-Sweet, Creamy"
    },
    {
        title: "Negroni",
        ingredients: {
            booze: ["1 oz Gin", "1 oz Campari", "1 oz Sweet Vermouth"],
            garnishes: ["Orange Twist"]
        },
        steps: [
            "Stir ingredients with ice for 30 seconds.",
            "Strain over large ice cube in rocks glass.",
            "Express orange twist over drink."
        ],
        notes: "Bitter-sweet Italian aperitivo classic.",
        flavor: "Bitter, Sweet, Aromatic"
    },
    {
        title: "Old Fashioned",
        ingredients: {
            booze: ["2 oz Bourbon Whiskey"],
            syrups: ["0.25 oz Demerara Syrup"],
            bitters: ["3 dashes Angostura"],
            garnishes: ["Orange Twist"]
        },
        steps: [
            "Muddle sugar cube with bitters and water.",
            "Add bourbon and stir with ice.",
            "Express orange twist over drink."
        ],
        notes: "The original whiskey cocktail.",
        flavor: "Whiskey, Sweet, Aromatic"
    },
    {
        title: "Penicillin",
        ingredients: {
            booze: ["2 oz Scotch Whiskey"],
            syrups: ["0.75 oz Lemon Juice", "0.33 oz Honey Syrup", "0.33 oz Ginger Syrup"],
            others: ["0.25 oz Islay Scotch Float"],
            garnishes: ["Candied Ginger"]
        },
        steps: [
            "Shake blended scotch, lemon, and syrups with ice.",
            "Strain over large ice cube in rocks glass.",
            "Float Islay Scotch on top.",
            "Garnish with candied ginger."
        ],
        notes: "Modern classic with smoky Islay finish.",
        flavor: "Smoky, Sweet, Spicy"
    },
    {
        title: "Whiskey Sour",
        ingredients: {
            booze: ["2 oz Bourbon Whiskey"],
            syrups: ["0.75 oz Lemon Juice", "0.75 oz Simple Syrup"],
            others: ["1 Egg White"],
            garnishes: ["Angostura Bitters"]
        },
        steps: [
            "Dry shake all ingredients without ice.",
            "Add ice and shake again until chilled.",
            "Double strain into coupe glass.",
            "Add bitters design on foam."
        ],
        notes: "Silky textured classic with egg white.",
        flavor: "Silky, Sour, Sweet"
    },
    {
        title: "Long Island",
        ingredients: {
            booze: ["0.5 oz Tequila", "0.5 oz Vodka", "0.5 oz Gin", "0.5 oz White Rum", "0.5 oz Cointreau"],
            syrups: ["0.5 oz Lemon Juice"],
            others: ["Coke"],
            garnishes: ["Lemon Wheel"]
        },
        steps: [
            "Fill collins glass with coke.",
            "Layer alcohol on top.",
            "Garnish with lemon wheel."
        ],
        notes: "Strong and refreshing cocktail with a mix of spirits.",
        flavor: "Strong, Refreshing, Citrusy"
    },
    {
        title: "La Rosita",
        ingredients: {
            booze: ["2 oz Tequila", "0.5 oz Campari", "0.5 oz Dolin Sweet Vermouth", "0.5 oz Dolin Dry Vermouth"],
            bitters: ["1 dash Angostura"],
            garnishes: ["Orange Twist"]
        },
        steps: [
            "Shake all ingredients with ice.",
            "Double strain into rocks glass.",
            "Garnish with orange twist."
        ],
        notes: "Tequila-based cocktail with a bitter twist.",
        flavor: "Bitter, Tequila, Aromatic"
    },
    {
        title: "Mai Tai",
        ingredients: {
            booze: ["1.5 oz Jamaican Rum", "0.5 oz Latin Rum"],
            syrups: ["0.5 oz Cointreau", "0.5 oz Orgeat", "0.75 oz Lime Juice"],
            garnishes: ["Cherry", "Pineapple Leaf"]
        },
        steps: [
            "Shake all ingredients with ice.",
            "Strain into rocks glass over ice.",
            "Garnish with cherry and pineapple leaf."
        ],
        notes: "Tropical cocktail with a rich rum flavor.",
        flavor: "Tropical, Rich, Refreshing"
    },
    {
        title: "Manhattan",
        ingredients: {
            booze: ["2 oz Rye Whiskey", "1 oz Dolin Sweet Vermouth"],
            bitters: ["1 dash Angostura"],
            garnishes: ["Cherry"]
        },
        steps: [
            "Stir all ingredients with ice until well chilled.",
            "Strain into Nick and Nora glass.",
            "Garnish with cherry."
        ],
        notes: "Classic whiskey cocktail with a sweet vermouth balance.",
        flavor: "Whiskey, Sweet, Aromatic"
    },
    {
        title: "Martinez",
        ingredients: {
            booze: ["2 oz Gin", "1 oz Sweet Vermouth"],
            syrups: ["0.25 oz Luxardo Maraschino"],
            bitters: ["1 dash Angostura"],
            garnishes: ["Lemon Twist"]
        },
        steps: [
            "Stir all ingredients with ice until well chilled.",
            "Strain into Nick and Nora glass.",
            "Garnish with lemon twist."
        ],
        notes: "Gin-based cocktail with a hint of maraschino.",
        flavor: "Gin, Sweet, Aromatic"
    },
    {
        title: "Martini (Vodka)",
        ingredients: {
            booze: ["2 oz Vodka", "0.5 oz Dry Vermouth"],
            garnishes: ["Olives", "Lemon Twist"]
        },
        steps: [
            "Stir all ingredients with ice until well chilled.",
            "Strain into Nick and Nora glass.",
            "Garnish with olives or lemon twist."
        ],
        notes: "Classic vodka martini with a dry vermouth touch.",
        flavor: "Dry, Vodka, Refreshing"
    },
    {
        title: "Dirty Martini (Vodka)",
        ingredients: {
            booze: ["2 oz Vodka", "0.25 oz Dry Vermouth"],
            others: ["0.5 oz Olive Brine"],
            garnishes: ["1 or 3 Olives"]
        },
        steps: [
            "Stir all ingredients with ice until well chilled.",
            "Strain into Nick and Nora glass.",
            "Garnish with olives."
        ],
        notes: "Salty and briny vodka martini variation.",
        flavor: "Salty, Briny, Vodka"
    },
    {
        title: "Mint Julep",
        ingredients: {
            booze: ["2 oz Bourbon Whiskey"],
            syrups: ["0.25 oz Simple Syrup"],
            others: ["Mint"],
            garnishes: ["Mint Bouquet"]
        },
        steps: [
            "Shake bourbon, simple syrup, and mint with ice.",
            "Strain into julep glass over crushed ice.",
            "Garnish with mint bouquet."
        ],
        notes: "Refreshing bourbon cocktail with mint.",
        flavor: "Minty, Refreshing, Bourbon"
    },
    {
        title: "Mojito",
        ingredients: {
            booze: ["2 oz White Rum"],
            syrups: ["0.75 oz Simple Syrup", "1 oz Lime Juice"],
            others: ["6-8 Mint Leaves"],
            garnishes: ["Lime Wedge"]
        },
        steps: [
            "Shake rum, simple syrup, lime juice, and mint leaves with ice.",
            "Strain into collins glass over ice.",
            "Garnish with lime wedge."
        ],
        notes: "Classic Cuban cocktail with mint and lime.",
        flavor: "Minty, Citrusy, Refreshing"
    },
    {
        title: "Moscow Mule",
        ingredients: {
            booze: ["2 oz Vodka"],
            syrups: ["0.5 oz Ginger Syrup", "0.5 oz Lime Juice"],
            others: ["Soda Water"],
            garnishes: ["Dehydrated Lime"]
        },
        steps: [
            "Shake vodka, ginger syrup, and lime juice with ice.",
            "Strain into mule glass over ice.",
            "Top with soda water and garnish with dehydrated lime."
        ],
        notes: "Spicy and refreshing vodka cocktail.",
        flavor: "Spicy, Citrusy, Refreshing"
    },
    {
        title: "Paloma",
        ingredients: {
            booze: ["2 oz Blanco Tequila"],
            syrups: ["0.5 oz Lime Juice", "1 oz Grapefruit Juice", "0.5 oz Simple Syrup"],
            others: ["Soda Water"],
            garnishes: ["Grapefruit Piece", "Dehydrated Lime", "Lime Wedge"]
        },
        steps: [
            "Shake all ingredients except soda water with ice.",
            "Strain into collins glass over ice.",
            "Top with soda water.",
            "Garnish with grapefruit piece, dehydrated lime, or lime wedge."
        ],
        notes: "Refreshing tequila cocktail with grapefruit and lime.",
        flavor: "Citrusy, Refreshing, Tequila"
    },
    {
        title: "Rob Roy",
        ingredients: {
            booze: ["2 oz Scotch Whiskey"],
            syrups: ["0.75 oz Sweet Vermouth"],
            bitters: ["1 dash Angostura"],
            garnishes: ["Cherry"]
        },
        steps: [
            "Stir all ingredients with ice until well chilled.",
            "Strain into Nick and Nora glass.",
            "Garnish with cherry."
        ],
        notes: "Scotch-based Manhattan variation.",
        flavor: "Rich, Smooth, Scotch"
    },
    {
        title: "Rusty Nail",
        ingredients: {
            booze: ["2 oz Scotch Whiskey", "0.5 oz Drambuie"],
            garnishes: ["Lemon Twist"]
        },
        steps: [
            "Stir all ingredients with ice until well chilled.",
            "Strain into rocks glass over ice.",
            "Garnish with lemon twist."
        ],
        notes: "Smooth and honeyed Scotch cocktail.",
        flavor: "Honeyed, Smooth, Scotch"
    },
    {
        title: "Sazerac",
        ingredients: {
            booze: ["1.5 oz Rye Whiskey", "0.5 oz Cognac"],
            syrups: ["0.25 oz Demerara Syrup"],
            bitters: ["4 dashes Peychaud's", "1 dash Angostura"],
            others: ["Absinthe Rinse"],
            garnishes: ["Lemon Zest (discard)"]
        },
        steps: [
            "Rinse rocks glass with absinthe and discard excess.",
            "Stir remaining ingredients with ice until well chilled.",
            "Strain into prepared glass.",
            "Express lemon zest over drink and discard."
        ],
        notes: "Classic New Orleans cocktail with absinthe rinse.",
        flavor: "Herbal, Complex, Strong"
    },
    {
        title: "Sidecar",
        ingredients: {
            booze: ["2 oz Courvoisier VSOP"],
            syrups: ["0.75 oz Lemon Juice", "0.75 oz Cointreau"],
            garnishes: ["Lemon Zest"]
        },
        steps: [
            "Shake all ingredients with ice until well chilled.",
            "Double strain into chilled coupe.",
            "Garnish with lemon zest."
        ],
        notes: "Elegant cognac cocktail with citrus notes.",
        flavor: "Citrusy, Elegant, Cognac"
    },
    {
        title: "Singapore Sling",
        ingredients: {
            booze: ["1.5 oz Gin", "0.5 oz Cherry Heering", "0.25 oz Cointreau", "0.25 oz Benedictine"],
            syrups: ["2 oz Pineapple Juice", "0.5 oz Lime Juice", "0.5 oz House Grenadine"],
            bitters: ["1 dash Angostura"],
            garnishes: ["Cherry"]
        },
        steps: [
            "Shake all ingredients with ice until well chilled.",
            "Strain into collins glass over ice.",
            "Garnish with cherry."
        ],
        notes: "Complex and fruity gin cocktail.",
        flavor: "Fruity, Complex, Gin"
    },
    {
        title: "Tom Collins",
        ingredients: {
            booze: ["2 oz Gin"],
            syrups: ["0.75 oz Simple Syrup", "1 oz Lemon Juice"],
            others: ["Soda Water"],
            garnishes: ["Lemon Wheel", "Half Lemon Wheel"]
        },
        steps: [
            "Shake gin, simple syrup, and lemon juice with ice.",
            "Strain into collins glass over ice.",
            "Top with soda water.",
            "Garnish with lemon wheel or half lemon wheel."
        ],
        notes: "Classic gin cocktail with a refreshing lemon flavor.",
        flavor: "Citrusy, Refreshing, Gin"
    },
    {
        title: "Vesper",
        ingredients: {
            booze: ["1.5 oz Gin", "0.75 oz Vodka", "0.5 oz Lillet Blanc"],
            garnishes: ["Lemon Twist"]
        },
        steps: [
            "Stir all ingredients with ice until well chilled.",
            "Strain into Nick and Nora or coupe glass.",
            "Garnish with lemon twist."
        ],
        notes: "James Bond's famous martini variation.",
        flavor: "Strong, Smooth, Gin"
    },
    {
        title: "Vieux Carré",
        ingredients: {
            booze: ["1 oz Rye Whiskey", "1 oz Cognac", "1 oz Sweet Vermouth"],
            syrups: ["1 tsp Benedictine"],
            bitters: ["1 dash Angostura", "1 dash Peychaud's"],
            garnishes: ["Lemon Zest", "Cherry"]
        },
        steps: [
            "Stir all ingredients with ice until well chilled.",
            "Strain into rocks glass over ice.",
            "Garnish with lemon zest and cherry."
        ],
        notes: "Classic New Orleans cocktail with a rich, complex flavor.",
        flavor: "Rich, Complex, Strong"
    }
];

// Combine all cocktail arrays into one
const allCocktails = [...randomCocktails, ...modernCocktails, ...aloraCocktails, ...classicCocktails];

const ModernClassics = () => {
    return (
        <>
            <RecipeCardDisplay mainTitle="All Cocktails" recipes={allCocktails} />
        </>
    );
};

export default ModernClassics;
