import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import RecipesContext from '../context/RecipesContext';

const FilterButtons = ({ pathname }) => {
  const {
    categories,
    getRecipesFromAPI,
    filterRecipes,
  } = useContext(RecipesContext);

  const handleClickCategories = ({ target: { value } }) => {
    if (value === 'all') {
      getRecipesFromAPI(pathname);
    } else {
      filterRecipes(pathname, value, 'category');
    }
  };

  return (
    <>
      <button type="button" value="all" onClick={ handleClickCategories }>
        All
      </button>
      {
        categories.map((category) => (
          <button
            key={ category }
            onClick={ handleClickCategories }
            type="button"
            value={ category }
            data-testid={ `${category}-category-filter` }
          >
            {category}
          </button>
        ))
      }
    </>
  );
};

FilterButtons.propTypes = {
  pathname: PropTypes.string.isRequired,
};

export default FilterButtons;
