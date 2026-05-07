import { Outlet } from "react-router-dom";
import { useState } from "react";

const LayoutWrapper = () => {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div
      className={
        darkMode
          ? "dark bg-slate-900 min-h-screen text-white"
          : "bg-slate-100 min-h-screen text-black"
      }
    >
      <header className="flex justify-between items-center p-6 shadow-md bg-white dark:bg-slate-800">
        <h1 className="text-xl font-bold">Where in the world?</h1>

        <button
          onClick={() => setDarkMode(!darkMode)}
          className="px-4 py-2 rounded-lg bg-slate-200 text-black hover:cursor-pointer"
        >
          {darkMode ? "Light Mode" : "Dark Mode"}
        </button>
      </header>

      <main className="p-6">
        <Outlet />
      </main>
    </div>
  );
};

export default LayoutWrapper;
