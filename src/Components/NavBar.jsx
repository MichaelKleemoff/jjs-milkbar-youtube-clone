
import { Link } from "react-router-dom";
import navBarLogo from "../images/yt_navBar_logo_red.png";
import "../App.css";
import "./NavBar.css";

function NavBar() {
  return (
    <header>
      <div className="container">
        <img src="src/assets/play-button-icon-png-18908.png" alt="redplaybutton" className="logo" />
        <nav>
          <ul>
            {/* Home and about href links will be added later. */}
            <li><a href="#">home</a></li>
            <li><a href="#">about</a></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default NavBar;

