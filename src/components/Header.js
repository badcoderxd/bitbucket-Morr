import React from 'react';
import '../css/header.css';

const Header = () =>{
    return(
        <>

<div className="nav-cna">
        <div className="nav-insideone">DEMO Streaming</div>
        <div className="nav-insidetwo">
            <span className="lgn-btn">Log in</span>
            <span className="trial-btn">Start your free trial</span>
        </div>
    </div>
       
        </>
    );
}

export default Header;