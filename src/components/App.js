import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from './Header';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />

      <Switch>
        <Route path="/" />
      </Switch>
    </div>
  );
}

export default App;
