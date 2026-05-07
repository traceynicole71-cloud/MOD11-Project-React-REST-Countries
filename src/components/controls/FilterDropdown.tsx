import { useCountries } from "../../hooks/useCountries";

// The five regions used by the Rest Countries API

const REGIONS = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'] as const

function FilterDropdown() {
    // Pull current region filter
    // setSelectedRegion triggers re-filter in useCountries.ts

    const { selectedRegion, setSelectedRegion } = useCountries()

    return (
        <div className="relative w-full sm:w-48">
            <select
                // Controlled react drives this value not the browser
                value={selectedRegion}

                // Picking a region pushes its string into context and refilters grid
                onChange={(e) => setSelectedRegion(e.target.value)}

                aria-label="Filter countries by region"

                className="appearance-none w-full bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 text-sm rounded-lg shadow-md px-4 py-2 pr-8 outline-none cursor-pointer transition-colors duration-150"
            >
                {/* Default option means no region filter */}
                <option value={""}>Filter by Region</option>

                {/* One option per region */}
                {REGIONS.map((region) => (
                    <option key={region} value={region}>
                        {region}
                    </option>
                ))}
            </select>

            <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 dark:text-gray-300 text-xs">
                ▾
            </span>
        </div>
    )
}

export default FilterDropdown