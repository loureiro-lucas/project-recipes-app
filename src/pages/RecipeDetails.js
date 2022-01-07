import React, { useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import RecipesContext from '../context/RecipesContext';
import '../styles/RecipeDetails.css';

function RecipeDetails({ location: { pathname } }) {
  const { recipeDetails,
    getDetails,
    isDetailsFetched,
    ingredientsList,
    recomendations,
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
      <h2 data-testid="recipe-category">
        Category:
        { ` ${recipeDetails.strCategory}` }
        <br />
        { pathname.split('/')[1] === 'bebidas' && (
          recipeDetails.strAlcoholic
        )}
      </h2>
      <h2>Ingredients</h2>
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
      <h2>Instructions</h2>
      <p data-testid="instructions">{ recipeDetails.strInstructions }</p>
      { pathname.split('/')[1] === 'comidas'
        && <iframe
          src={ `https://www.youtube.com/embed/${recipeDetails.strYoutube.split('=')[1]}` }
          title="recipe-video"
          data-testid="video"
        /> }
      <div>
        Recomendations
        { recomendations.map((recomendation, index) => (
          <div key={ index } data-testid={ `${index}-recomendation-card` }>
            <img
              data-testid="recipe-photo"
              alt="details"
              src={ pathname.split('/')[1] === 'bebidas'
                ? recomendation.strMealThumb : recomendation.strDrinkThumb }
            />
            <h2 data-testid={ `${index}-recomendation-category` }>
              Category:
              { ` ${recomendation.strCategory}` }
              <br />
              { pathname.split('/')[1] === 'bebidas' && (
                recomendation.strAlcoholic
              )}
            </h2>
            <h1 data-testid={ `${index}-recomendation-title` }>
              {
                pathname.split('/')[1] === 'bebidas'
                  ? recomendation.strMeal : recomendation.strDrink
              }
            </h1>
          </div>
        )) }
      </div>
      <button
        type="button"
        id="start-recipe-button"
        data-testid="start-recipe-btn"
      >
        Iniciar Receita
      </button>
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
