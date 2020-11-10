import React from 'react';
import {
  BrowserRouter as Router, 
  Switch, 
  Route
} from "react-router-dom";
import Homepage from './components/Homepage';
import Login from './components/Login';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Homepage />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
      </Switch>
    </BrowserRouter>
    
  );
}

export default App;
