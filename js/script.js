

// Functioon to search for a recipe on title match.
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
    const response = await fetch(`https://api.spoonacular.com/recipes/autocomplete?query=${encodeURIComponent(searchInput)}&number=10&apiKey=${apiKey}`);
    if (!response.ok) {
        throw new Error('Problem fetching suggestions');
    }
    console.log("Fetched suggestions:"); // For debugging purposes
    return await response.json(); //Suggestions data in JSON format
}


export { searchRecipe ,fetchSuggestions };
