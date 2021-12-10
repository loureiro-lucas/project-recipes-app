import React, { useState } from 'react';
import PropTypes from 'prop-types';
import RecipesContext from './RecipesContext';
import fetchRecipes, { FOODS_URL,
  DRINKS_URL,
  BY_NAME,
  BY_INGREDIENTS,
  BY_FIRST_LETTER } from '../services';

const RecipesProvider = ({ children }) => {
  const [recipes, setRecipes] = useState([]);

  const getRecipesFromAPI = (pathname) => {
    fetchRecipes(`${pathname === '/comidas' ? FOODS_URL : DRINKS_URL}${BY_NAME}`)
      .then((response) => setRecipes(response));
  };

  const filterRecipes = (pathname, searchValue, searchBy) => {
    switch (searchBy) {
    case 'name':
      if (pathname === '/comidas') {
        fetchRecipes(FOODS_URL + BY_NAME + searchValue)
          .then((response) => setRecipes(response));
      } else {
        fetchRecipes(DRINKS_URL + BY_NAME + searchValue)
          .then((response) => setRecipes(response));
      }
      break;
    case 'ingredient':
      if (pathname === '/comidas') {
        fetchRecipes(FOODS_URL + BY_INGREDIENTS + searchValue)
          .then((response) => setRecipes(response));
      } else {
        fetchRecipes(DRINKS_URL + BY_INGREDIENTS + searchValue)
          .then((response) => setRecipes(response));
      }
      break;
    case 'first-letter':
      if (pathname === '/comidas') {
        fetchRecipes(FOODS_URL + BY_FIRST_LETTER + searchValue)
          .then((response) => setRecipes(response));
      } else {
        fetchRecipes(DRINKS_URL + BY_FIRST_LETTER + searchValue)
          .then((response) => setRecipes(response));
      }
      break;
    default:
      fetchRecipes(FOODS_URL)
        .then((response) => setRecipes(response));
      break;
    }
  };

  const context = {
    recipes,
    getRecipesFromAPI,
    filterRecipes,
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
