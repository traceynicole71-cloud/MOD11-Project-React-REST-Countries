import React, { useState, useEffect, useCallback } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import type { Country } from '../hooks/useCountries';

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
    fetchCountryDetails();
}, [fetchCountryDetails]);

if (loading) return <div className="loader">Loading Country Details...</div>;
if (error) return <div className="error">{error}</div>
if (!country) return <div>No Country Data D=Found.</div>;

//Helper format currency objects into string with comma
const currencies = country.currencies? Object.values(country.currencies).map(c => c.name).join(', ')
: 'N/A';

//Helper format languages object into string with comma
const languages = country.languages
? Object.values(country.languages).join(', ')
: 'N/A';
//Navigation section
return (
    <main className="detail-container">
        <button className="back-btn" onClick={() => navigate(-1)}>
            &larr; back
        </button>

<section className="detail-content">
    <img
    src={country.flags.svg}
    alt={country.flags.alt || `Flag of ${country.name.common}`}
    className="detail-flag"
    />

    <div className="detail-info">
        <h1>{country.name.common}</h1>

        <div className="info-grid">
            <div className="info-column">
                <p><strong>Native Name:</strong> {Object.values(country.name.nativeName || {})[0]?.common || country.name.common}</p>
                <p><strong>Population:</strong> {country.population.toLocaleString()}</p>
                <p><strong>Region:</strong> {country.region}</p>
                <p><strong>Sub Region:</strong> {country.subregion || 'N/A'}</p>
                <p><strong>Capital:</strong> {country.capital?.[0] || 'N/A'}</p>
            </div>

            <div className="info-column">
                <p><strong>Top Level Domain:</strong> {country.cca3}</p>
                <p><strong>Currencies:</strong> {currencies}</p>
                <p><strong>Languages:</strong> {languages}</p>
            </div>
        </div>

    {/*Border Countries Section*/}
    <div className="border-countries">
        <h3>Border Countries:</h3>
        <div className="border-list">
            {country.borders && country.borders.length > 0 ? (
                country.borders.map((border) => (
                    <Link key={border} to={`/country/${border}`} className="border-tag">
                        {border}
                    </Link>
                ))
            ) : (
                <span>None</span>
            )}
        </div>
    </div>
    </div>
</section>
    </main>
)
}

export default Detail