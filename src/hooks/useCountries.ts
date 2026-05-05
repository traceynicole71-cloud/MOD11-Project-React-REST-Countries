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
    capital?: string [];
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
//Fetch all countries from the API
//useCallback to make sure function reference doesn't change with every render
    const fetchAllCountries = useCallback(async () => {
        setLoading(true);
        setError(null);
        try {
            const response = await fetch('https://restcountries.com/v3.1/all');
            const data = await response.json();
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

    return { countries, loading, error, searchQuery, setSearchQuery };
}

