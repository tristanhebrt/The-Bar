const classicCocktails = [
    {
        title: "Old Fashioned",
        content: [
            "2 oz Rittenhouse 100 Rye or Buffalo Trace Bourbon",
            "1 tsp Demerara syrup",
            "2 dashes Angostura bitters",
            "1 dash Bittermens Xocolatl Mole bitters",
            "Lemon twist",
            "Orange twist"
        ],
        steps: [
            "Stir all ingredients over ice.",
            "Strain into a rocks glass over a large ice cube.",
            "Garnish with a lemon and orange twist."
        ]
    },
    {
        title: "Manhattan",
        content: [
            "2.5 oz Rittenhouse 100 Rye",
            "0.75 oz House Sweet Vermouth",
            "2 dashes Angostura bitters",
            "Brandied cherry (garnish)"
        ],
        steps: [
            "Stir all ingredients over ice.",
            "Strain into a chilled coupe glass.",
            "Garnish with a brandied cherry."
        ]
    },
    {
        title: "Martini",
        content: [
            "1 oz Ford's Gin",
            "0.75 oz Contratto Vermouth Bianco",
            "0.75 oz Dolin Dry Vermouth",
            "0.75 oz Cocchi Americano",
            "0.5 oz Yellow Chartreuse",
            "1 dash Bittermens Hopped Grapefruit Bitters",
            "1 dash Dale DeGroff’s Pimento Bitters",
            "Lemon twist (garnish)"
        ],
        steps: [
            "Stir all ingredients over ice.",
            "Strain into a Nick & Nora glass.",
            "Squeeze lemon twist over the drink and garnish."
        ]
    },
    {
        title: "Negroni",
        content: [
            "1.5 oz Beefeater London Dry Gin",
            "1 oz Carpano Antica Formula Vermouth",
            "1 oz Campari",
            "Orange twist (garnish)"
        ],
        steps: [
            "Stir all ingredients over ice.",
            "Strain into a rocks glass over a large ice cube.",
            "Garnish with an orange twist."
        ]
    },
    {
        title: "Daiquiri",
        content: [
            "2 oz Caña Brava Rum",
            "0.75 oz Fresh Lime Juice",
            "0.75 oz Cane Sugar Syrup"
        ],
        steps: [
            "Shake all ingredients with ice.",
            "Strain into a chilled coupe glass.",
            "No garnish."
        ]
    },
    {
        title: "Margarita",
        content: [
            "2 oz Siembra Azul Blanco Tequila",
            "0.75 oz Cointreau",
            "0.75 oz Fresh Lime Juice",
            "0.25 oz Agave Syrup",
            "Salt rim"
        ],
        steps: [
            "Rim a glass with salt.",
            "Shake all ingredients with ice.",
            "Strain into a rocks glass over fresh ice."
        ]
    },
    {
        title: "Whiskey Sour",
        content: [
            "2 oz Baker’s Bourbon",
            "0.75 oz Fresh Lemon Juice",
            "0.75 oz Simple Syrup",
            "Egg White (optional)"
        ],
        steps: [
            "Dry shake all ingredients (without ice) for 10 seconds.",
            "Add ice and shake again until chilled.",
            "Strain into a rocks glass over ice.",
            "Garnish with an orange slice or cherry."
        ]
    },
    {
        title: "Sazerac",
        content: [
            "1.5 oz Rittenhouse 100 Rye",
            "0.5 oz Pierre Ferrand 1840 Cognac",
            "1 tsp Demerara Syrup",
            "4 dashes Peychaud’s Bitters",
            "1 dash Angostura Bitters",
            "Absinthe rinse",
            "Lemon twist"
        ],
        steps: [
            "Rinse a rocks glass with absinthe and discard the excess.",
            "Stir all ingredients over ice.",
            "Strain into the prepared glass.",
            "Express a lemon twist over the drink and discard."
        ]
    },
    {
        title: "French 75",
        content: [
            "1 oz Plymouth Gin",
            "0.25 oz Campari",
            "0.5 oz Lemon Juice",
            "0.5 oz Simple Syrup",
            "Dry Champagne",
            "Grapefruit twist (garnish)"
        ],
        steps: [
            "Shake gin, Campari, lemon juice, and simple syrup with ice.",
            "Strain into a flute glass.",
            "Top with Champagne.",
            "Garnish with a grapefruit twist."
        ]
    },
    {
        title: "Mai Tai",
        content: [
            "1 oz Rhum Agricole Blanc",
            "1 oz Dark Jamaican Rum",
            "0.5 oz Lime Juice",
            "0.5 oz Pierre Ferrand Dry Curaçao",
            "0.25 oz Orgeat Syrup",
            "0.25 oz Cane Syrup",
            "Mint sprig (garnish)"
        ],
        steps: [
            "Shake all ingredients with ice.",
            "Strain into a double rocks glass filled with crushed ice.",
            "Garnish with a mint sprig."
        ]
    },
    {
        title: "Bloody Mary",
        content: [
            "2 oz Charbay Vodka",
            "4 oz Tomato Juice",
            "0.5 oz Fresh Lemon Juice",
            "1 dash Worcestershire Sauce",
            "1 dash Hot Sauce",
            "Celery Salt",
            "Fresh Ground Black Pepper",
            "Celery stalk and lemon wedge (garnish)"
        ],
        steps: [
            "Combine all ingredients in a shaker without ice and roll back and forth between two tins.",
            "Pour into a pint glass over fresh ice.",
            "Garnish with a celery stalk and lemon wedge."
        ]
    },
    {
        title: "Pina Colada",
        content: [
            "2 oz White Rum",
            "3 oz Pineapple Juice",
            "1 oz Coconut Cream",
            "Blended with ice",
            "Pineapple wedge and cherry (garnish)"
        ],
        steps: [
            "Blend all ingredients with crushed ice until smooth.",
            "Pour into a hurricane glass.",
            "Garnish with a pineapple wedge and cherry."
        ]
    },
    {
        title: "Mojito",
        content: [
            "6 Mint Leaves",
            "0.75 oz Simple Syrup",
            "2 oz Caña Brava Rum",
            "1 oz Fresh Lime Juice",
            "2 Drops Angostura Bitters",
            "Mint bouquet (garnish)"
        ],
        steps: [
            "Gently muddle the mint leaves with simple syrup.",
            "Add rum, lime juice, and bitters.",
            "Shake with crushed ice and pour into a double rocks glass.",
            "Top with more crushed ice and garnish with a mint bouquet."
        ]
    },
    {
        title: "Cosmopolitan",
        content: [
            "1.5 oz Charbay Vodka",
            "1 oz Cranberry Juice",
            "0.75 oz Cointreau",
            "0.5 oz Fresh Lime Juice",
            "Lime wheel (garnish)"
        ],
        steps: [
            "Shake all ingredients with ice.",
            "Strain into a chilled coupe glass.",
            "Garnish with a lime wheel."
        ]
    },
    {
        title: "Last Word",
        content: [
            "0.75 oz Plymouth Gin",
            "0.75 oz Green Chartreuse",
            "0.75 oz Luxardo Maraschino Liqueur",
            "0.75 oz Fresh Lime Juice"
        ],
        steps: [
            "Shake all ingredients with ice.",
            "Strain into a chilled coupe glass.",
            "No garnish."
        ]
    }
];

export default classicCocktails;
