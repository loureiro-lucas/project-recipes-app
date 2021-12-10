export const FOODS_URL = 'https://www.themealdb.com/api/json/v1/1/';
export const DRINKS_URL = 'https://www.thecocktaildb.com/api/json/v1/1/';
export const BY_NAME = 'search.php?s=';
export const BY_INGREDIENTS = 'filter.php?i=';
export const BY_FIRST_LETTER = 'search.php?f=';

const fetchRecipes = (URL) => (
  fetch(URL)
    .then((response) => response.json())
    .then((json) => {
      const NUMBER_OF_RECIPES = 12;
      const recipes = json.meals || json.drinks;
      return !recipes ? undefined : recipes.splice(0, NUMBER_OF_RECIPES);
    }));

export default fetchRecipes;
