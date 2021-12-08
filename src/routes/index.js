import React from 'react';
import { Route } from 'react-router';

const Routes = () => (
  <>
    <Route exact path="/" component={ Login } />

    <Route exact path="/comidas" component={ Foods } />
    <Route exact path="/comidas/:id-da-receita" component={  } />
    <Route path="/comidas/:id-da-receita/in-progress" component={  } />

    <Route exact path="/bebidas" component={ Drinks } />
    <Route exact path="/bebidas/:id-da-receita" component={  } />
    <Route path="/bebidas/:id-da-receita/in-progress" component={  } />

    <Route exact path="/explorar" component={  } />
    <Route exact path="/explorar/comidas" component={  } />
    <Route path="/explorar/comidas/area" component={  } />
    <Route path="/explorar/comidas/ingredientes" component={  } />
    <Route exact path="/explorar/bebidas" component={  } />
    <Route path="/explorar/bebidas/ingredientes" component={  } />

    <Route path="/perfil" component={  } />

    <Route path="/receitas-feitas" component={  } />
    <Route path="/receitas-favoritas" component={  } />
  </>
)

export default Routes;
