import React, { useState } from 'react';
import PropTypes from 'prop-types';
import RecipesContext from './RecipesContext';
import fetchRecipes from '../services';

const RecipesProvider = ({ children }) => {
  const [recipes, setRecipes] = useState([]);

  const getRecipesFromAPI = (pathname) => {
    fetchRecipes(pathname)
      .then((response) => setRecipes(response));
  };

  const filterByPathname =  () => {
    
  }

  const filterRecipes = (pathname, searchValue, searchBy) => {
    switch (searchBy) {
    case 'name':
      if (pathname === '/comidas') {

      } else {

      }
    case 'ingredient':
      if (pathname === '/comidas') {

      } else {

      }
    case 'first-letter':
      if (pathname === '/comidas') {

      } else {

      }
    default:

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
