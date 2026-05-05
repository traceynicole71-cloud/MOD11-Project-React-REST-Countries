import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

//3-letter country code cca3 from the Detail page
interface BorderTagProps {
    code: string;
}
//Takes ISO country code and fetches common name to display in link
const BorderTag: React.FC<BorderTagProps> = ({ code }) => {
    const [fullName, setFullName] = useState<string>(code);
//Limit fields to name to keep network requests light
    useEffect(() => {
const controller = new AbortController();

        const fetchBorderName = async () => {
    try {
        const response = await fetch(
          `https://restcountries.com/v3.1/alpha/${code}?fields=name`  
        );

<<<<<<< HEAD
        if (!response.ok) {
=======
        if (response.ok) {
            const data = await response.json();
            setFullName(data.name.common);
        } else {
>>>>>>> f01e01c (BorderTag edit)
            throw new Error(`Failed to fetch border name: ${response.status}`);
        }

        const data = await response.json();
        const country = data[0];

        if (!country?.name?.common) {
            throw new Error(`No border name found for code: ${code}`);
        }

        setFullName(country.name.common);
    } catch (error) {
console.error(`Could not fetch name for border: ${code}`, error);
    }
};

fetchBorderName();
    }, [code]);

return (
    <Link
    to={`/country/${code.toLowerCase()}`}
    className="border-tag"
    title={`View details for ${fullName}`}
    >
        {fullName}
    </Link>
);
};

export default BorderTag;