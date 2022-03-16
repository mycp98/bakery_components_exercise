import brownie from '../images/brownie.png';
import carrotCake from '../images/carrotCake.png';
import lemonDrizzle from '../images/lemonDrizzle.jpeg';
import teaLoaf from '../images/teaLoaf.jpeg';

const Recipes = () => {

    const recipeList = [
        {
            cake: "Lemon Drizzle",
            ingredients: ["eggs", "butter", "lemon  zest", "sugar", "self-raising flour"],
            rating: 5,
            img:lemonDrizzle
        },
        {
            cake: "Tea Loaf",
            ingredients: ["eggs", "oil", "dried fruit", "sugar", "self-raising flour", "strong tea"],
            rating: 1,
            img: teaLoaf
        },
        {
            cake: "Brownie",
            ingredients: ["chocolate", "eggs", "flour", "butter", "walnuts"],
            rating: 4,
            img: brownie
        },
        {
            cake: "Carrot Cake",
            ingredients: ["carrots", "walnuts", "oil", "cream cheese", "flour", "sugar"],
            rating: 5,
            img: carrotCake
        }
    ]

    const individualRecipe = recipeList.map(recipe => {
        return( 
        <div key={recipe.cake}>
            <h2>{recipe.cake}</h2>
            <img src={recipe.img} alt={recipe.cake} width="200" />
            <ul key={recipe.ingredients}>{recipe.ingredients.map(recipeIngredient => {
                return(
                    <li key={recipeIngredient}>{recipeIngredient}</li>
                )
            })}</ul>
            <p key={recipe.rating}>Rating: {recipe.rating}</p>
        </div>
        )
    })
    return (
        <>
        {individualRecipe}
        </>)
    
}

export default Recipes;