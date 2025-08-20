import { create } from "zustand";
import { useEffect } from "react";
import { THEMES } from "../constants";

const useThemeStore = create((set) => ({
  theme: localStorage.getItem("chat-theme") || "light",
  setTheme: (theme) => {
    if (!THEMES.includes(theme)) return; // Only allow valid themes
    
    // Remove all theme classes first
    document.documentElement.removeAttribute("data-theme");
    
    // Add the new theme
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("chat-theme", theme);
    
    // Force a re-render by updating the state
    set({ theme });
  },
}));

// This hook will be used in the root component to initialize the theme
export const useThemeInitializer = () => {
  const { theme, setTheme } = useThemeStore();

  useEffect(() => {
    // Set the initial theme
    const savedTheme = localStorage.getItem("chat-theme") || "light";
    if (savedTheme && savedTheme !== theme) {
      setTheme(savedTheme);
    } else {
      document.documentElement.setAttribute("data-theme", theme);
    }
    
    // Listen for system color scheme changes (only for light/dark)
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = () => {
      if (theme === 'light' || theme === 'dark') {
        setTheme(mediaQuery.matches ? "dark" : "light");
      }
    };
    
    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, [setTheme, theme]);

  return { theme, setTheme };
};

export { useThemeStore };
