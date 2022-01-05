import React from 'react';

function RecipeDetails() {
  return (
    <div>
      <p>teste</p>
      <img data-testid="recipe-photo" />
      <title data-testid="recipe-title">Title</title>
      <button type="button" data-testid="share-btn">Share</button>
      <button type="button" data-testid="favorite-btn">Favorite</button>
      <h3 data-testid="recipe-category">Category</h3>
      <h2 data-testid={ `${index}-ingredient-name-and-measure` }>Ingredients</h2>
      <h3 data-testid="instructions">Instructions</h3>
      <iframe data-testid="video">Vídeo</iframe>
      <h2 data-testid={ `${index}-recomendation-card` }>Recomendation</h2>
      <button type="button" data-testid="start-recipe-btn">Start</button>
    </div>
  );
}

export default RecipeDetails;
