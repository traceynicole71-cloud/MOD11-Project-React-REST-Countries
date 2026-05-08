import {
    createContext,
    useCallback,
    useContext,
    useEffect,
    useMemo,
    useState,
    type ReactNode,
} from 'react';

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
    tld?: string[];
    currencies?: Record<string, { name: string; symbol: string }>;
    languages?: Record<string, string>;
    borders?: string[];
}
interface CountriesContextValue {
    countries: Country[];
    filteredCountries: Country[];
    loading: boolean;
    error: string | null;
    searchQuery: string;
    setSearchQuery: (query: string) => void;
    selectedRegion: string;
    setSelectedRegion: (region: string) => void;
    refetchCountries: () => Promise<void>;
}

const CountriesContext = createContext<CountriesContextValue | undefined>(undefined);

// Provides countries state and filtering to the component tree.
export const CountriesProvider = ({ children }: { children: ReactNode }) => {
    const [countries, setCountries] = useState<Country[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const [searchQuery, setSearchQuery] = useState<string>('');
    const [selectedRegion, setSelectedRegion] = useState<string>('');

    const fetchAllCountries = useCallback(async () => {
        //  console.log('[useCountries] fetchAllCountries called');
        setLoading(true);
        setError(null);

        try {
            const response = await fetch(
                // Max 10 fields allowed — Detail page fetches its own data per country
                "https://restcountries.com/v3.1/all?fields=name,cca3,flags,population,region,capital"
            );


            if (!response.ok) {
                throw new Error('Failed to fetch countries');
            }

            const data = await response.json();
            // console.log('[useCountries] fetch success — countries:', data.length);
            setCountries(data);
        } catch (err) {
            console.error('[useCountries] fetch failed:', err);
            setError('Failed to fetch countries');
        } finally {
            setLoading(false);
        }
    }, []);

    useEffect(() => {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        fetchAllCountries();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const filteredCountries = useMemo(() => {
        return countries.filter((country) => {
            const matchesSearch = country.name.common
                .toLowerCase()
                .includes(searchQuery.toLowerCase());

            const matchesRegion = selectedRegion
                ? country.region.toLowerCase() === selectedRegion.toLowerCase()
                : true;

            return matchesSearch && matchesRegion;
        });
    }, [countries, searchQuery, selectedRegion]);

    const value: CountriesContextValue = {
        countries,
        filteredCountries,
        loading,
        error,
        searchQuery,
        setSearchQuery,
        selectedRegion,
        setSelectedRegion,
        refetchCountries: fetchAllCountries,
    };

    return <CountriesContext.Provider value={value}>{children}</CountriesContext.Provider>;
};

// eslint-disable-next-line react-refresh/only-export-components
export const useCountries = () => {
    const context = useContext(CountriesContext);

    if (!context) {
        throw new Error('useCountries must be used within a CountriesProvider');
    }

    return context;
};


