const FOODS_URL = 'https://www.themealdb.com/api/json/v1/1/search.php?';
const DRINKS_URL = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?';
const BY_NAME = 's=';
const BY_INGREDIENTS = 'i=';
const BY_FIRST_LETTER = 'f=';

const fetchRecipe = (recipeType) => {
  const URL = recipeType === '/comidas' ? FOODS_URL : DRINKS_URL;
  return fetch(URL)
    .then((response) => response.json())
    .then((json) => {
      const NUMBER_OF_RECIPES = 12;
      const recipes = json.meals || json.drinks;
      return recipes.splice(0, NUMBER_OF_RECIPES);
    });
};

export default fetchRecipe;
