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

  return (
    <div
      className="ui inverted segment"
      style={{
        backgroundColor: isDarkMode ? "#1b1c1d" : "#f9f9f9",
        color: isDarkMode ? "#ffffff" : "#000000",
      }}
    >
      <div className="ui container center aligned">
        <p>
          &copy; {new Date().getFullYear()} Task Mates. All Rights Reserved.
        </p>
        <div className="ui toggle checkbox" style={{ marginTop: "1rem" }}>
          <input
            type="checkbox"
            checked={isDarkMode}
            onChange={handleThemeToggle}
            id="theme-toggle"
          />
          <label
            htmlFor="theme-toggle"
            style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}
          >
            {isDarkMode ? (
              <>
                <Icon name="moon outline" />
              </>
            ) : (
              <>
                <Icon name="sun" />
              </>
            )}
          </label>
        </div>
      </div>
    </div>
  );
};

export default Footer;
