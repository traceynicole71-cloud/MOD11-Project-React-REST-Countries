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
const fetchBorderName = async () => {
    try {
        const response = await fetch(
          `https://restcountries.com/v3.1/alpha/${code}?fields=name`  
        );

        if (response.ok) {
            const data = await response.json();
            setFullName(data.name.common);
        }
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