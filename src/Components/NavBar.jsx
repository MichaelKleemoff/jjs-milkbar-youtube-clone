import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div id="header">
      <div>LOGO</div>
      <div id="homeLink">
        <Link>Home</Link>{" "}
      </div>
      <div id="aboutLink">
        <Link to="/about">About</Link>
      </div>
    </div>
  );
}

export default NavBar;
