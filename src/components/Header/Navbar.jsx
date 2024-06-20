//client/components/Header/Navbar.jsx

import React from "react";
import "./Header.css";
import Menu from "./Menu";
import AvatarMenu from "./AvatarMenu";

const Navbar = () => {
  return (
    <div className="navbar-container">
      <div className="divider" />
      <div className="navbar">
        <Menu />
        <AvatarMenu />
      </div>
      <div className="divider" />
    </div>
  );
};

export default Navbar;
