import React from "react";
import Navbar from "../Header/Navbar";
import BreadcrumbsWithIcon from "../Header/Breadcrumbs";
import './Header.css';

const Header = () => {
  return (
    <header className="header-container">
      <Navbar />
      <BreadcrumbsWithIcon />
    </header>
  );
};

export default Header;
