import React from 'react';
import {
  BrowserRouter as Router, 
  Switch, 
  Route,
  BrowserRouter
} from "react-router-dom";
import Homepage from './components/Homepage';
import Login from './components/Login';
import './App.css';

function App() {
  return (
    <div>
          <Homepage />
        </div>
    
  );
}

export default App;
