import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import copy from 'clipboard-copy';
import Ingredients from './Ingredients';
import Recomendations from './Recomendations';
import RecipesContext from '../context/RecipesContext';
import shareIcon from '../images/shareIcon.svg';
import whiteHeartIcon from '../images/whiteHeartIcon.svg';
import blackHeartIcon from '../images/blackHeartIcon.svg';

const DetailsRendered = ({ isRecipeDone,
  isRecipeInProgress,
  pathname,
  isFavorite,
  addToFavorites,
  removeFromFavorites }) => {
  const [isLinkCopied, setIsLinkCopied] = useState(false);

  const {
    recipeDetails,
  } = useContext(RecipesContext);

  const details = {
    thumb: pathname.split('/')[1] === 'comidas'
      ? recipeDetails.strMealThumb : recipeDetails.strDrinkThumb,
    title: pathname.split('/')[1] === 'comidas'
      ? recipeDetails.strMeal : recipeDetails.strDrink,
  };

  const copyRecipe = () => {
    setIsLinkCopied(!isLinkCopied);
    // Referencia retirada => https://blog.dadops.co/2021/03/17/copy-and-paste-in-a-react-app/
    copy(window.location.href);
  };

  const handleFavoriteBtn = () => {
    if (!isFavorite) {
      addToFavorites();
    } else {
      removeFromFavorites();
    }
  };

  return (
    <div>
      <img
        data-testid="recipe-photo"
        alt="details"
        src={ details.thumb }
      />
      <h1 data-testid="recipe-title">{ details.title }</h1>
      <button type="button" data-testid="share-btn" onClick={ copyRecipe }>
        <img src={ shareIcon } alt="share" />
      </button>
      <button
        type="button"
        onClick={ handleFavoriteBtn }
      >
        <img
          src={ isFavorite ? blackHeartIcon : whiteHeartIcon }
          data-testid="favorite-btn"
          alt="favorite"
        />
      </button>
      { isLinkCopied && (
        <div>Link copiado!</div>
      ) }
      <h2 data-testid="recipe-category">
        Category:
        { ` ${recipeDetails.strCategory}` }
        <br />
        { pathname.split('/')[1] === 'bebidas' && (
          recipeDetails.strAlcoholic
        )}
      </h2>
      <Ingredients />
      <h2>Instructions</h2>
      <p data-testid="instructions">{ recipeDetails.strInstructions }</p>
      { pathname.split('/')[1] === 'comidas'
        && <iframe
          src={ `https://www.youtube.com/embed/${recipeDetails.strYoutube.split('=')[1]}` }
          title="recipe-video"
          data-testid="video"
        /> }
      <Recomendations />
      <Link to={ `${pathname}/in-progress` }>
        <button
          type="button"
          className="start-recipe"
          data-testid="start-recipe-btn"
          style={ isRecipeDone && { display: 'none' } }
        >
          { isRecipeInProgress ? 'Continuar Receita' : 'Iniciar Receita' }
        </button>
      </Link>
    </div>
  );
};

DetailsRendered.propTypes = {
  isRecipeDone: PropTypes.bool.isRequired,
  isRecipeInProgress: PropTypes.bool.isRequired,
  pathname: PropTypes.string.isRequired,
  isFavorite: PropTypes.bool.isRequired,
  addToFavorites: PropTypes.func.isRequired,
  removeFromFavorites: PropTypes.func.isRequired,
};

export default DetailsRendered;
