import React from "react";
import RecipeCardDisplay from "../../complex/RecipeCardDisplay";

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
            booze: ["2 oz Rye Whiskey", "0.38 oz Dry Vermouth", "0.38 oz Sweet Vermouth"],
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
            booze: ["2 oz Blended Scotch Whiskey"],
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

const ClassicCocktails = () => {
    return (
        <RecipeCardDisplay 
            mainTitle="Classic Cocktails" 
            recipes={classicCocktails} 
        />
    );
};

export default ClassicCocktails;