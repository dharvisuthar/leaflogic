import React, { createContext, useState, useCallback } from "react";
import { createTheme } from '@mui/material/styles'

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useState(createTheme());

  const contextValue = {
    currentTheme,
    changeTheme: useCallback((type) => onChangeThemeType(type), []),
  };

  const onChangeThemeType = (themeType) => {
    const theme = createTheme({
      palette: {
        type: themeType,
      },
    });

    setCurrentTheme(theme);
  };

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
};
