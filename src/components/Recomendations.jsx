import React, { useContext } from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import RecipesContext from '../context/RecipesContext';
import '@splidejs/splide/dist/css/splide.min.css';

function Recomendations() {
  const { recomendations } = useContext(RecipesContext);
  const pathname = window.location.href;

  return (
    <>
      <h2>Recomendations</h2>
      <Splide
        options={ {
          rewind: true,
          width: 700,
          gap: '1rem',
          perPage: 2,
        } }
      >
        { recomendations.map((recomendation, index) => (
          <SplideSlide
            key={ index }
            data-testid={ `${index}-recomendation-card` }
          >
            <img
              data-testid="recipe-photo"
              alt="details"
              width="200px"
              src={ recomendation.strMealThumb || recomendation.strDrinkThumb }
            />
            <h1
              data-testid={ `${index}-recomendation-title` }
              style={ { display: 'block', width: '300px' } }
            >
              { recomendation.strMeal || recomendation.strDrink }
            </h1>
            <p
              data-testid={ `${index}-recomendation-category` }
              style={ { display: 'block', width: '300px', backgroundColor: 'red' } }
            >
              Category:
              { ` ${recomendation.strCategory}` }
              <br />
              { pathname.split('/')[1] === 'bebidas' && (
                recomendation.strAlcoholic
              )}
            </p>
          </SplideSlide>
        )) }
      </Splide>
    </>
  );
}

export default Recomendations;
