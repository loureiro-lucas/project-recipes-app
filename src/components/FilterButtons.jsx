import React, { useContext } from 'react';
import RecipesContext from '../context/RecipesContext';

const FilterButtons = () => {
  const { categories } = useContext(RecipesContext);
  // console.log(categories);
  return (
    <>
      <button type="button">
        All
      </button>
      {
        categories.map((categorie) => (
          <button key={ categorie } type="button">
            {categorie}
          </button>
        ))
      }
    </>
  );
};
// data-testid={ `${categoryName}-category-filter` }

export default FilterButtons;
