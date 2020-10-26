import React from 'react';
import '../css/main.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Movies from './components/Movies';

const Moviesfull = () =>{
    return(
        <>
        <Header/>
        <Movies/>
        <Footer/>
        </>
    );
}

export default Moviesfull;