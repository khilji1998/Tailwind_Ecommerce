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
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",

  });

  return (
    <AuthContext.Provider value={{handleRegistrationSuccess , handleLoginSuccess,formData,setFormData}}>
      {children}
    </AuthContext.Provider>
  );
}
