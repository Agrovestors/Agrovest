"use client";

import { useTheme } from "./ThemeProvider";
import { FiSun, FiMoon, FiMonitor } from "react-icons/fi";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  const cycleTheme = () => {
    if (theme === "dark") {
      setTheme("light");
    } else if (theme === "light") {
      setTheme("system");
    } else {
      setTheme("dark");
    }
  };

  return (
    <button
      onClick={cycleTheme}
      className="p-2 rounded-md transition-all duration-300 hover:bg-green-500/30 hover:text-green-400 hover:shadow-[0_0_8px_rgba(74,222,128,0.5)]"
      aria-label={`Current theme: ${theme}. Click to change theme.`}
      title={`Theme: ${theme}`}
    >
      {theme === "dark" && <FiMoon className="w-5 h-5" />}
      {theme === "light" && <FiSun className="w-5 h-5" />}
      {theme === "system" && <FiMonitor className="w-5 h-5" />}
    </button>
  );
}
