//form to submit a new recipe
const Recipe_form = () => {
    return (
        <form>
            <h2>Submit your new recipe: </h2>
            <label htmlFor="name">Recipe Name: </label>
            <input type ="text" name="name"/><br/>

            <label htmlFor="ingredients">Ingredients: </label>
            <input type ="text" name="ingredients"/><br/>

            <label htmlFor="rating">Recipe Rating: </label>
            <input type ="text" name="rating"/><br/>

            <button>Submit</button>
        </form>
    )
}
export default Recipe_form;