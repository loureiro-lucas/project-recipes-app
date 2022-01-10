import React, { useContext, useEffect } from 'react';
import RecipesContext from '../context/RecipesContext';
import Header from '../components/Header';
import Footer from '../components/Footer';

function RecipesByArea() {
  const { recipeByArea, setRecipeByArea } = useContext(RecipesContext);

  const handleChange = ({ target: { value } }) => {
    setRecipeByArea(value);
  };

  useEffect(() => {
    async function getRecipeByArea() {
      const { meals } = await fetch('https://www.themealdb.com/api/json/v1/1/list.php?a=list')
        .then((response) => response.json());
      setRecipeByArea(meals);
    }

    getRecipeByArea();
  }, [setRecipeByArea]);

  return (
    <>
      <Header pageTitle="Explorar Origem" showSearchIcon />
      <select
        data-testid="explore-by-area-dropdown"
        name="explore-by-area-dropdown"
        id="explore-by-area-dropdown"
      >
        <option
          data-testid="All-option"
          value="All"
        >
          All
        </option>

        { recipeByArea.map((option) => (
          <option
            data-testid={ `${option.strArea}-option` }
            key={ option.strArea }
            value={ option.strArea }
            onChange={ handleChange }
          >
            { option.strArea }
          </option>
        ))}
      </select>
      <Footer />
    </>
  );
}

export default RecipesByArea;
