import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import RecipesContext from '../context/RecipesContext';
import '../styles/Recipes.css';

const FilterButtons = ({ pathname }) => {
  const [categorySelected, setCategorySelected] = useState('');

  const {
    categories,
    getRecipesFromAPI,
    filterRecipes,
  } = useContext(RecipesContext);

  const handleClickCategories = ({ target: { value } }) => {
    setCategorySelected(value);
    if (value === 'all') {
      getRecipesFromAPI(pathname);
    } else if (categorySelected === value) {
      setCategorySelected('all');
      getRecipesFromAPI(pathname);
    } else {
      filterRecipes(pathname, value, 'category');
    }
  };

  return (
    <>
      <button
        className="filter-btn"
        type="button"
        value="all"
        onClick={ handleClickCategories }
        data-testid="All-category-filter"
      >
        All
      </button>
      {
        categories.map((category) => (
          <button
            className="filter-btn"
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
