// MAIN LANDING PAGE
// The search/filter controls and the full responsive grid of country cards

import { useCountries } from "../hooks/useCountries";
import SearchBar from "../components/controls/SearchBar";
import FilterDropdown from "../components/controls/FilterDropdown";
import CountryCard from "../components/country/CountryCard";

function Home() {
    const {
        filteredCountries,
        loading,
        error,
    } = useCountries();

    // LOADING STATE
    if (loading) {
        return (
            <div className="text-center mt-10 text-lg dark:text-white">
                Loading countries...
            </div>
        );
    }

    // ERROR STATE
    if (error) {
        return (
            <div className="text-center mt-10 text-red-500">
                Error: {error}
            </div>
        );
    }

    return (
        <main className="px-6 py-8 bg-gray-100 dark:bg-slate-900 min-h-screen">
            {/* SEARCH + FILTER */}
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
                <SearchBar />
                <FilterDropdown />
            </div>

            {/* COUNTRY GRID */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                {filteredCountries.map((country: any) => (
                    <CountryCard
                        key={country.cca3}
                        country={country}
                    />
                ))}
            </div>

            {/* RESULTS COUNT */}
            <p className="mt-6 text-sm text-gray-500 dark:text-gray-400 text-center">
                Showing {filteredCountries.length} countr
                {filteredCountries.length === 1 ? "y" : "ies"}
            </p>
        </main>
    );
}

export default Home;