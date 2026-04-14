

// Function to search for up to 10 recipes on title match.
async function searchRecipe(searchInput, apiKey) { 
    const response = await fetch(`https://api.spoonacular.com/recipes/complexSearch?titleMatch=${encodeURIComponent(searchInput)}&number=10&apiKey=${apiKey}`);
    if (!response.ok) {
        throw new Error('Problem fetching recipes');
    }
    console.log("Fetched recipe data:"); // For debugging purposes
    return await response.json(); //Recipe data in JSON format
}
// Function to fetch suggestions based on user input.
async function fetchSuggestions(searchInput, apiKey) {
    const response = await fetch(`https://api.spoonacular.com/recipes/autocomplete?query=${encodeURIComponent(searchInput)}&number=6&apiKey=${apiKey}`);
    if (!response.ok) {
        throw new Error('Problem fetching suggestions');
    }
    console.log("Fetched suggestions:"); // For debugging purposes
    return await response.json(); //Suggestions data in JSON format
}

async function fetchRecipeDetails(recipeId, apiKey) {
    const response = await fetch(`https://api.spoonacular.com/recipes/${recipeId}/information?apiKey=${apiKey}`);
    if (!response.ok) {
        throw new Error('Problem fetching recipe details');
    }
    return await response.json(); //Recipe details data in JSON format
}


export { searchRecipe ,fetchSuggestions, fetchRecipeDetails}; 
