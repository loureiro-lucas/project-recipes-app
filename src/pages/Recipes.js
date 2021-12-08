import React from 'react';
import PropTypes from 'prop-types';
import Footer from '../components/Footer';
import Header from '../components/Header';

function Recipes({ location: { pathname } }) {
  const pageTitle = pathname === '/comidas' ? 'Comidas' : 'Bebidas';

  return (
    <>
      <Header pageTitle={ pageTitle } showSearch />
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
