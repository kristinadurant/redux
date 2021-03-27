import './App.css';
import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Home, Login } from './pages';

function App() {
  return (  
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/login' component={Login} />
        </Switch>
      </BrowserRouter>
  );
}

export default App;
