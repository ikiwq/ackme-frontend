import { createContext, useContext } from "react";
import { ThemeContextProps } from "./types";

const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

function useThemeContext() {
  const themeContext = useContext(ThemeContext);
  if (!themeContext) {
    throw new Error("ThemeContext must be used within a ThemeProvider");
  }

  return themeContext;
}

export { ThemeContext, useThemeContext };
