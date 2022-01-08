
import './App.css';
import Home from './Component/Home/Home/Home';

import React from "react";

import {
  BrowserRouter as Router,
  Switch,
  Route,

} from "react-router-dom";
import AboutUs from './Component/AboutUs/AboutUs';
import Notfound from './Component/Notfound/Notfound';


function App() {
  return (
    <div className="App">
       <Router>
       <Switch>
          <Route exact  path="/">
            <Home />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/aboutus">
            <AboutUs />
          </Route>
          <Route exact  path="*">
            <Notfound />
          </Route>
        </Switch>
       </Router>
    </div>
  );
}

export default App;
