import { apiKey } from "./API.js"; 
import { searchRecipe,fetchSuggestions } from "./script.js";
import { showSuggestions } from "./UI.js";

//const searchInput = document.getElementById('search-input');

//const suggestionsList = document.getElementById('suggestions');

//TODO: add function to manage search button both on click and on enter key press.

async function handleSearch() {
    const searchInput = document.getElementById('search-input').value.trim();
    if (!searchInput) return;
    try {
        const recipeData = await searchRecipe(searchInput,apiKey);
        console.log(recipeData); // For debugging purposes
        //TODO: Later on, substitute calling a function to display recipes

        const suggestionsData = await fetchSuggestions(searchInput, apiKey);
        console.log(suggestionsData); // For debugging purposes

        await showSuggestions(suggestionsData);
    } catch (error) {
        console.error('Error handling search:', error);
    }
}    


document.getElementById('search-input').addEventListener('keypress', async (event) => {
    if (event.key === 'Enter') {
        //When Enter key is pressed, call the function to fetch recipes.
        await handleSearch();
    }
});
document.getElementById('search-button').addEventListener('click', async () => {
    //When clicked, call the function to fetch recipes.
    await handleSearch();
});

