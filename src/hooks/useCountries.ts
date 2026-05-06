import { useState, useEffect, useCallback } from 'react';

//Define structure of a country object
export interface Country {
    name: {
        common: string;
        official: string;
        nativeName?: Record<string, { common: string }>;
    };
    //3-letter country code for routing and unique keys
    cca3: string;
    flags: {
        png: string;
        svg: string;
        alt?: string;
    };

    population: number;
    region: string;
    subregion?: string;
    capital?: string[];
    currencies?: Record<string, { name: string; symbol: string }>;
    languages?: Record<string, string>;
    borders?: string[];
}
//Custom hook to fetch and manage countries
//Fetch all countries, error handling, and loading states
export const useCountries = () => {
    const [countries, setCountries] = useState<Country[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const [searchQuery, setSearchQuery] = useState<string>('');
    const [selectedRegion, setSelectedRegion] = useState<string>('');
    //Fetch all countries from the API
    //useCallback to make sure function reference doesn't change with every render
    const fetchAllCountries = useCallback(async () => {
        setLoading(true);
        setError(null);
        try {
            const response = await fetch('https://restcountries.com/v3.1/all?fields=name,cca3,flags,population,region,subregion,capital,currencies,languages,borders');
            // if (!response.ok) throw new Error(`API error ${response.status}`);
            const data = await response.json();

            console.log(data);
            // if (!Array.isArray(data)) throw new Error('Unexpected API response');
            setCountries(data);
        } catch (err) {
            setError('Failed to fetch countries');
        } finally {
            setLoading(false);
        }
    }, []);

    useEffect(() => {
        fetchAllCountries();
    }, [fetchAllCountries]);

    //Filter countries by search query and selected region
    const filteredCountries = countries.filter((country) => {
        const matchesSearch = country.name.common.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesRegion = selectedRegion === '' || country.region === selectedRegion;
        return matchesSearch && matchesRegion;
    });

    return { countries, filteredCountries, loading, error, searchQuery, setSearchQuery, selectedRegion, setSelectedRegion };
}

