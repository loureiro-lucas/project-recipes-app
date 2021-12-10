import React from 'react';
import { Switch } from 'react-router-dom';
import Routes from './routes';
import RecipesProvider from './context/RecipesProvider';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <RecipesProvider>
      <Switch>
        <Routes />
      </Switch>
    </RecipesProvider>
  );
}

export default App;
