
// Function to display suggestions in the UI.
async function showSuggestions(suggestionsData) {
    const suggestionsList = document.getElementById('suggestions-list');
    suggestionsList.innerHTML = ''; // Clear previous suggestions
    

    suggestionsList.forEach(suggestion => {
        const ul = document.createElement('li');
        ul.textContent = suggestion.title;
        suggestionsList.appendChild(li);
        ul.addEventListener('click', () => {
            document.getElementById('search-input').value = suggestion.title;
            suggestionsList.innerHTML = '';
        });
    });
    suggestionsList.appendChild(ul);

}

export { showSuggestions };