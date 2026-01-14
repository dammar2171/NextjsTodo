"use client";
import { useState } from "react";
import { FaCircle } from "react-icons/fa";
function TheameSwitcher() {
  const [theme, setTheme] = useState(" ");
  const color = ["gray", "white", "black", "purple", "red"];

  const themeChanger = (newTheme) => {
    setTheme(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
  };
  return (
    <div className="flex items-center gap-2">
      <button className="text-2xl" onClick={() => themeChanger("gray")}>
        <FaCircle className="text-gray-700" />
      </button>
      <button className="text-2xl" onClick={() => themeChanger("white")}>
        <FaCircle className="text-white" />
      </button>
      <button className="text-2xl" onClick={() => themeChanger("black")}>
        <FaCircle className="text-black" />
      </button>
      <button className="text-2xl" onClick={() => themeChanger("purple")}>
        <FaCircle className="text-purple-700" />
      </button>
      <button className="text-2xl" onClick={() => themeChanger("red")}>
        <FaCircle className="text-red-700" />
      </button>
    </div>
  );
}

export default TheameSwitcher;
