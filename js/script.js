

// Functioon to search for a recipe on title match.
async function searchRecipe(apiKey) { 
    const searchInput = document.getElementById('search-input').value.trim(); 
    if (!searchInput) return;
    const response = await fetch(`https://api.spoonacular.com/recipes/complexSearch?titleMatch=${encodeURIComponent(searchInput)}&number=10&apiKey=${apiKey}`);
    
    if (!response.ok) {
        throw new Error('Problem fetching recipes');
    }
    return await response.json(); //Recipe data
}
/*
async function fetchSuggestions(query, apiKey) {
    if (!query) return;
    const response = await fetch(`https://api.spoonacular.com/food/ingredients/autocomplete?query=${encodeURIComponent(query)}&number=5&apiKey=${apiKey}`);
    if (!response.ok) {
        throw new Error('Problem fetching suggestions');
    }
    const suggestions = await response.json(); //Suggestion data
    //Todo call a function to display suggestions
}*/

/*
async function showSuggestions(suggestions) {
    const suggestionsContainer = document.getElementById('suggestions-container');
    suggestionsContainer.innerHTML = ''; // Clear previous suggestions
    suggestionsList.appendChild(ul);

    suggestions.forEach(suggestion => {
        const li = document.createElement('li');
        li.textContent = suggestion.name;
        suggestionsList.appendChild(li);
        li.addEventListener('click', () => {
            document.getElementById('search-input').value = suggestion.name;
            suggestionsContainer.innerHTML = '';
        });
    });
    suggestionsContainer.appendChild(suggestionsList);
}
*/
export { searchRecipe /*, fetchSuggestions, showSuggestions*/ };
