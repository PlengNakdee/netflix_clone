import React, { useEffect, useState } from "react";
import "./Nav.css";
import logo from "./clone.png";

function Nav() {
  const [show, handleShow] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else handleShow(false);
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);

  return (
    <div className={`nav ${show && "nav__black"}`}>
      <img className="nav__logo" src={logo} alt="netflix logo" />
      <img
        className="nav__avatar"
        src="https://avatars.dicebear.com/api/avataaars/52.svg"
        alt="avatar"
      />
    </div>
  );
}

export default Nav;
