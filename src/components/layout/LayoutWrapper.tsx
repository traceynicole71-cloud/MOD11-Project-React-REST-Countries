import { Outlet } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "../../context/themeContext";

const LayoutWrapper = () => {
  const { isDark, toggleTheme } = useContext(ThemeContext);

  return (
    <div className="bg-white dark:bg-slate-900 min-h-screen text-black dark:text-white transition-colors duration-300">
      <header className="flex justify-between items-center p-6 shadow-md bg-white dark:bg-slate-800">
        <h1 className="text-xl font-bold">Where in the world?</h1>

        <button
          onClick={toggleTheme}
          aria-label="Toggle dark mode"
          className="px-4 py-2 rounded-lg bg-slate-200 text-black hover:cursor-pointer"
        >
          {isDark ? "Light Mode" : "Dark Mode"}
        </button>
      </header>

      <main className="p-6">
        <Outlet />
      </main>
    </div>
  );
};

export default LayoutWrapper;