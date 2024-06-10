import React, { useState, useRef, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";
const logo =
  "https://campustocrypto.nyc3.cdn.digitaloceanspaces.com/campustocryptologo.png";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        // Click occurred outside of the menu, hide the menu
        setShowMenu(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const hideMenu = () => {
    setShowMenu(false);
  };

  return (
    <nav>
      <div className="circle2"></div>
      <div className="navbar">
        <div className="home">
          <Link to="/">
            <img src={logo} alt="LoGo" />
          </Link>
        </div>
        <div className="navigation">
          <div
            className={`menu-icon ${showMenu ? "active" : ""}`}
            onClick={toggleMenu}
          >
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
          </div>
          <ul ref={menuRef} className={showMenu ? "active" : ""}>
            <li onClick={hideMenu}>
              <NavLink
                to="/COE"
                style={({ isActive }) => {
                  return isActive ? { color: "#D2FF3A" } : { color: "white" };
                }}
              >
                COE
              </NavLink>
            </li>
            <li onClick={hideMenu}>
              <NavLink
                to="/event"
                style={({ isActive }) => {
                  return isActive ? { color: "#D2FF3A" } : { color: "white" };
                }}
              >
                Event
              </NavLink>
            </li>
            <li onClick={hideMenu}>
              <NavLink
                to="/About"
                style={({ isActive }) => {
                  return isActive ? { color: "#D2FF3A" } : { color: "white" };
                }}
              >
                About
              </NavLink>
            </li>
            <li onClick={hideMenu}>
              <NavLink
                to="/project"
                style={({ isActive }) => {
                  return isActive ? { color: "#D2FF3A" } : { color: "white" };
                }}
              >
                Projects
              </NavLink>
            </li>
            <li onClick={hideMenu}>
              <NavLink
                to="/Community"
                style={({ isActive }) => {
                  return isActive ? { color: "#D2FF3A" } : { color: "white" };
                }}
              >
                Community
              </NavLink>
            </li>
            <li onClick={hideMenu}>
              <NavLink
                to="/contact"
                style={({ isActive }) => {
                  return isActive ? { color: "#D2FF3A" } : { color: "white" };
                }}
              >
                Contact Us
              </NavLink>
            </li>
            {/* <li onClick={hideMenu}>
              <NavLink to=''>
                <button>Contact US</button>
              </NavLink>
            </li> */}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
