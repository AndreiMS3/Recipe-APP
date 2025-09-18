

// Functioon to search for a recipe on title match.
async function searchRecipe(searchInput, apiKey) { 
    const response = await fetch(`https://api.spoonacular.com/recipes/complexSearch?titleMatch=${encodeURIComponent(searchInput)}&number=10&apiKey=${apiKey}`);
    
    if (!response.ok) {
        throw new Error('Problem fetching recipes');
    }
    return await response.json(); //Recipe data
}
// Function to fetch suggestions based on user input.
async function fetchSuggestions(searchInput, apiKey) {
    const response = await fetch(`https://api.spoonacular.com/recipes/autocomplete?query=${encodeURIComponent(searchInput)}&number=10&apiKey=${apiKey}`);
    if (!response.ok) {
        throw new Error('Problem fetching suggestions');
    }
    const recipeSuggestion = await response.json(); //Suggestions data
    return recipeSuggestion.keys(title);
}


export { searchRecipe ,fetchSuggestions };
