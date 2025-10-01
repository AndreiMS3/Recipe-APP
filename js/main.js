import { apiKey } from "./API.js"; 
import { searchRecipe,fetchSuggestions } from "./script.js";
import { showSuggestions } from "./UI.js";

const searchInputElem = document.getElementById('search-input');
const suggestionsList = document.getElementById('suggestions-list');
const searchButton = document.getElementById('search-button');
let debounceTimer = null;

function clearSuggestions() {
    suggestionsList.innerHTML = '';
}

// Event listener for input field with debounce
searchInputElem.addEventListener('input', async () => {
   clearTimeout(debounceTimer);
   debounceTimer = setTimeout(async () => {
        if (searchInputElem.value.trim() === '') {
            clearSuggestions();
            return
        }
        try {
            const suggestionsData = await fetchSuggestions(searchInputElem.value.trim(), apiKey);
            showSuggestions(suggestionsData);
        } catch (error) {
            console.error('Error fetching suggestions:', error);
        }
   }, 500);
});   


async function handleSearch() {
    const searchInput = searchInputElem.value.trim();
    if (!searchInput) return;
    try {
        const recipeData = await searchRecipe(searchInput,apiKey);
        console.log(recipeData); // For debugging purposes
        //TODO: Later on, substitute calling a function to display recipes
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

