import { Link, NavLink } from "react-router-dom";

function Navbar() {
  return (
    <header>
      <nav className="navbar">
        <Link to="/" className="title">
          MixMaster
        </Link>
        <div className="flex">
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "link active" : "link")}
          >
            Home
          </NavLink>
          <NavLink
            to="about"
            className={({ isActive }) => (isActive ? "link active" : "link")}
          >
            About
          </NavLink>
          <NavLink
            to="newsletter"
            className={({ isActive }) => (isActive ? "link active" : "link")}
          >
            Newsletter
          </NavLink>
        </div>
      </nav>
    </header>
  );
}
export default Navbar;
