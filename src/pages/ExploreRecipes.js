import React from 'react';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import Footer from '../components/Footer';

function ExploreRecipes({ location: { pathname } }) {
  const pageTitle = pathname === '/explorar/comidas'
    ? 'Explorar Comidas'
    : 'Explorar Bebidas';

  return (
    <>
      <Header pageTitle={ pageTitle } showSearch={ false } />
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
