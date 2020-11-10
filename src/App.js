import React from 'react';
import {
  BrowserRouter as Router, 
  Switch, 
  Route,
  BrowserRouter
} from "react-router-dom";
import Home from './components/Homepage';
import Login from './components/Login';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
      </Switch>
    </BrowserRouter>
    
  );
}

export default App;
