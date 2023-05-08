import React, { useState, useEffect } from "react";
import useAuth from "../../hooks/useAuth";
import { isObjNotNull } from "../../helpers";
import { Link } from "react-router-dom";
import "./style.css";

const Navbar = () => {
  const [href, setHref] = useState([
    {
      title: "HOME",
      url: "/",
    },
    {
      title: "CONTACT",
      url: "contact",
    },
    {
      title: "LOGIN",
      url: "login",
    },
  ]);

  const [loginHref, setLoginHref] = useState([
    {
      title: "HOME",
      url: "/",
    },
    {
      title: "CONTACT",
      url: "contact",
    },
    {
      title: "EDIT",
      url: "edit",
    },
  ]);

  const [click, setClick] = useState(false);
  const [userName, setUserName] = useState("");
  const { auth, setAuth } = useAuth();

  const handleClick = () => {
    setClick(!click);
  };

  const handleLogout = () => {
    localStorage.removeItem("user");
    setAuth({});
  };

  useEffect(() => {}, []);

  return (
    <nav className="NavbarItems">
      <h1 className="navbar-logo">
        Bl<i className="fa-solid fa-hippo"></i>g
      </h1>
      <div className="menu-icon" onClick={handleClick}>
        <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
      </div>
      <ul className={click ? "nav-menu active" : "nav-menu"}>
        {isObjNotNull(auth)
          ? loginHref.map((item, index) => {
              return (
                <li key={index}>
                  <Link className="nav-links" to={item.url}>
                    {item.title}
                  </Link>
                </li>
              );
            })
          : href.map((item, index) => {
              return (
                <li key={index}>
                  <Link className="nav-links" to={item.url}>
                    {item.title}
                  </Link>
                </li>
              );
            })}
        {isObjNotNull(auth) ? (
          <li key={loginHref.length + 1}>
            <Link className="nav-links" onClick={handleLogout}>
              LOGOUT
            </Link>
          </li>
        ) : null}
        {auth?.user?.name ? (
          <li>
            <span className="nav-links">{auth?.user?.name}</span>
          </li>
        ) : null}
      </ul>
    </nav>
  );
};

export default Navbar;
