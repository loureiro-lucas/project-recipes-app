import React from 'react';
import { Route } from 'react-router';
import * as pages from '../pages';

const Routes = () => (
  <>
    <Route exact path="/" render={ (props) => <pages.Login { ...props } /> } />

    <Route exact path="/comidas" component={ pages.Foods } />
    <Route exact path="/comidas/:id-da-receita" component={ pages.RecipeDetails } />
    <Route
      path="/comidas/:id-da-receita/in-progress"
      component={ pages.RecipeInProgress }
    />

    <Route exact path="/bebidas" component={ pages.Drinks } />
    <Route exact path="/bebidas/:id-da-receita" component={ pages.RecipeDetails } />
    <Route
      path="/bebidas/:id-da-receita/in-progress"
      component={ pages.RecipeInProgress }
    />

    <Route exact path="/explorar" component={ pages.Explore } />
    <Route exact path="/explorar/comidas" component={ pages.ExploreFoods } />
    <Route path="/explorar/comidas/area" component={ pages.RecipesByArea } />
    <Route path="/explorar/comidas/ingredientes" component={ pages.RecipeIngredients } />
    <Route exact path="/explorar/bebidas" component={ pages.ExploreDrinks } />
    <Route path="/explorar/bebidas/ingredientes" component={ pages.RecipeIngredients } />

    <Route path="/perfil" component={ pages.Profile } />

    <Route path="/receitas-feitas" component={ pages.RecipesDone } />
    <Route path="/receitas-favoritas" component={ pages.Favorites } />
  </>
);

export default Routes;
