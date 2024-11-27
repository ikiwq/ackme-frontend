import {useEffect, useState, useSyncExternalStore} from "react";
import {ThemeContext} from "./theme";
import {THEME_KEY} from "../../constants/theme";
import {is} from "typia";
import {ColorScheme, ResolvedTheme, Theme} from "./types";

const DEFAULT_COLORSCHEME = "pink";

function ThemeProvider({children}: {children: React.ReactNode}) {
  const query = window.matchMedia("(prefers-color-scheme: dark)");

  const systemTheme = useSyncExternalStore<ResolvedTheme>(
    callback => {
      query.addEventListener("change", callback);
      return () => {
        query.removeEventListener("change", callback);
      };
    },
    () => query.matches ? "dark" : "light"
  );

  const [theme, m_setTheme] = useState<Theme>(() => {
    const localTheme = localStorage.getItem(THEME_KEY);
    if (localTheme && is<Theme>(localTheme)) {
      return localTheme;
    }

    return "system";
  });

  const setTheme = (t: Theme) => {
    localStorage.setItem(THEME_KEY, t);
    m_setTheme(t);
  };

  const resolvedTheme : ResolvedTheme = theme === "system" ? systemTheme : theme;

  useEffect(() => {
    if (resolvedTheme === "dark") {
      document.documentElement.classList.add("dark");
      return;
    }

    document.documentElement.classList.remove("dark");
  }, [resolvedTheme]);

  const [colorScheme, setColorScheme] = useState<ColorScheme>(DEFAULT_COLORSCHEME);

  return (
    <ThemeContext.Provider
      value={{
        theme,
        resolvedTheme,
        setTheme,
        colorScheme,
        setColorScheme
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export {ThemeProvider};