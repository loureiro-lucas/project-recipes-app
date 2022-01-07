import React, { useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import RecipesContext from '../context/RecipesContext';
import { DRINKS_CATEGORIES_URL } from '../services';

function RecipeDetails({ location: { pathname } }) {
  const { recipeDetails,
    getDetails,
    isDetailsFetched,
    ingredientsList,
  } = useContext(RecipesContext);

  const details = {
    thumb: pathname.split('/')[1] === 'comidas'
      ? recipeDetails.strMealThumb : recipeDetails.strDrinkThumb,
    title: pathname.split('/')[1] === 'comidas'
      ? recipeDetails.strMeal : recipeDetails.strDrink,
  };

  useEffect(() => {
    getDetails(pathname);
  }, []);

  const renderDetails = () => (
    <div>
      <img
        data-testid="recipe-photo"
        alt="details"
        src={ details.thumb }
      />
      <h1 data-testid="recipe-title">{ details.title }</h1>
      <button type="button" data-testid="share-btn">Share</button>
      <button type="button" data-testid="favorite-btn">Favorite</button>
      <h3 data-testid="recipe-category">
        Category:
        { ` ${recipeDetails.strCategory}` }
        { pathname.split('/')[1] === 'bebidas' && (
          <h3>{ recipeDetails.strAlcoholic }</h3>
        )}
      </h3>
      <h3>Ingredients</h3>
      <ul
        data-testid={ `${pathname.split('/')[2]}-ingredient-name-and-measure` }
      >
        {
          ingredientsList.map((ingredient, index) => ingredient !== '  '
          && ingredient !== ' null'
          && (
            <li key={ index } data-testid={ `${index}-ingredient-name-and-measure` }>
              { ingredient }
            </li>
          ))
        }
      </ul>
      <h3>Instructions</h3>
      <p data-testid="instructions">{ recipeDetails.strInstructions }</p>
      { pathname.split('/')[1] === 'comidas'
        && <iframe
          src={ `https://www.youtube.com/embed/${recipeDetails.strYoutube.split('=')[1]}` }
          title="recipe-video"
          data-testid="video"
        /> }
      <h2
        data-testid={ `${pathname.split('/')[2]}-recomendation-card` }
      >
        Recomendation

      </h2>
      <button type="button" data-testid="start-recipe-btn">Start</button>
    </div>
  );

  return (
    <div>
      { isDetailsFetched && renderDetails() }
    </div>
  );
}

RecipeDetails.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string,
  }).isRequired,
};

export default RecipeDetails;
