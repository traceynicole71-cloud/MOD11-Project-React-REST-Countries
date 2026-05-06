import { useCountries } from "../../hooks/useCountries";

// The five regions used by the Rest Countries API

const REGIONS = ['Africa', 'Americas', 'Asia', 'Europe', 'oceania'] as const


function FilterDropdown() {
    // Pull current rigion filter 
    // setSelectedRegion triggers when re filter in useCountries.ts 

    const { selectedRegion, setSelectedRegion } = useCountries()
    return (

        <div className="relative w-full sm:w-48">
            <select
                //controlled react drives this value no the browser
                value={selectedRegion}
                //picking a region pushes its string into context refilters grid 

                onChange={(e) => setSelectedRegion(e.target.value)}
                aria-label="Filter countries by region"

                //appearance-none removes os default dropdown 
                //w-full fills the parent div
                //pr-8 right padding so text wont over lap 
                // cursor pointer shows hand 
                // dark: bg-gray-800 matches search bar backgrounf when in dark mode 
                //dark:text-white readable text in the dark mode 


                className="appearance-none w-full bg-white dark:bg-gray-800 text-gray-700 drak:text-white text-sm rounded-lg shadow-md px-4 py-2 pr-8 outline-none cursor-pounter transition-colors duration-150"
            >

                {/* Defualt option value "" means no region filter is active  */}
                <option value={""}>Filter by Region</option>

                {/* one option per region and key plus value both use the region string  */}

                {REGIONS.map((region) => (
                    <option key={region} value={region}>

                        {region}

                    </option>
                ))}
            </select>

            <span className="pointer-events-none absolute right-3 top-1/2-translate-y-1/2 text-gray-400 dark:text-gray-500 text-xs">
                ▾
            </span>
        </div>

    )
}

export default FilterDropdown