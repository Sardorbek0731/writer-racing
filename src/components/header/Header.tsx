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
        <img src={logo} className="logo" alt="Writer Racing Logo" />

        <nav className="navbar">
          <NavLink to="/">Bosh sahifa</NavLink>
          <NavLink to="/competition">Musobaqa</NavLink>
          <NavLink to="/history">Natijalar</NavLink>
          <NavLink to="/help">Yordam</NavLink>
        </nav>
      </div>
    </header>
  );
}

export default Header;
