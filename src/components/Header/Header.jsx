import React from "react";
import Navbar from "../Header/Navbar";
import BreadcrumbsWithIcon from "../Header/Breadcrumbs";
import './Header.css';

const Header = () => {
  return (
    <header className="header-container">
      <Navbar />
      <div className="center">
      <BreadcrumbsWithIcon />
      </div>
    </header>
  );
};

export default Header;
