type CountryCardProps = {
  country: any;
};

const CountryCard = ({ country }: CountryCardProps) => {
  return (
    <div className="bg-white dark:bg-slate-800 rounded-xl shadow-md overflow-hidden hover:scale-105 transition-transform duration-300">
      <img
        src={country.flags?.png}
        alt={country.name?.common}
        className="h-40 w-full object-cover"
      />

      <div className="p-5">
        <h2 className="text-lg font-bold text-slate-900 dark:text-white mb-4">
          {country.name?.common}
        </h2>

        <p className="text-sm text-slate-700 dark:text-slate-300">
          <span className="font-semibold">Population:</span>{" "}
          {country.population?.toLocaleString()}
        </p>

        <p className="text-sm text-slate-700 dark:text-slate-300">
          <span className="font-semibold">Region:</span> {country.region}
        </p>

        <p className="text-sm text-slate-700 dark:text-slate-300">
          <span className="font-semibold">Capital:</span>{" "}
          {country.capital?.[0] || "N/A"}
        </p>
      </div>
    </div>
  );
};

export default CountryCard;