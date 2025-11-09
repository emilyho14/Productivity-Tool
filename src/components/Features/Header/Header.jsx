import { Link } from "react-router-dom";
import alien from "../../../assets/images/alien-TS.webp";

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
        <Link to="/productivity-tools">Tools</Link>
        <Link to="/progress">Learnings</Link>
        <Link to="/contact">Contact</Link>
      </nav>
    </header>
  );
}

export default Header;
