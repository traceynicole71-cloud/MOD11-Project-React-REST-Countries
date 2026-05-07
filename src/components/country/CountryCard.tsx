import type { Country } from "../../hooks/useCountries";
import { useNavigate } from "react-router-dom";

interface CountryCardProps {
    country: Country;
}

function CountryCard({ country }: CountryCardProps) {
    const navigate = useNavigate();

    return (
        <div
            onClick={() => navigate(`/country/${country.cca3}`)}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden cursor-pointer hover:shadow-xl transition-shadow duration-200"
        >
            <img
                src={country.flags.png}
                alt={country.flags.alt ?? `Flag of ${country.name.common}`}
                className="w-full h-40 object-cover"
            />
            <div className="p-5">
                <h2 className="font-bold text-base text-gray-900 dark:text-white mb-3 truncate">
                    {country.name.common}
                </h2>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                    <span className="font-semibold">Population:</span>{" "}
                    {country.population.toLocaleString()}
                </p>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                    <span className="font-semibold">Region:</span> {country.region}
                </p>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                    <span className="font-semibold">Capital:</span>{" "}
                    {country.capital?.[0] ?? "—"}
                </p>
            </div>
        </div>
    );
}

export default CountryCard;
