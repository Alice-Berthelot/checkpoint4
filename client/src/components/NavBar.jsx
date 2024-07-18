import { NavLink, useLocation } from "react-router-dom";
import logoWhite from "../assets/images/logotransparentwhite.png";
import logoDark from "../assets/images/logotransparentdark.png";
import "../styles/NavBar.css";

function NavBar() {
  const location = useLocation();
  const selectedPage = location.pathname;

  return (
    <header className={selectedPage === "/" && "header-active"}>
      <NavLink to="/">
        <img
          src={selectedPage === "/" ? logoWhite : logoDark}
          alt="retourner à la page d'accueil"
          className="logo-nav"
        />
      </NavLink>
      <nav className={selectedPage === "/" ? "nav-home" : ""}>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "nav-active" : "nav-normal")}
        >
          Accueil
        </NavLink>
        <NavLink
          to="/lawyers"
          className={({ isActive }) => (isActive ? "nav-active" : "nav-normal")}
        >
          Equipes
        </NavLink>
        <NavLink
          to="/admin"
          className={({ isActive }) => (isActive ? "nav-active" : "nav-normal")}
        >
          Administration
        </NavLink>
      </nav>
    </header>
  );
}

export default NavBar;
