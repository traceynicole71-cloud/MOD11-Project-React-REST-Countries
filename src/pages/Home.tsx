
//MAIN LANDING PAGE
//The search/filter controls and the full responsive grid of country cards

import { useCountries } from "../hooks/useCountries";
import SearchBar from "../components/controls/SearchBar";
import FilterDropdown from "../components/controls/FilterDropdown";
import CountryCard from "../components/country/CountryCard";

function Home() {
    //All state comes from context no local state needed here

    const { filteredCountries, loading, error, searchQuery, selectedRegion } = useCountries()

    // ----- LOADING STATE  ------
    //Shows while the initial APi Fetch is in progress
    if (loading) {
        return (
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <p className="text-gray-500 dark:text-gray-400 text-lg">
                    Loading Countries...
                </p>
            </main>
        )
    }

    //----- ERROR STATE ------
    // Shows if the fetch faile bad API response or Network Not broken

    if (error) {
        return (
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <p className="text-red-500 dark:text-red-400 text-lg">
                    🚫 Error: {error}
                </p>
            </main>
        )
    }

    // True when search/filter is active with a return of zero reuslts
    const noResults = filteredCountries.length === 0 && (searchQuery || selectedRegion)

    return (

        //max-w-7xl mx-auto → centered content, capped at 1280px wide
        //px-4 sm:px-6 lg:px-8 → responsive horizontal padding:
        // mobile: 16px | sm: 24px | lg: 32px
        //py-8 → consistent vertical breathing room
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">

            <div className="flex flex-col sm:flex-row sm:justify-between gap-4 mb-8">
                <SearchBar />
                <FilterDropdown />
            </div>

            {/* NO RESULTS MESSAGE */}
            {noResults ? (
                <p className="text-center text-gray-500 dark:text-gray-400 text-lg py-16">
                    Sorry No Countries Found
                    {/* &quot; is the HTML entity for a double quote */}
                    {searchQuery && <span> for &quot;{searchQuery}&quot;</span>}
                    {selectedRegion && <span> in {selectedRegion}</span>}
                </p>
            ) : (
                <>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                        {filteredCountries.map((country) => (
                            <CountryCard key={country.cca3} country={country} />
                        ))}
                    </div>

                    <p className="mt-6 text-sm text-gray-400 dark:text-gray-500 text-center">
                        Showing {filteredCountries.length} country {filteredCountries.length === 1 ? 'y' : 'ies'}
                    </p>
                </>
            )}

        </main>
    )
}

export default Home
