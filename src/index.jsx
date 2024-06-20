//client/index.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme';
import { BrowserRouter as Router } from "react-router-dom";
import { AuthProviderWrapper } from "./context/auth.context";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Router>
    <AuthProviderWrapper>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </AuthProviderWrapper>
  </Router>
);
