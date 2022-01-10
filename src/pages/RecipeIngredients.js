import React, { useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import RecipesContext from '../context/RecipesContext';
import Footer from '../components/Footer';
import Header from '../components/Header';

function RecipeIngredients({ location: { pathname } }) {
  const { foodIngredients,
    setFoodIngredients,
    drinkIngredients,
    setDrinkIngredients } = useContext(RecipesContext);

  // https://www.themealdb.com/images/ingredients/{nome-do-ingrediente}.png
  // exemplo com "lime
  // https://www.themealdb.com/images/ingredients/Lime.png

  useEffect(() => {
    async function getFoodsIngredients() {
      const { meals } = await fetch('https://www.themealdb.com/api/json/v1/1/list.php?i=list')
        .then((response) => response.json());
      const NUMBER_OF_INGREDIENTS = 12;
      setFoodIngredients(meals.slice(0, NUMBER_OF_INGREDIENTS));
    }

    getFoodsIngredients();
  }, [setFoodIngredients]);

  useEffect(() => {
    async function getDrinksIngredients() {
      const { drinks } = await fetch('https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list')
        .then((response) => response.json());
      const NUMBER_OF_INGREDIENTS = 12;
      setDrinkIngredients(drinks.slice(0, NUMBER_OF_INGREDIENTS));
    }

    getDrinksIngredients();
  }, [setDrinkIngredients]);

  function exploreFoodsIngredients() {
    return (
      <div>
        { foodIngredients.map((ingredient, index) => (
          <div
            data-testid={ `${index}-ingredient-card` }
            key={ index }
          >
            <img
              data-testid={ `${index}-card-img` }
              src={ `https://www.themealdb.com/images/ingredients/${ingredient.strIngredient}-Small.png` }
              alt={ ingredient.strIngredient }
            />
            <p
              data-testid={ `${index}-card-name` }
            >
              { ingredient.strIngredient }
            </p>
          </div>
        )) }
      </div>
    );
  }

  function exploreDrinksIngredients() {
    return (
      <div>
        { drinkIngredients.map((ingredient, index) => (
          <div
            data-testid={ `${index}-ingredient-card` }
            key={ index }
          >
            <img
              data-testid={ `${index}-card-img` }
              src={ `https://www.thecocktaildb.com/images/ingredients/${ingredient.strIngredient1}-Small.png` }
              alt={ ingredient.strIngredient1 }
            />
            <p data-testid={ `${index}-card-name` }>
              { ingredient.strIngredient1 }
            </p>
          </div>
        )) }
      </div>
    );
  }

  return (
    <>
      <Header pageTitle="Explorar Ingredientes" showSearchIcon={ false } />
      { pathname === '/explorar/comidas/ingredientes'
        ? exploreFoodsIngredients() : exploreDrinksIngredients() }
      <Footer />
    </>
  );
}

RecipeIngredients.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string,
  }).isRequired,
};

export default RecipeIngredients;
