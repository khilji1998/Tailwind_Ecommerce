import React, { createContext, useState} from "react";
export const AuthContext = createContext();
export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  function handleRegistrationSuccess() {
    setIsLoggedIn(true);
  }

  function handleLoginSuccess() {
    setIsLoggedIn(true);
  }
  return (
    <AuthContext.Provider value={{handleRegistrationSuccess , handleLoginSuccess}}>
      {children}
    </AuthContext.Provider>
  );
}
