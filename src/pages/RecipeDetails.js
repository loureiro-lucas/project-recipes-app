import React, { useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import RecipesContext from '../context/RecipesContext';

function RecipeDetails({ location: { pathname } }) {
  const { recipeDetails, getDetails } = useContext(RecipesContext);
  const details = {
    thumb: pathname.split('/')[0] === 'comidas'
      ? recipeDetails.strMealsThumb : recipeDetails.strDrinkThumb,
    title: pathname.split('/')[0] === 'comidas'
      ? recipeDetails.strMeals : recipeDetails.strDrink,
  };

  function getIngredients() {
    const ingredients = Object.keys(recipeDetails)
      .filter((key) => key.includes('Ingredient'));
    const measures = Object.keys(recipeDetails)
      .filter((key) => key.includes('Measure'));
    console.log(ingredients);
    console.log(measures);
  }

  useEffect(() => {
    getIngredients();
  }, [recipeDetails]);
  useEffect(() => {
    getDetails(pathname);
    getIngredients();
  }, []);

  return (
    <div>
      <Header pageTitle="detalhes" showSearchBar="true" />
      <img data-testid="recipe-photo" alt="details" src={ details.thumb } />
      <title data-testid="recipe-title">{ details.title }</title>
      <button type="button" data-testid="share-btn">Share</button>
      <button type="button" data-testid="favorite-btn">Favorite</button>
      <h3 data-testid="recipe-category">{ recipeDetails.strCategory }</h3>
      <h2
        data-testid={ `${pathname.split('/')[1]}-ingredient-name-and-measure` }
      >
        Ingredients
      </h2>
      <h3 data-testid="instructions">Instructions</h3>
      <iframe title="video" data-testid="video">Vídeo</iframe>
      <h2
        data-testid={ `${pathname.split('/')[1]}-recomendation-card` }
      >
        Recomendation

      </h2>
      <button type="button" data-testid="start-recipe-btn">Start</button>
    </div>
  );
}

RecipeDetails.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string,
  }).isRequired,
};

export default RecipeDetails;
