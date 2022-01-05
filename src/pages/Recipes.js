import React, { useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import Footer from '../components/Footer';
import Header from '../components/Header';
import FilterButtons from '../components/FilterButtons';
import RecipesContext from '../context/RecipesContext';
import '../styles/Recipes.css';

function Recipes({ location: { pathname } }) {
  const {
    recipes,
    getRecipesFromAPI,
    isSearchBarShown,
    getCategoriesFromAPI,
  } = useContext(RecipesContext);

  useEffect(() => {
    getRecipesFromAPI(pathname);
    getCategoriesFromAPI(pathname);
  }, []);

  useEffect(() => {
    if (recipes === undefined) {
      global.alert(
        'Sinto muito, não encontramos nenhuma receita para esses filtros.',
      );
    }
  }, [recipes]);

  console.log(recipes);

  return (
    <>
      <Header
        pathname={ pathname }
        pageTitle={ pathname === '/comidas' ? 'Comidas' : 'Bebidas' }
        showSearchIcon
      />
      { !isSearchBarShown && (
        <FilterButtons pathname={ pathname } />
      )}
      <div className="recipes-container">
        { recipes && recipes.map((recipe, index) => (
          <div
            key={ index }
            className="recipe-card-container"
            data-testid={ `${index}-recipe-card` }
          >
            <img
              src={ recipe.strMealThumb || recipe.strDrinkThumb }
              alt="recipe"
              className="recipe-image"
              data-testid={ `${index}-card-img` }
            />
            <p data-testid={ `${index}-card-name` }>
              { recipe.strMeal || recipe.strDrink }
            </p>
          </div>
        )) }
      </div>
      <Footer />
    </>
  );
}

Recipes.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string,
  }).isRequired,
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};

export default Recipes;
