import React, { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import RecipesContext from '../context/RecipesContext';
import DetailsRendered from '../components/DetailsRendered';
import '../styles/RecipeDetails.css';

function RecipeDetails({ location: { pathname } }) {
  const [isRecipeDone, setIsRecipeDone] = useState(false);
  const [isRecipeInProgress, setIsRecipeInProgress] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);

  const {
    getDetails,
    isDetailsFetched,
    recipeDetails,
    // setRecipesDone,
    // setRecipesInProgress,
  } = useContext(RecipesContext);

  const getFavoritesFromStorage = () => (
    JSON.parse(localStorage.getItem('favoriteRecipes' || [])));

  const addToFavorites = () => {
    const currentFavorites = getFavoritesFromStorage() || [];
    console.log('add');
    console.log(currentFavorites);
    localStorage.setItem('favoriteRecipes', JSON.stringify([
      ...currentFavorites,
      {
        id: recipeDetails.idMeal || recipeDetails.idDrink,
        type: recipeDetails.idMeal ? 'comida' : 'bebida',
        area: recipeDetails.strArea || '',
        category: recipeDetails.strCategory || '',
        alcoholicOrNot: recipeDetails.strAlcoholic || '',
        name: recipeDetails.strMeal || recipeDetails.strDrink,
        image: recipeDetails.strMealThumb || recipeDetails.strDrinkThumb,
      }]));

    setIsFavorite(!isFavorite);
  };

  const removeFromFavorites = () => {
    const currentFavorites = getFavoritesFromStorage() || [];
    console.log('remove');
    console.log(currentFavorites);
    const listWithoutItem = currentFavorites
      .map(({ id }) => (
        id !== pathname.split('/')[2]));
    localStorage.setItem('favoriteRecipes', JSON.stringify(listWithoutItem));

    setIsFavorite(!isFavorite);
  };

  const checkIfIsFavorite = () => {
    const currentFavorites = getFavoritesFromStorage() || [];
    const isThisRecipeFavorite = currentFavorites
      .find(({ id }) => (
        id === pathname.split('/')[2]));
    setIsFavorite(isThisRecipeFavorite);
  };

  const checkIfWasRecipeDone = (doneRecipesList) => {
    const isThisRecipeDone = doneRecipesList
      .find(({ id }) => (
        id === pathname.split('/')[2]));
    setIsRecipeDone(isThisRecipeDone);
  };

  const checkIfIsRecipeInProgress = (recipesInProgressList) => {
    const isThisRecipeInProgress = Object
      .keys(recipesInProgressList.meals || recipesInProgressList.cocktails)
      .find((key) => (key === pathname.split('/')[2]));
    setIsRecipeInProgress(isThisRecipeInProgress);
  };

  const getRecipesFromStorage = () => {
    const doneRecipes = JSON.parse(localStorage.getItem('doneRecipes'));
    const inProgressRecipes = JSON.parse(localStorage.getItem('inProgressRecipes'));
    // setRecipesDone(doneRecipes || []);
    // setRecipesInProgress(inProgressRecipes || []);
    checkIfWasRecipeDone(doneRecipes || []);
    checkIfIsRecipeInProgress(inProgressRecipes || { meals: {} });
    checkIfIsFavorite();
  };

  useEffect(() => {
    getDetails(pathname);
    getRecipesFromStorage();
    checkIfIsFavorite();
  }, []);

  const renderDetails = () => (
    <DetailsRendered
      isRecipeDone={ isRecipeDone }
      isRecipeInProgress={ isRecipeInProgress }
      pathname={ pathname }
      isFavorite={ isFavorite }
      addToFavorites={ addToFavorites }
      removeFromFavorites={ removeFromFavorites }
    />
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
