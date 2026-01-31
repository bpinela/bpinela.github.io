"use client";
import { useEffect, useState } from "react";

export function useTheme() {
  const [theme, setTheme] = useState<"light" | "dark">(() => {
    if (typeof window !== "undefined") {
      return document.documentElement.classList.contains("dark")
        ? "dark"
        : "light";
    }
    return "light";
  });

  const toggleTheme = () => {
    const root = document.documentElement;
    if (theme === "dark") {
      root.classList.remove("dark");
      setTheme("light");
    } else {
      root.classList.add("dark");
      setTheme("dark");
    }
  };

  useEffect(() => {
    // Optionally load theme from localStorage
    const saved = localStorage.getItem("theme");
    if (saved) {
      document.documentElement.classList.toggle("dark", saved === "dark");
      setTheme(saved === "dark" ? "dark" : "light");
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  return { theme, toggleTheme };
}
