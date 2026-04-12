

// Function to display suggestions in the UI.
async function showSuggestions(suggestionsData) {
    const suggestionsList = document.getElementById('suggestions-list');
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

async function showRecipe(recipe) {
    const recipeDetailsSection = document.getElementById('recipe-details-section');
    const recipeDetailsContainer = document.getElementById('recipe-details-container');
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

function hideRecipe() {
    const section = document.getElementById('recipe-details-section');
    const container = document.getElementById('recipe-details-container');

    container.innerHTML = '';
    section.classList.add('hidden');
}


export { showSuggestions, showRecipe, hideRecipe };