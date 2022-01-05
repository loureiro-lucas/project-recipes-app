import React, { useContext } from 'react';
import RecipesContext from '../context/RecipesContext';

const FilterButtons = ({  pathname  }) => {
  const { categories,
    recipes,
    getRecipesFromAPI } = useContext(RecipesContext);

  const handleClick = ({ target: { value } }) => {
    if (value === 'all') {
      getRecipesFromAPI(pathname);
    } else {
      // setRecipes(recipes.filter(({ strCategory }) => strCategory === value));
    }
  };

  // console.log(categories);
  return (
    <>
      <button type="button" value="all" onClick={ handleClick }>
        All
      </button>
      {
        categories.map((category) => (
          <button
            key={ category }
            onClick={ handleClick }
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
// data-testid={ `${categoryName}-category-filter` }

export default FilterButtons;
