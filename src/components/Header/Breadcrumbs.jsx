//client/src/components/Header/Breadcrumbs.jsx
import React from "react";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import SquareIcon from "@mui/icons-material/Square";
import { useLocation } from "react-router-dom";
import "./Header.css";

function BreadcrumbsWithIcon() {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);

  return (
    <Breadcrumbs
      className="breadcrumbs-container"
      separator="/"
      aria-label="breadcrumbs"
      sx={{ color: "neutral.main" }}
    >
      <Link
        color="#222222"
        href="/"
        sx={{ display: "flex", alignItems: "center" }}
      >
        <SquareIcon color="secondary" sx={{ mr: 0.5 }} />
      </Link>
      {pathnames.map((value, index) => {
        const last = index === pathnames.length - 1;
        const to = `/${pathnames.slice(0, index + 1).join("/")}`;

        return last ? (
          <Typography
            color="textPrimary"
            key={to}
            sx={{ display: "flex", alignItems: "center" }}
          >
            {value}
          </Typography>
        ) : (
          <Link
            color="inherit"
            href={to}
            key={to}
            sx={{ display: "flex", alignItems: "center" }}
          >
            {value}
          </Link>
        );
      })}
      <div className="divider" />
    </Breadcrumbs>
  );
}

export default BreadcrumbsWithIcon;
