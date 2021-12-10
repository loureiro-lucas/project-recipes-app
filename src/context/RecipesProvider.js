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

    default:
      return fetchRecipes(FOODS_URL);
    }
  };

  const filterRecipes = (pathname, searchValue, searchBy) => {
    return filters(pathname, searchValue, searchBy)
      .then((response) => {
        setRecipes(response);
        return response;
      });
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
