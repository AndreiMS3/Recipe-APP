const suggestionsList = document.getElementById('suggestions-list');
const recipeDetailsSection = document.getElementById('recipe-details-section');
const recipeDetailsContainer = document.getElementById('recipe-details-container');

// Function to display suggestions in the UI.
function showSuggestions(suggestionsData, onSuggestionClick) {
    suggestionsList.innerHTML = ''; // Clear previous suggestions
    if (suggestionsData != null) {
        try {
            suggestionsData.forEach(suggestion => {
                const li = document.createElement('li');
                li.textContent = suggestion.title;
                li.addEventListener('click', () => {
                    onSuggestionClick(suggestion.title);
                });
                suggestionsList.appendChild(li);
            });
        }
        catch (error) {
            console.error('Error displaying suggestions:', error);
        }    
    };
}

// Function to display search results in the UI.
function showSearchResults(resultsData, onResultClick) {
    recipeDetailsContainer.innerHTML = '';
    recipeDetailsContainer.classList.add('results-grid');

    if (resultsData != null) {
        try {
            resultsData.forEach(result => {
                // Display each result in the UI
                const resultDiv = document.createElement('div');
                resultDiv.classList.add('result-card');

                resultDiv.innerHTML = `
                    <h3>${result.title}</h3>
                    <img src="${result.image}" alt="${result.title}">
                `;
                resultDiv.addEventListener('click', () => {
                    onResultClick(result);
                });
                recipeDetailsContainer.appendChild(resultDiv);
            });
            recipeDetailsSection.classList.remove('hidden');
        }
        catch (error) {
            console.error('Error displaying results:', error);
        }
    }
}


// Function to display recipe details in the UI.
function showRecipe(recipe) {
    recipeDetailsContainer.classList.remove('results-grid');
    const isFav = isFavorite(recipe.id);

    recipeDetailsContainer.innerHTML = `
        <h3>${recipe.title}</h3>
        <button id="fav-btn">
            ${isFav ? '💔 Remove from favorites' : '❤️ Add to favorites'}
        </button>
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
    const favBtn = document.getElementById('fav-btn');

    favBtn.addEventListener('click', () => {
        toggleFavorite(recipe);
        favBtn.textContent = isFavorite(recipe.id)
        ? '💔 Remove from favorites'
        : '❤️ Add to favorites';
    });

    recipeDetailsSection.classList.remove('hidden');
  
    recipeDetailsSection.scrollIntoView({ behavior: 'smooth' });
}

// Function to display error messages in the UI.
function showError(message) {
    recipeDetailsContainer.classList.remove('results-grid');

    recipeDetailsContainer.innerHTML = `
    <div class="error-message">
        <h2>⚠️ Error</h2>
        <p>${message}</p>
    </div>`;
    recipeDetailsSection.classList.remove('hidden');
}
//Display a loading message while fetching data.
function showLoading(message = 'Loading...') {
    recipeDetailsContainer.classList.remove('results-grid');

    recipeDetailsContainer.innerHTML = `
        <div class="loading-message">
            <p>${message}</p>
        </div>
    `;

    recipeDetailsSection.classList.remove('hidden');
}

// Function to hide the recipe details section.
function hideRecipe() {
    recipeDetailsContainer.innerHTML = '';
    recipeDetailsContainer.classList.remove('results-grid');
    recipeDetailsSection.classList.add('hidden');
}

function getFavorites() {
    return JSON.parse(localStorage.getItem('favorites')) || [];
}

function saveFavorites(favorites) {
    localStorage.setItem('favorites', JSON.stringify(favorites));
}

function toggleFavorite(recipe) {
    let favorites = getFavorites();

    const exists = favorites.find(fav => fav.id === recipe.id);

    if (exists) {
        favorites = favorites.filter(fav => fav.id !== recipe.id);
    } else {
        favorites.push({
            id: recipe.id,
            title: recipe.title,
            image: recipe.image
        });
    }

    saveFavorites(favorites);
}

function isFavorite(recipeId) {
    const favorites = getFavorites();
    return favorites.some(fav => fav.id === recipeId);
}

export { showSuggestions, showRecipe, hideRecipe, showError, showLoading,showSearchResults };