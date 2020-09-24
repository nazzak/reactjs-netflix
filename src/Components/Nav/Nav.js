import React, { useEffect, useState } from "react";
import "./Nav.css";

const Nav = () => {
  const [show, handleShow] = useState(false);

  useEffect(() => {
    // add a listener to the scroll in Y
    // display the background if scroll in Y > 100 px
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else {
        handleShow(false);
      }
    });
    // return a cleanup
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);

  return (
    <div className={`nav ${show && "nav__black"}`}>
      <img
        className="nav__logo"
        src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
        alt="Netflix Logo"
      />
      <img className="nav__avatar" src="logo512.png" alt="Netflix Logo" />
    </div>
  );
};

export default Nav;
