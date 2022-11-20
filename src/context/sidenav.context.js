import React, { useState, createContext } from "react";

export const SidenavContext = createContext();

export const SidenavProvider = ({ children }) => {
  const [collection, setColection] = useState("SPECTACLES");
  const [gender, setGender] = useState("WOMEN");

  const value = {
    gender,
    setGender,
    collection,
    setColection,
  };

  return (
    <SidenavContext.Provider value={value}>{children}</SidenavContext.Provider>
  );
};
