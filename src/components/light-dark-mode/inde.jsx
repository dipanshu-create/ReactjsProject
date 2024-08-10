import React, { useEffect } from "react";
import useLocalStorage from "./useLocalStorage";

export default function LightDarkMode() {
  const [theme, setTheme] = useLocalStorage("theme", "dark");

  function handleToggleTheme() {
    setTheme(theme === "dark" ? "light" : "dark");
  }
  useEffect(() => {
    if (theme === "dark") {
      document.body.style.backgroundColor = "#000000";
    } else {
      document.body.style.backgroundColor = "#FFFFFF";
    }
  }, [theme]);
  return (
    <div className="light-dark-mode">
      <div className="container">
        <p>hello world</p>
        <button onClick={handleToggleTheme}>change theme</button>
      </div>
    </div>
  );
}
