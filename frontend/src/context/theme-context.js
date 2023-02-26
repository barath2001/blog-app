import React, { useState } from "react";

const ThemeContext = React.createContext({
  theme: "LIGHT",
  toggleTheme: () => {},
});

export const ThemeContextProvider = (props) => {
  const [theme, setTheme] = useState("LIGHT");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "LIGHT" ? "DARK" : "LIGHT"));
  };

  return (
    <ThemeContext.Provider
      value={{
        theme,
        toggleTheme,
      }}
    >
      {props.children}
    </ThemeContext.Provider>
  );
};

export default ThemeContext;
