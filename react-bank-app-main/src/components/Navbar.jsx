import "./Navbar.css";
import { FcMenu } from "react-icons/fc";
import { navLinks } from "../utils/index";
import { useState } from "react";

const Navbar = () => {
  const [menu, setMenu] = useState(false);

  return (
    <div className="navbar-container">
      <div className="navbar-content">
        <div className="navbar-logo">
          <h2 className="logo-text">Naseem.</h2>
        </div>

        <div className="menu-container">
          <ul className={`menu-items ${menu ? "menu-open" : "menu-closed"}`}>
            {navLinks.map((item) => (
              <li key={item.id}>
                <a href={`#${item.id}`} className="menu-link">
                  {item.title}
                </a>
              </li>
            ))}
          </ul>
          <FcMenu className="menu-icon" onClick={() => setMenu(!menu)} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
