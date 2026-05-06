// Temporary placeholder — Home page coming soon
// TODO: render country grid with SearchBar and FilterDropdown

const countries = [1, 2, 3, 4, 5, 6, 7, 8];

const Home = () => (
  <div className="min-h-screen bg-slate-100 dark:bg-slate-900 transition-colors duration-300">
    <header className="bg-white dark:bg-slate-800 shadow-md">
      <div className="max-w-7xl mx-auto px-8 py-6 flex justify-between items-center">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white">
          REST Countries
        </h1>

        <button className="px-4 py-2 rounded-lg bg-slate-200 dark:bg-slate-700 text-slate-900 dark:text-white hover:scale-105 transition-transform duration-300">
          Dark Mode
        </button>
      </div>
    </header>

    <main className="max-w-7xl mx-auto p-8">
      <div className="flex flex-col md:flex-row gap-4 justify-between items-center bg-slate-200 dark:bg-slate-800 p-6 rounded-2xl shadow-md mb-10">
        <input
          type="text"
          placeholder="Search for a country..."
          className="w-full md:w-96 p-3 rounded-lg shadow bg-white dark:bg-slate-700 text-slate-900 dark:text-white"
        />

        <select className="w-full md:w-60 p-3 rounded-lg shadow bg-white dark:bg-slate-700 text-slate-900 dark:text-white">
          <option>Filter by Region</option>
          <option>Africa</option>
          <option>Americas</option>
          <option>Asia</option>
          <option>Europe</option>
          <option>Oceania</option>
        </select>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {countries.map((country) => (
          <div
            key={country}
            className="bg-white dark:bg-slate-800 rounded-xl shadow-md overflow-hidden hover:scale-105 transition-transform duration-300"
          >
            <div className="h-40 bg-slate-300 dark:bg-slate-700"></div>

            <div className="p-5">
              <h2 className="text-lg font-bold text-slate-900 dark:text-white mb-4">
                Country Name
              </h2>

              <p className="text-sm text-slate-700 dark:text-slate-300">
                <span className="font-semibold">Population:</span> 000,000
              </p>

              <p className="text-sm text-slate-700 dark:text-slate-300">
                <span className="font-semibold">Region:</span> Region
              </p>

              <p className="text-sm text-slate-700 dark:text-slate-300">
                <span className="font-semibold">Capital:</span> Capital City
              </p>
            </div>
          </div>
        ))}
      </div>
    </main>
  </div>
);

export default Home;