import React, { useContext } from 'react';
import RecipesContext from '../context/RecipesContext';

function Ingredients() {
  const { ingredientsList } = useContext(RecipesContext);
  const pathname = window.location.href;
  return (
    <>
      <h2>Ingredients</h2>
      <ul
        data-testid={ `${pathname.split('/')[2]}-ingredient-name-and-measure` }
      >
        {
          ingredientsList.map((ingredient, index) => ingredient !== '  '
        && ingredient !== ' null'
        && (
          <li key={ index } data-testid={ `${index}-ingredient-name-and-measure` }>
            { ingredient }
          </li>
        ))
        }
      </ul>
    </>
  );
}

export default Ingredients;
