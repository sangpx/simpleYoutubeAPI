import "./Nav.css";
import { Link, NavLink } from "react-router-dom";
import YoutubeLogo from "../views/youtube-logo.png";

const Nav = () => {
  return (
    <div className="topnav">
      <NavLink activeClassName="active1" exact to="/">
        <img src={YoutubeLogo} alt="Youtube Logo" className="youtube-logo" />
      </NavLink>
    </div>
  );
};

export default Nav;
