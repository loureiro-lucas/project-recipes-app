import React from 'react';
import './App.css';
import { Switch } from 'react-router-dom';
import Routes from './routes';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Switch>
      <Routes />
    </Switch>
  );
}

export default App;
