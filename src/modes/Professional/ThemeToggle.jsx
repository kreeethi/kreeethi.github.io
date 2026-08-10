import { useEffect, useState } from "react";

const STORAGE_KEY = "krithi-portfolio-theme";

function getInitialTheme() {
  if (typeof window === "undefined") return "dark";
  const stored = window.localStorage.getItem(STORAGE_KEY);
  if (stored === "light" || stored === "dark") return stored;
  const prefersDark = window.matchMedia?.(
    "(prefers-color-scheme: dark)"
  ).matches;
  return prefersDark ? "dark" : "light";
}

function SunIcon(props) {
  return (
    <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" {...props}>
      <circle cx="10" cy="10" r="4" stroke="currentColor" strokeWidth="1.5" />
      <g stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
        <path d="M10 1.5v2" />
        <path d="M10 16.5v2" />
        <path d="M3.5 10h-2" />
        <path d="M18.5 10h-2" />
        <path d="M4.9 4.9l1.4 1.4" />
        <path d="M13.7 13.7l1.4 1.4" />
        <path d="M15.1 4.9l-1.4 1.4" />
        <path d="M6.3 13.7l-1.4 1.4" />
      </g>
    </svg>
  );
}

function MoonIcon(props) {
  return (
    <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" {...props}>
      <path
        d="M17 11.5A7 7 0 1 1 8.5 3a5.5 5.5 0 0 0 8.5 8.5Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ThemeToggle() {
  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    const root = document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
    window.localStorage.setItem(STORAGE_KEY, theme);
  }, [theme]);

  function toggle() {
    setTheme((current) => (current === "dark" ? "light" : "dark"));
  }

  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={toggle}
      aria-pressed={isDark}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      className="flex items-center justify-center w-8 h-8 rounded-full border border-border text-muted hover:text-accent hover:border-accent/60 transition-colors"
    >
      {isDark ? <MoonIcon className="w-4 h-4" /> : <SunIcon className="w-4 h-4" />}
    </button>
  );
}

export default ThemeToggle;
