import React from 'react';

import Home from './components/Home'
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Series from './components/Series';
import Movies from './components/Movies';
import { BrowserRouter, Route, Switch } from 'react-router-dom';


const App =() => {
  return (
    <>
    <Header/>
  <BrowserRouter>
  <Switch>
    <Route exact path="/" component ={Home}/>
    <Route exact path="/series" component ={Series}/>
    <Route exact path="/movies" component ={Movies}/>
  </Switch>
  </BrowserRouter>
    <Footer/>
    </>
);
};

export default App;
