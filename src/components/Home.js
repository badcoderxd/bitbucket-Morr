import React from 'react';
import { Link } from 'react-router-dom';
import '../css/main.css';

const Home = () =>{
    return(
        <>
        <div> 
        <div class="popular">Popular Titles</div>  
        <div class="wrapper">
    
           <div class="content"><p><Link to="/series"> Popular Series</Link></p></div>
            <div class="content"><p><Link to="/movies">Popular Movies</Link></p></div>
              
            </div>
        </div>
        </>
    );
}

export default Home;