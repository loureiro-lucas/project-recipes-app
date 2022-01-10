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
} from '../services';

const RecipesProvider = ({ children }) => {
  const NUMBER_OF_RECIPES = 12;
  const NUMBER_OF_RECOMENDATIONS = 6;

  const [recipes, setRecipes] = useState([]);
  const [categories, setCategories] = useState([]);

  const [isSearchBarShown, setIsSearchBarShown] = useState(false);
  const [recipeDetails, setRecipeDetails] = useState({});

  const [randomMealId, setRandomMealId] = useState({});
  const [randomDrinkId, setRandomDrinkId] = useState({});

  const [isDetailsFetched, setIsDetailsFetched] = useState(false);
  const [ingredientsList, setIngredientsList] = useState([]);

  const [recomendations, setRecomendations] = useState([]);

  const [foodIngredients, setFoodIngredients] = useState([]);
  const [drinkIngredients, setDrinkIngredients] = useState([]);

  const getRecipesFromAPI = (pathname) => {
    fetchRecipes(`${pathname === '/comidas' ? FOODS_URL : DRINKS_URL}${BY_NAME}`)
      .then((response) => setRecipes(response.slice(0, NUMBER_OF_RECIPES)));
  };

  const getRecomendations = (pathname) => {
    fetchRecipes(`${pathname.split('/')[1] === 'comidas'
      ? DRINKS_URL : FOODS_URL}${BY_NAME}`)
      .then((response) => setRecomendations(response.slice(0, NUMBER_OF_RECOMENDATIONS)));
  };

  const getIngredients = (pathname, details) => {
    const MEALS_INGREDIENTS_LIMIT = 20;
    const DRINKS_INGREDIENTS_LIMIT = 15;
    const verification = pathname.split('/')[1] === 'comidas'
      ? MEALS_INGREDIENTS_LIMIT
      : DRINKS_INGREDIENTS_LIMIT;
    const ingredients = [];
    for (let index = 1; index <= verification; index += 1) {
      const measure = details[`strMeasure${index}`] !== null
        ? details[`strMeasure${index}`] : '';
      const ingredient = details[`strIngredient${index}`];
      ingredients.push(
        `${measure} ${ingredient}`,
      );
    }
    setIngredientsList(ingredients);
  };

  const getDetails = async (pathname) => {
    const details = await fetchDetails(
      `${pathname.split('/')[1] === 'comidas'
        ? FOODS_URL
        : DRINKS_URL}${RECIPE_DETAILS}${pathname.split('/')[2]}`,
    );
    await setRecipeDetails(details[0]);
    await getIngredients(pathname, details[0]);
    await setIsDetailsFetched(true);
    await getRecomendations(pathname);
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
        setRecipes(response.slice(0, NUMBER_OF_RECIPES));
        return response;
      })
  );

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
    randomMealId,
    setRandomMealId,
    randomDrinkId,
    setRandomDrinkId,
    isDetailsFetched,
    ingredientsList,
    recomendations,
    foodIngredients,
    setFoodIngredients,
    drinkIngredients,
    setDrinkIngredients,
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
