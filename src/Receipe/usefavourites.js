import { useState, useEffect } from 'react';

function useFavorites() {
    const [favorites, setFavorites] = useState(() => {
      
        const savedFavorites = localStorage.getItem('favorites');
        return savedFavorites ? JSON.parse(savedFavorites) : [];
    });

    
    useEffect(() => {
        localStorage.setItem('favorites', JSON.stringify(favorites));
    }, [favorites]);

    
    const addFavorite = (recipe) => {
        setFavorites((prevFavorites) => [...prevFavorites, recipe]);
    };

   
    const removeFavorite = (recipeName) => {
        setFavorites((prevFavorites) =>
            prevFavorites.filter((favorite) => favorite.name !== recipeName)
        );
    };

    return { favorites, addFavorite, removeFavorite };
}

export default useFavorites;

/* App.js
import React from 'react';
import RecipeApp from './Receipe/receipeapp';

function App() {
    return (
        <div>
            <RecipeApp />
        </div>
    );
}

export default App;
*/