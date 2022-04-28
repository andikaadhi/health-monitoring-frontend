import React, { useState, useEffect } from "react";

export const AuthContext = React.createContext();

function AuthProvider({ children }) {
  const [authToken, setAuthToken] = useState();

  const saveAuthToken = async (token) => {
    await localStorage.setItem("auth-token", token);
    setAuthToken(token);
  };

  const clearAuthToken = async () => {
    await localStorage.removeItem("auth-token");
    setAuthToken(null);
  };

  useEffect(() => {
    const token = localStorage.getItem("auth-token");
    saveAuthToken(token);
  }, []);

  return (
    <AuthContext.Provider
      value={{
        isLogin: Boolean(authToken),
        authToken,
        saveAuthToken,
        clearAuthToken,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
