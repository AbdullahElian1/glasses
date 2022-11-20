import React, { useState, createContext } from "react";

export const GlassesContext = createContext();

export const GlassesProvider = ({ children }) => {
  const [filterColor, setFilterColor] = useState([]);
  const [filterShape, setFilterShape] = useState([]);

  const handlefilterColor = (color) => {
    if (filterColor.includes(color)) {
      setFilterColor(filterColor?.filter((e) => e !== color));
    } else {
      setFilterColor([...filterColor, color]);
    }
  };

  const handlefilterShape = (shape) => {
    if (filterShape.includes(shape)) {
      setFilterShape(filterShape?.filter((e) => e !== shape));
    } else {
      setFilterShape([...filterShape, shape]);
    }
  };

  const value = {
    filterColor,
    filterShape,
    handlefilterColor,
    handlefilterShape,
  };

  return (
    <GlassesContext.Provider value={value}>{children}</GlassesContext.Provider>
  );
};
