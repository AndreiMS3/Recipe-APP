import { apiKey } from "./API.js"; 
import { searchRecipe,fetchSuggestions,fetchRecipeDetails } from "./script.js";
import { showSuggestions,showRecipe,hideRecipe,showError,showLoading,showSearchResults } from "./UI.js";

const searchInputElem = document.getElementById('search-input');
const suggestionsList = document.getElementById('suggestions-list');
let debounceTimer = null;

function clearSuggestions() {
    suggestionsList.innerHTML = '';
}

// Event listener for input field with debounce
searchInputElem.addEventListener('input', async () => {
   clearTimeout(debounceTimer);
   hideRecipe();
   debounceTimer = setTimeout(async () => {
        if (searchInputElem.value.trim() === '') {
            clearSuggestions();
            return
        }
        try {
            const suggestionsData = await fetchSuggestions(searchInputElem.value.trim(), apiKey);
            showSuggestions(suggestionsData, async (selectedTitle) => {
                searchInputElem.value = selectedTitle;
                clearSuggestions();
                await handleSearch();
            });
        } catch (error) {
            console.error('Error fetching suggestions:', error);
            clearSuggestions();
        }
   }, 500);
});   


async function handleSearch() {
    const searchInput = searchInputElem.value.trim();
    if (!searchInput) {
        showError('Please enter a search term.');
        return;
    }

    try {
        showLoading('Searching recipe...');

        const recipeData = await searchRecipe(searchInput,apiKey);
        console.log(recipeData); // For debugging purposes
        
        if (!recipeData.results || recipeData.results.length === 0) {
            showError('No recipes found for that search.');
            return;
        }
        showSearchResults(recipeData.results, async (selectedRecipe) => {
            const recipeId = selectedRecipe.id;
            try {
                const recipeDetails = await fetchRecipeDetails(recipeId, apiKey);
                console.log(recipeDetails); // For debugging purposes
                showRecipe(recipeDetails);
            } catch (error) {
                console.error('Error fetching recipe details:', error);
                showError('Failed to fetch recipe details.');
            }
        });

    } catch (error) {
        console.error('Error handling search:', error);
        hideRecipe();
        showError('Error handling search.');
    }
    clearSuggestions();
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

searchInputElem.addEventListener('input', () => {
    if (searchInputElem.value.trim() === '') {
        hideRecipe(); 
    }
});