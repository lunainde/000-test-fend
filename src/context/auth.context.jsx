// client/src/context/auth.context.jsx

import React, { useState, useEffect, useCallback } from "react";
import authService from "../services/auth.service";

const AuthContext = React.createContext();
function AuthProviderWrapper(props) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState(null);

  const storeToken = (token) => {
    localStorage.setItem("authToken", token);
  };

  const removeToken = () => {
    localStorage.removeItem("authToken");
  };

  const refreshUserInLocalStorage = (user) => {
    localStorage.setItem("user", JSON.stringify(user));
    setUser(user);
  };

  const authenticateUser = useCallback(() => {
    const storedToken = localStorage.getItem("authToken");

    if (storedToken) {
      authService
        .verify()
        .then((response) => {
          refreshUserInLocalStorage(response.data);
          setIsLoggedIn(true);
          setIsLoading(false);
        })
        .catch((error) => {
          setIsLoggedIn(false);
          setIsLoading(false);
          console.error("VERIFICATION FAILED:", error);
        });
    } else {
      setIsLoggedIn(false);
      setIsLoading(false);
    }
  }, []);

  const logOutUser = () => {
    removeToken();
    localStorage.removeItem("user");
    authenticateUser();
  };

  useEffect(() => {
    authenticateUser();
  }, [authenticateUser]);

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn,
        isLoading,
        user,
        storeToken,
        authenticateUser,
        logOutUser,
        refreshUserInLocalStorage,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
}

export { AuthProviderWrapper, AuthContext };