import React, { useState } from 'react';
import PropTypes from 'prop-types';
import RecipesContext from './RecipesContext';
import fetchRecipes, { FOODS_URL,
  DRINKS_URL,
  BY_NAME,
  BY_INGREDIENTS,
  BY_FIRST_LETTER,
  BY_CATEGORIES,
  fetchCategories,
  MEALS_CATEGORIES_URL,
  DRINKS_CATEGORIES_URL,
  fetchDetails,
  RECIPE_DETAILS,
  GET_RANDOM } from '../services';

const RecipesProvider = ({ children }) => {
  const [recipes, setRecipes] = useState([]);
  const [categories, setCategories] = useState([]);

  const [randomMealOrDrink, setRandomMealOrDrink] = useState([{}]);

  const [isSearchBarShown, setIsSearchBarShown] = useState(false);
  const [recipeDetails, setRecipeDetails] = useState([]);

  const getRecipesFromAPI = (pathname) => {
    fetchRecipes(`${pathname === '/comidas' ? FOODS_URL : DRINKS_URL}${BY_NAME}`)
      .then((response) => setRecipes(response));
  };

  const getDetails = (pathname) => {
    console.log(pathname);
    fetchDetails(`${pathname === '/comidas' ? FOODS_URL : DRINKS_URL}${RECIPE_DETAILS}`)
      .then((response) => setRecipeDetails(response));
  };

  const getCategoriesFromAPI = (pathname) => {
    fetchCategories(`${pathname === '/comidas'
      ? MEALS_CATEGORIES_URL
      : DRINKS_CATEGORIES_URL}`)
      .then((response) => setCategories(response));
  };

  const filters = (pathname, searchValue, searchBy) => {
    switch (searchBy) {
    case 'name':
      if (pathname === '/comidas') {
        return fetchRecipes(FOODS_URL + BY_NAME + searchValue);
      } return fetchRecipes(DRINKS_URL + BY_NAME + searchValue);

    case 'ingredient':
      if (pathname === '/comidas') {
        return fetchRecipes(FOODS_URL + BY_INGREDIENTS + searchValue);
      } return fetchRecipes(DRINKS_URL + BY_INGREDIENTS + searchValue);

    case 'first-letter':
      if (pathname === '/comidas') {
        return fetchRecipes(FOODS_URL + BY_FIRST_LETTER + searchValue);
      } return fetchRecipes(DRINKS_URL + BY_FIRST_LETTER + searchValue);

    case 'category':
      if (pathname === '/comidas') {
        return fetchRecipes(FOODS_URL + BY_CATEGORIES + searchValue);
      } return fetchRecipes(DRINKS_URL + BY_CATEGORIES + searchValue);

    default:
      return fetchRecipes(FOODS_URL);
    }
  };

  const filterRecipes = (pathname, searchValue, searchBy) => (
    filters(pathname, searchValue, searchBy)
      .then((response) => {
        setRecipes(response);
        return response;
      })
  );

  const getRandom = (pathname) => {
    fetchRecipes(`${pathname === '/comidas' ? FOODS_URL : DRINKS_URL}${GET_RANDOM}`)
      .then((response) => setRandomMealOrDrink(response));
  };

  const context = {
    recipes,
    getRecipesFromAPI,
    filterRecipes,
    isSearchBarShown,
    setIsSearchBarShown,
    categories,
    getCategoriesFromAPI,
    recipeDetails,
    getDetails,
    randomMealOrDrink,
    setRandomMealOrDrink,
    getRandom,
  };

  return (
    <RecipesContext.Provider value={ context }>
      { children }
    </RecipesContext.Provider>
  );
};

RecipesProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default RecipesProvider;
