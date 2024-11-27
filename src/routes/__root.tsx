import { createRootRoute, Outlet } from "@tanstack/react-router";
import { Theme } from "@radix-ui/themes";
import { useThemeContext } from "../contexts/theme/theme";
import { useEffect } from "react";
import Navbar from "../components/navbar";

export const Route = createRootRoute({
  component: () => <RootComponent />,
});

function RootComponent() {
  const { colorScheme, theme } = useThemeContext();

  useEffect(() => {}, []);

  return (
    <Theme
      accentColor={colorScheme}
      radius="medium"
      appearance={theme as "light" | "dark"}
    >
      <div className="w-screen h-screen flex flex-col overflow-hidden">
        <Navbar/>
        <Outlet />
      </div>
    </Theme>
  );
}
