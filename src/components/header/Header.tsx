// CSS
import "./Header.css";

// React Router DOM
import { NavLink } from "react-router-dom";

function Header(): JSX.Element {
  return (
    <header>
      <NavLink to="/">Bosh sahifa</NavLink>
      <NavLink to="/competition">Musobaqa</NavLink>
      <NavLink to="/history">Natijalar</NavLink>
      <NavLink to="/help">Yordam</NavLink>
    </header>
  );
}

export default Header;
