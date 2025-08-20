import { create } from "zustand";
import { useEffect } from "react";

const useThemeStore = create((set) => ({
  theme: localStorage.getItem("chat-theme") || "light",
  setTheme: (theme) => {
    // Update the data-theme attribute on the html element
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("chat-theme", theme);
    set({ theme });
  },
}));

// This hook will be used in the root component to initialize the theme
export const useThemeInitializer = () => {
  const { theme, setTheme } = useThemeStore();

  useEffect(() => {
    // Set the initial theme
    const savedTheme = localStorage.getItem("chat-theme") || "light";
    document.documentElement.setAttribute("data-theme", savedTheme);
    
    // Listen for system color scheme changes
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = () => {
      setTheme(mediaQuery.matches ? "dark" : "light");
    };
    
    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, [setTheme]);

  return { theme, setTheme };
};

export { useThemeStore };
