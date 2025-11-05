import React from 'react';
import heart from '../../assets/images/heart.png'

function Header() {
    return (
        <header className="header">
            <div className="header-left">
                <a href="/" ><img src={heart} className="header-heart"/></a>
                
                <nav> 
                    <a href="/" className="website-title">Emily's Website!  </a>
                </nav>
                {/* <h1 className="website-title">Emily's Website!</h1> */}
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