import { ReactNode, useState } from "react";
import { Theme, THEME_KEY, ThemeContext } from "../lib/ThemeContext";

const defaultTheme = (localStorage.getItem(THEME_KEY) as Theme) ?? Theme.LIGHT;

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [theme, setTheme] = useState<Theme>(defaultTheme);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
