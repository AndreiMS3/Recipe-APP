import { apiKey } from "./API.js"; 
import { searchRecipe } from "./script.js";


//const suggestionsList = document.getElementById('suggestions');

//TODO: add function to manage search button both on click and on enter key press.

async function handleSearch() {
    try {
        const recipeData = await searchRecipe(apiKey);
        console.log(recipeData); // For debugging purposes
        //TODO: Call function to display recipes
        //TODO: Clear suggestions if any
    } catch (error) {
        console.error('Error calling method to fetch recipes:', error);
    }
}    
// Event listener for the search button.
document.getElementById('search-button').addEventListener('click', async () => {
    //When clicked, call the function to fetch recipes.
    await handleSearch();
});
