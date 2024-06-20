import React from "react";
import Navbar from "../Header/Navbar";
import BreadcrumbsWithIcon from "../Header/Breadcrumbs";
// import './Header.css';

const Header = ({ pageTitle }) => {
  return (
    <header className="header-container">
      <Navbar />
      <BreadcrumbsWithIcon />
      <div className="page-title">
        <h1>{pageTitle}</h1>
      </div>
    </header>
  );
};

export default Header;
