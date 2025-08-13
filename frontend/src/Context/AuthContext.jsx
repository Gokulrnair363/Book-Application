import React, { createContext, useState, useEffect } from "react";
import {  useNavigate } from "react-router-dom";
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(localStorage.getItem("token") || null);
const navigate=useNavigate();
  useEffect(() => {
    if (token) {
      const userData = JSON.parse(localStorage.getItem("user"));
      setUser(userData);
    }
  }, [token]);

  const login = (token, userData) => {
    setToken(token);
    setUser(userData);
    localStorage.setItem("token", token);
    localStorage.setItem("user", JSON.stringify(userData));
  };

  const logout = () => {
    setToken(null);
    setUser(null);
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate('/login');
  };

  return (
    <AuthContext.Provider value={{ user, token, login, logout,setUser }}>
      {children}
    </AuthContext.Provider>
  );
};
