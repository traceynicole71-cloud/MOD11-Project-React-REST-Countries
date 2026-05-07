import React, { useState, useEffect, useCallback } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import type { Country } from '../hooks/useCountries';
import BorderTag from '../components/country/BorderTag';

//Pull country code from URL parameters
const Detail: React.FC = () => {
  const { countryCode } = useParams<{ countryCode: string }>();
  const navigate = useNavigate();

  const [country, setCountry] = useState<Country | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  //Fetch specific country data based on code in URL
  const fetchCountryDetails = useCallback(async () => {
    if (!countryCode) return;

    setLoading(true);
    setError(null);

    try {
      const response = await fetch(`https://restcountries.com/v3.1/alpha/${countryCode}`);

      if (!response.ok) {
        throw new Error('Could not find country data.');
      }
      //API returns array and we take the first result
      const data: Country[] = await response.json();
      setCountry(data[0]);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error has occurred');
    } finally {
      setLoading(false);
    }
  }, [countryCode]);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    fetchCountryDetails();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (loading) return <div className="loader">Loading Country Details...</div>;
  if (error) return <div className="error">{error}</div>
  if (!country) return <div>No Country Data Found.</div>;

  //Helper format currency objects into string with comma
  const currencies = country.currencies ? Object.values(country.currencies).map(c => c.name).join(', ')
    : 'N/A';

  //Helper format languages object into string with comma
  const languages = country.languages
    ? Object.values(country.languages).join(', ')
    : 'N/A';
  //Navigation section
  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white px-6 py-10 md:px-20">
      <button
        className="flex items-center gap-2 px-8 py-2 mb-16 bg-white dark:bg-gray-800 shadow-md rounded-md hover:opacity-70 transition-all"
        onClick={() => navigate(-1)}>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
        </svg>
        Back
      </button>

      <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
        {/* Flag Image */}
        <div className="w-full">
          <img
            src={country.flags.svg}
            alt={country.flags.alt || `Flag of ${country.name.common}`}
            className="w-full h-auto shadow-lg rounded-sm object-cover"
          />
        </div>

        {/* Text Content */}
        <div className="flex flex-col justify-center">
          <h1 className="text-3xl font-extrabold mb-8">{country.name.common}</h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-12 text-sm">
            <div className="space-y-3">
              <p><span className="font-semibold">Native Name:</span> {Object.values(country.name.nativeName || {})[0]?.common || country.name.common}</p>
              <p><span className="font-semibold">Population:</span> {country.population.toLocaleString()}</p>
              <p><span className="font-semibold">Region:</span> {country.region}</p>
              <p><span className="font-semibold">Sub Region:</span> {country.subregion || 'N/A'}</p>
              <p><span className="font-semibold">Capital:</span> {country.capital?.[0] || 'N/A'}</p>
            </div>

            <div className="space-y-3">
              <p><span className="font-semibold">Top Level Domain:</span> {country.tld?.join(', ') ?? 'N/A'}</p>
              <p><span className="font-semibold">Currencies:</span> {currencies}</p>
              <p><span className="font-semibold">Languages:</span> {languages}</p>
            </div>
          </div>

          {/* Border Countries */}
          <div className="flex flex-col lg:flex-row lg:items-center gap-4">
            <h3 className="font-semibold whitespace-nowrap">Border Countries:</h3>
            <div className="flex flex-wrap gap-2">
              {country.borders && country.borders.length > 0 ? (
                country.borders.map((borderCode) => (
                  <BorderTag key={borderCode} code={borderCode} />
                ))
              ) : (
                <span className="text-gray-500">None</span>
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Detail;