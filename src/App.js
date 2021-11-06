import React from 'react';
import {  Switch, Route } from "react-router-dom";

import Home from "./pages/Home";
import Beers from './pages/Beers';
import SingleBeer from './pages/SingleBeer';
import RandomBeer from './pages/RandomBeer';
import CreateBeer from './pages/CreateBeer';



import Header from "./components/Header";

import './App.css';

function App() {
  return (
    <div className="App">
    
      <Switch>
        <Route  exact path="/" component={Home}/>
        {/* <Header> */}
        <Route exact path="/random-beer" component={RandomBeer}/>

        <Route exact path="/beers" component={Beers} />

        <Route exact path="/new-beer" component={CreateBeer} />

        <Route path="/beers/:id" component={SingleBeer}/>

        {/* </Header> */}
      </Switch>
    </div>
  );
}

export default App;
