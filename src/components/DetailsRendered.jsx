import React, { useContext, useState } from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import { Link } from 'react-router-dom';
import '@splidejs/splide/dist/css/splide.min.css';
import PropTypes from 'prop-types';
import copy from 'clipboard-copy';
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
    ingredientsList,
    recomendations,
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

      <input
        src={ isFavorite ? blackHeartIcon : whiteHeartIcon }
        type="button"
        data-testid="favorite-btn"
        onClick={ handleFavoriteBtn }
      />
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
        <h2>Recomendations</h2>
        <Splide
          options={ {
            rewind: true,
            width: 700,
            gap: '1rem',
            perPage: 2,
          } }
        >
          { recomendations.map((recomendation, index) => (
            <SplideSlide
              key={ index }
              data-testid={ `${index}-recomendation-card` }
            >
              <img
                data-testid="recipe-photo"
                alt="details"
                width="200px"
                src={ pathname.split('/')[1] === 'bebidas'
                  ? recomendation.strMealThumb : recomendation.strDrinkThumb }
              />
              <h2
                data-testid={ `${index}-recomendation-category` }
                style={ { display: 'block', width: '300px', backgroundColor: 'red' } }
              >
                Category:
                { ` ${recomendation.strCategory}` }
                <br />
                { pathname.split('/')[1] === 'bebidas' && (
                  recomendation.strAlcoholic
                )}
              </h2>
              <h1
                data-testid={ `${index}-recomendation-title` }
                style={ { display: 'block', width: '300px' } }
              >
                {
                  pathname.split('/')[1] === 'bebidas'
                    ? recomendation.strMeal : recomendation.strDrink
                }
              </h1>
            </SplideSlide>
          )) }
        </Splide>
      </div>

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
