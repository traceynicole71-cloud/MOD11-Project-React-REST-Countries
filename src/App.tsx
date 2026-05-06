import { useTheme } from "./hooks/useTheme";

function App() {
  const { isDark, toggleTheme } = useTheme();

  return (
    <main className="min-h-screen bg-white text-black dark:bg-black dark:text-white flex items-center justify-center">
      <button
        onClick={toggleTheme}
        className="rounded-md bg-gray-200 px-6 py-3 font-semibold dark:bg-gray-700"
      >
        Toggle Theme: {isDark ? "Dark" : "Light"}
      </button>
    </main>
  );
}

export default App;