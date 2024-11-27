export type Theme = "dark" | "light" | "system";
export type ResolvedTheme = "dark" | "light";

// eslint-disable-next-line stylistic/max-len
export type ColorScheme =
  | "gray"
  | "yellow"
  | "amber"
  | "red"
  | "ruby"
  | "pink"
  | "violet"
  | "iris"
  | "blue"
  | "jade"
  | "green";

export interface ThemeContextProps {
  theme: Theme;
  resolvedTheme: ResolvedTheme;
  setTheme: (t: Theme) => void;

  colorScheme: ColorScheme;
  setColorScheme: (s: ColorScheme) => void;
}
