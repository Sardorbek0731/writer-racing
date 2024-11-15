// CSS
import "./Header.css";

// React Router DOM
import { NavLink } from "react-router-dom";

// Images
import logo from "../../assets/logo/logo.png";

function Header(): JSX.Element {
  return (
    <header>
      <div className="container flex alignCenter justifyBetween">
        <div className="logo flex alignCenter">
          <img src={logo} alt="Writer Racing Logo" />
          <h1>Racer</h1>
        </div>

        <nav className="navbar">
          <NavLink to="/">Bosh sahifa</NavLink>
          <NavLink to="/competition">Musobaqalar</NavLink>
          <NavLink to="/history">Natijalar</NavLink>
          <NavLink to="/help">Yordam</NavLink>
        </nav>
      </div>
    </header>
  );
}

export default Header;
