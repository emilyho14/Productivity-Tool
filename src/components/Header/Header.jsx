// import React from 'react';
// import heart from '../../assets/images/heart.png';
// import alien from '../../assets/images/alien-TS.webp';

// function Header() {
//     return (
//         <header className="header">
//             <div className="header-left">
//                 <a href="/" ><img src={alien} className="header-icon"/></a>
                
//                 <nav> 
//                     <a href="/" className="website-title">Emily's Website!  </a>
//                 </nav>
//             </div>
//             <nav className="header-right">
//                 <a href="/about"> About Me! </a>
//                 <a href="/progress"> Learnings </a>
//                 <a href="/contact"> Contact </a>
//             </nav>
//         </header>
//     )
// };

// export default Header;

import { Link } from "react-router-dom";
import alien from "../../assets/images/alien-TS.webp";

function Header() {
  return (
    <header className="header">
      <div className="header-left">
        <Link to="/Productivity-Tool">
          <img src={alien} className="header-icon" alt="Alien logo" />
        </Link>

        <nav>
          <Link to="/Productivity-Tool" className="website-title">Emily's Website!</Link>
        </nav>
      </div>

      <nav className="header-right">
        <Link to="/about">About Me!</Link>
        <Link to="/progress">Learnings</Link>
        <Link to="/contact">Contact</Link>
      </nav>
    </header>
  );
}

export default Header;
