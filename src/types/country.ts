//Interface representing structure of a country object
//Returned by the REST Countries API
//Ensures type safety across the application
export interface Country {
   //Common and Official names of the countries
    name: {
        common: string;
        official: string;
       //Native names are keyed by language code ("fra": {...})
        nativeName?: {
            [key: string]: {
                common: string;
                official: string;
            };
        };
    };
//Array of top-level domain extensions ([".br"])
    tld?: string[];
//The 3-letter ISO alpha-3 code used for border mapping
    cca3: string;
//Currencies by code ("USD": {"name": "United States dollar" })
    currencies?: {
        [key: string]: {
            name: string;
            symbol: string;
        };
    };
//Capital city names
    capital?: string[];
//Regions or continents the country belongs to ("Americas")
    region: string;
//Sub-region ("South America")
    subregion?: string;
//Languages spoken by key ("spa": "Spanish")
    languages?: {
        [key: string]: string;
    };
//Links to SVG and PNG flag images
    flags: {
        png: string;
        svg: string;
        alt?: string;
    };
//Total population count
    population: number;
//List of neighboring countries using cca3 codes
    borders?: string[];
}
//Helper TYPE for home page grid
export type CountrySummary = Pick<CountrySummary, 'name' | 'population' | 'region' | 'capital' | 'flag' | 'cca3'>;