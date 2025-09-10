import React from "react";
import { Moon, Sun } from "lucide-react";
import { ThemeToggleProps } from "../types";

export const ThemeToggle: React.FC<ThemeToggleProps> = ({ theme, setTheme }) => (
  <button
    onClick={() => setTheme(theme === "light" ? "dark" : "light")}
    className="p-3 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-all duration-300 shadow-lg hover:shadow-xl"
    aria-label="Toggle theme"
  >
    {theme === "light" ? (
      <Moon className="w-5 h-5 text-gray-700 dark:text-gray-300" />
    ) : (
      <Sun className="w-5 h-5 text-yellow-500" />
    )}
  </button>
);
