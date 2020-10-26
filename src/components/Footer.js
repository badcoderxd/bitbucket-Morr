import React from 'react';
import '../css/footer.css';
import Fb from '../Assets/fb.png';
import Tw from '../Assets/tw.png';
import In from '../Assets/int.png';
import Ap from '../Assets/appstore.png';
import Gp from '../Assets/playstore.png';
import Mp from '../Assets/microsoftstore.png';

const Footer = () =>{
    return(
        <>
 

 <div className="footer">
        <div className="f-container">
            <div className="f-terms-b">
                <p>Home | Terms and Conditions | Privacy Policy | Collection Statement | Help | Manage Account</p>
                <p>Copyright (c) 2020 DEMO Streaming All Right Reserved</p>
            </div>
            <div className="social-logo-container">
                <div className="social-logo">
                      <img src={Fb} alt="image"/>
                      <img src={Tw} alt="image"/>
                      <img src={In} alt="image"/>
                </div>
                <div className="social-logo-two">
                    <img src={Ap} alt="image"/>
                    <img src={Gp} alt="image"/>
                    <img src={Mp} alt="image"/>
                </div>
            </div>

        </div>
    </div>

       
        </>
    );
}

export default Footer;