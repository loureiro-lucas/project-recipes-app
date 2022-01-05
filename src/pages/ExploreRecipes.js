import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

function ExploreRecipes({ location: { pathname } }) {
  const pageTitle = pathname === '/explorar/comidas'
    ? 'Explorar Comidas'
    : 'Explorar Bebidas';

  function renderExploreFoods() {
    return (
      <>
        <Link to="explorar/comidas/ingredientes">
          <button
            type="button"
            data-testid="explore-by-ingredient"
          >
            Por Ingredientes
          </button>
        </Link>

        <Link to="explorar/comidas/area">
          <button
            type="button"
            data-testid="explore-by-area"
          >
            Por Local de Origem
          </button>
        </Link>

        <button
          type="button"
          data-testid="explore-surprise"
        >
          Me Surpreenda!
        </button>
      </>
    );
  }

  function renderExploreDrinks() {
    return (
      <>
        <Link to="explorar/bebidas/ingredientes">
          <button
            type="button"
            data-testid="explore-by-ingredient"
          >
            Por Ingredientes
          </button>
        </Link>

        <Link to="explorar/bebidas/area">
          <button
            type="button"
            data-testid="explore-by-area"
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
