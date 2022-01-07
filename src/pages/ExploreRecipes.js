import React, { useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import RecipesContext from '../context/RecipesContext';
import Header from '../components/Header';
import Footer from '../components/Footer';

function ExploreRecipes({ location: { pathname } }) {
  const pageTitle = pathname === '/explorar/comidas'
    ? 'Explorar Comidas'
    : 'Explorar Bebidas';

  const { randomMeal,
    setRandomMeal,
    randomDrink,
    setRandomDrink } = useContext(RecipesContext);

  useEffect(() => {
    async function getRandomMeal() {
      const { meals } = await fetch('https://www.themealdb.com/api/json/v1/1/random.php')
        .then((response) => response.json());
      setRandomMeal(meals[0].idMeal);
    }

    getRandomMeal();
  }, []);

  useEffect(() => {
    async function getRandomDrink() {
      const { drinks } = await fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php')
        .then((response) => response.json());
      setRandomDrink(drinks[0].idDrink);
    }
    getRandomDrink();
  }, []);

  function renderExploreFoods() {
    return (
      <>
        <Link to="/explorar/comidas/ingredientes">
          <button
            type="button"
            data-testid="explore-by-ingredient"
          >
            Por Ingredientes
          </button>
        </Link>

        <Link to="/explorar/comidas/area">
          <button
            type="button"
            data-testid="explore-by-area"
          >
            Por Local de Origem
          </button>
        </Link>

        <Link to={ `/comidas/${randomMeal}` }>
          <button
            type="button"
            data-testid="explore-surprise"
          >
            Me Surpreenda!
          </button>
        </Link>
      </>
    );
  }

  function renderExploreDrinks() {
    return (
      <>
        <Link to="/explorar/bebidas/ingredientes">
          <button
            type="button"
            data-testid="explore-by-ingredient"
          >
            Por Ingredientes
          </button>
        </Link>

        <Link to={ `/bebidas/${randomDrink}` }>
          <button
            type="button"
            data-testid="explore-surprise"
          >
            Me Surpreenda!
          </button>
        </Link>

      </>
    );
  }

  return (
    <>
      <Header pageTitle={ pageTitle } showSearchIcon={ false } />
      { pathname === '/explorar/comidas' ? renderExploreFoods() : renderExploreDrinks()}
      <Footer />
    </>
  );
}

ExploreRecipes.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string,
  }).isRequired,
};

export default ExploreRecipes;
