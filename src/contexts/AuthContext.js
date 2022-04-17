import React, { useState, useEffect } from "react";

export const AuthContext = React.createContext();

const AuthProvider = ({ children }) => {
  const [authToken, setAuthToken] = useState();

  const saveAuthToken = async (token) => {
    await localStorage.setItem("auth-token", token);
    setAuthToken(token);
  };

  useEffect(() => {
    const token = localStorage.getItem("auth-token");
    saveAuthToken(token);
  }, []);

  console.log(authToken)

  return (
    <AuthContext.Provider
      value={{ isLogin: Boolean(authToken), authToken, saveAuthToken }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
