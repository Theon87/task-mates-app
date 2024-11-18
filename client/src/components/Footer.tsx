import React, { useState, useEffect } from "react";
import { Icon } from "semantic-ui-react";

const Footer: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(
    () => localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    // Apply theme class to body
    document.body.className = isDarkMode ? "dark-mode" : "light-mode";
    localStorage.setItem("theme", isDarkMode ? "dark" : "light");
  }, [isDarkMode]);

  const handleThemeToggle = () => {
    setIsDarkMode(!isDarkMode);
  };

