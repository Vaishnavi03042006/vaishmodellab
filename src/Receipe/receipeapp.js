import React from 'react';
import useFavorites from './usefavourites';

function RecipeApp() {
    const { favorites, addFavorite, removeFavorite } = useFavorites();

    const recipes = [
        { name: 'Spaghetti Bolognese', cuisine: 'Italian' },
        { name: 'Chicken Curry', cuisine: 'Indian' }
    ];

    return (
        <div>
            <h1>Recipe App</h1>
            
            <h2>Recipes</h2>
            {recipes.map((recipe) => (
                <div key={recipe.name}>
                    <h3>{recipe.name}</h3>
                    <p>{recipe.cuisine}</p>
                    <button onClick={() => addFavorite(recipe)}>
                        Add to Favorites
                    </button>
                </div>
            ))}

            <h2>Favorites</h2>
            {favorites.length > 0 ? (
                favorites.map((favorite) => (
                    <div key={favorite.name}>
                        <h3>{favorite.name}</h3>
                        <p>{favorite.cuisine}</p>
                        <button onClick={() => removeFavorite(favorite.name)}>
                            Remove
                        </button>
                    </div>
                ))
            ) : (
                <p>No favorites yet.</p>
            )}
        </div>
    );
}

export default RecipeApp;
