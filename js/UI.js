const suggestionsList = document.getElementById('suggestions-list');
const recipeDetailsSection = document.getElementById('recipe-details-section');
const recipeDetailsContainer = document.getElementById('recipe-details-container');

// Function to display suggestions in the UI.
function showSuggestions(suggestionsData) {
    suggestionsList.innerHTML = ''; // Clear previous suggestions
    if (suggestionsData != null) {
        try {
            suggestionsData.forEach(suggestion => {
                const li = document.createElement('li');
                li.textContent = suggestion.title;
                li.addEventListener('click', () => {
                    document.getElementById('search-input').value = suggestion.title;
                    suggestionsList.innerHTML = '';
                });
                suggestionsList.appendChild(li);
            });
        }
        catch (error) {
            console.error('Error displaying suggestions:', error);
        }    
    };
}
// Function to display recipe details in the UI.
function showRecipe(recipe) {
    recipeDetailsContainer.innerHTML = `
        <h3>${recipe.title}</h3>
        <img src="${recipe.image}" alt="${recipe.title}">
        <p>Ready in ${recipe.readyInMinutes || 'N/A'} minutes | Servings: ${recipe.servings || 'N/A'}</p>
        <h4>Ingredients:</h4>
        <ul>
            ${
                recipe.extendedIngredients
                ? recipe.extendedIngredients.map(ing => `<li>${ing.original}</li>`).join('')
                : '<li>No ingredients available.</li>'
            }
        </ul>
        <h4>Instructions:</h4>
        <p>${recipe.instructions || 'No instructions available.'}</p>
    `;
    recipeDetailsSection.classList.remove('hidden');
}
// Function to hide the recipe details section.
function hideRecipe() {
    recipeDetailsContainer.innerHTML = '';
    recipeDetailsSection.classList.add('hidden');
}

// Function to display error messages in the UI.
function showError(message) {
    recipeDetailsContainer.innerHTML = `
    <div class="error-message">
        <h2>⚠️ Error</h2>
        <p>${message}</p>
    </div>`;
    recipeDetailsSection.classList.remove('hidden');
}
//Display a loading message while fetching data.
function showLoading(message = 'Loading...') {

    recipeDetailsContainer.innerHTML = `
        <div class="loading-message">
            <p>${message}</p>
        </div>
    `;

    recipeDetailsSection.classList.remove('hidden');
}
export { showSuggestions, showRecipe, hideRecipe, showError, showLoading };