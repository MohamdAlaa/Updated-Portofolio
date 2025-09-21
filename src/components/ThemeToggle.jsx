"use client";

import { motion } from "framer-motion";
import { useTheme } from "@/contexts/ThemeContext";

const ThemeToggle = () => {
  const { theme, toggleTheme, mounted } = useTheme();

  if (!mounted) {
    return (
      <div className="w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-700 animate-pulse" />
    );
  }

  return (
    <motion.button
      onClick={toggleTheme}
      className="relative w-10 h-10 rounded-full bg-gray-500 dark:bg-gray-700 flex items-center justify-center transition-colors duration-300 hover:bg-gray-300 dark:hover:bg-gray-600"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
    >
      <motion.div
        initial={false}
        animate={{
          rotate: theme === "dark" ? 180 : 0,
          scale: theme === "dark" ? 0.8 : 1,
        }}
        transition={{ duration: 0.3 }}
        className="absolute"
      >
        {theme === "light" ? (
          // Sun icon
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="text-yellow-500"
          >
            <circle
              cx="12"
              cy="12"
              r="5"
              stroke="currentColor"
              strokeWidth="2"
            />
            <path d="M12 1v2" stroke="currentColor" strokeWidth="2" />
            <path d="M12 21v2" stroke="currentColor" strokeWidth="2" />
            <path
              d="M4.22 4.22l1.42 1.42"
              stroke="currentColor"
              strokeWidth="2"
            />
            <path
              d="M18.36 18.36l1.42 1.42"
              stroke="currentColor"
              strokeWidth="2"
            />
            <path d="M1 12h2" stroke="currentColor" strokeWidth="2" />
            <path d="M21 12h2" stroke="currentColor" strokeWidth="2" />
            <path
              d="M4.22 19.78l1.42-1.42"
              stroke="currentColor"
              strokeWidth="2"
            />
            <path
              d="M18.36 5.64l1.42-1.42"
              stroke="currentColor"
              strokeWidth="2"
            />
          </svg>
        ) : (
          // Moon icon
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="text-blue-400"
          >
            <path
              d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"
              stroke="currentColor"
              strokeWidth="2"
            />
          </svg>
        )}
      </motion.div>
    </motion.button>
  );
};

export default ThemeToggle;
