import React from 'react';
import heart from '../../assets/images/heart.png';
import alien from '../../assets/images/alien-TS.webp';

function Header() {
    return (
        <header className="header">
            <div className="header-left">
                <a href="/" ><img src={alien} className="header-icon"/></a>
                
                <nav> 
                    <a href="/" className="website-title">Emily's Website!  </a>
                </nav>
            </div>
            <nav className="header-right">
                <a href="/about"> About Me! </a>
                <a href="/progress"> Learnings </a>
                <a href="/contact"> Contact </a>
            </nav>
        </header>
    )
};

export default Header;