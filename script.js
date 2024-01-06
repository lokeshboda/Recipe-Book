document.addEventListener('DOMContentLoaded', function() {
    const recipeForm = document.getElementById('add-recipe-form');
    const recipeList = document.getElementById('recipe-list');

    recipeForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const recipeName = document.getElementById('recipe-name').value;
        const ingredients = document.getElementById('ingredients').value;
        const instructions = document.getElementById('instructions').value;

        // Create a new recipe card
        const recipeCard = document.createElement('div');
        recipeCard.classList.add('recipe-card');
        recipeCard.innerHTML = `
            <h3>${recipeName}</h3>
            <p><strong>Ingredients:</strong><br>${ingredients}</p>
            <p><strong>Instructions:</strong><br>${instructions}</p>
            <button class="delete-btn">Delete</button>
        `;

        // Attach delete functionality to the delete button
        const deleteBtn = recipeCard.querySelector('.delete-btn');
        deleteBtn.addEventListener('click', function() {
            recipeList.removeChild(recipeCard);
        });

        // Add the recipe card to the recipe list
        recipeList.appendChild(recipeCard);

        // Clear the form fields
        recipeForm.reset();
    });
});
