type CountryCardProps = {
  name: string;
  population: string;
  region: string;
  capital: string;
};

const CountryCard = ({
  name,
  population,
  region,
  capital,
}: CountryCardProps) => {
  return (
    <div className="bg-white dark:bg-slate-800 rounded-xl shadow-md overflow-hidden hover:scale-105 transition-transform duration-300">
      <div className="h-40 bg-slate-300 dark:bg-slate-700"></div>

      <div className="p-5">
        <h2 className="text-lg font-bold text-slate-900 dark:text-white mb-4">
          {name}
        </h2>

        <p className="text-sm text-slate-700 dark:text-slate-300">
          <span className="font-semibold">Population:</span> {population}
        </p>

        <p className="text-sm text-slate-700 dark:text-slate-300">
          <span className="font-semibold">Region:</span> {region}
        </p>

        <p className="text-sm text-slate-700 dark:text-slate-300">
          <span className="font-semibold">Capital:</span> {capital}
        </p>
      </div>
    </div>
  );
};

export default CountryCard;