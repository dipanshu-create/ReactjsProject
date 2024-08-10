import React from "react";
import useLocalStorage from "./useLocalStorage";

export default function LightDarkMode() {
  const [themem, setTheme] = useLocalStorage("theme", "dark");
  return (
    <div className="light-dark-mode">
      <div className="container">
        <p>hello world</p>
        <button>change theme</button>
      </div>
    </div>
  );
}
