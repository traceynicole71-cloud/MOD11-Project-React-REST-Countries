// A controlled text input that let the user search for countries 
// DATA FLOW 
// User types then onchange fires then setSearchQuery updates 

import { useCountries } from "../../hooks/useCountries";
// UseCountries gives us searchQuery (current value)
//SetSearchQuery is to update it 

//SEARCHBAR COMPONENT

function SearchBar() {
    // Pull searchQuery and its setter

    const { searchQuery, setSearchQuery } = useCountries()
    return (
        <div className="flex items-center gap-3 bg white dark:bg-gray-800 rounded-lg shadow-md px-4 py-3 w-fu;; max-w-sm">
            {/*Search icon */}
            <span aria-hidden="true" className="text-gray-400 text-sm"></span>🔍

            <input type="text"
                // controlled input 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search for country.."
                aria-label="Search for a country by name "

                //Flex-1 makes it fill remaining space in the row
                // outline-none removes the default blue browser ring 
                className="flex-1 bg-transparent outline-none text-sm text-gray-700 dark:text placeholder-gray-500"

            />

            {/*clear (x) button only appears when there is text in the search box  */}

            {searchQuery && (
                <button onClick={() => setSearchQuery('')}
                    aria-label='Clear search'

                    //hover: darkens or hover to show it clickable
                    //flex-shrink-0 prevents button from squishing when is long 

                    className="flex-shrink-0 text-gray-400 hover:text-gray-600 dark:text-gray-300 text-sm font-bold transition-colors duration-150"
                >
                    x
                </button>
            )}

        </div>
    )
}

export default SearchBar 
