// Temporary placeholder — Home page coming soon
// TODO: render country grid with SearchBar and FilterDropdown
const Home = () => (
  <div className="min-h-screen bg-slate-100 dark:bg-slate-900 p-8 transition-colors duration-300">
    <h1 className="text-3xl font-bold text-center text-slate-900 dark:text-white mb-10">
      REST Countries
    </h1>

    <div className="flex flex-col md:flex-row gap-4 justify-between items-center">
      <input
        type="text"
        placeholder="Search for a country..."
        className="w-full md:w-96 p-3 rounded-lg shadow bg-white dark:bg-slate-800 dark:text-white"
      />

      <select className="w-full md:w-60 p-3 rounded-lg shadow bg-white dark:bg-slate-800 dark:text-white">
        <option>Filter by Region</option>
      </select>
    </div>
  </div>
);

export default Home;
