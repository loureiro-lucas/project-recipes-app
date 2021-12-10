import React, { useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import Footer from '../components/Footer';
import Header from '../components/Header';
import RecipesContext from '../context/RecipesContext';
import '../styles/Recipes.css';

function Recipes({ location: { pathname } }) {
  const {
    recipes,
    getRecipesFromAPI,
  } = useContext(RecipesContext);

  useEffect(() => {
    getRecipesFromAPI(pathname);
  }, []);

  return (
    <>
      <Header pathname={ pathname } showSearchIcon />
      <div className="recipes-container">
        { recipes.map((recipe, index) => (
          <div key={ index } className="recipe-card-container">
            <img
              src={ recipe.strMealThumb || recipe.strDrinkThumb }
              alt="recipe"
              className="recipe-image"
            />
            <p>{ recipe.strMeal || recipe.strDrink }</p>
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
};

export default Recipes;
