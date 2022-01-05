export const FOODS_URL = 'https://www.themealdb.com/api/json/v1/1/';
export const DRINKS_URL = 'https://www.thecocktaildb.com/api/json/v1/1/';
export const MEALS_CATEGORIES_URL = 'https://www.themealdb.com/api/json/v1/1/list.php?c=list';
export const DRINKS_CATEGORIES_URL = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list';
export const BY_NAME = 'search.php?s=';
export const BY_INGREDIENTS = 'filter.php?i=';
export const BY_FIRST_LETTER = 'search.php?f=';
export const BY_CATEGORIES = 'filter.php?c=';

const fetchRecipes = (URL) => (
  fetch(URL)
    .then((response) => response.json())
    .then((json) => {
      const NUMBER_OF_RECIPES = 12;
      const recipes = json.meals || json.drinks;
      return !recipes ? undefined : recipes.slice(0, NUMBER_OF_RECIPES);
    }));

export const fetchCategories = (URL) => (
  fetch(URL)
    .then((response) => response.json())
    .then((json) => {
      const NUMBER_OF_FILTERS = 5;
      const filters = json.meals || json.drinks;
      console.log(filters);
      return !filters ? undefined : filters.slice(0, NUMBER_OF_FILTERS).map((filter) => (
        filter.strCategory
      ));
    }));

export default fetchRecipes;
