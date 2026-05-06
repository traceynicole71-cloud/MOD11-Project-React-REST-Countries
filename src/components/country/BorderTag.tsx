import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

interface BorderTagProps {
  code: string;
}

// Takes ISO country code and fetches common name to display in link.
const BorderTag: React.FC<BorderTagProps> = ({ code }) => {
  const [fullName, setFullName] = useState<string>(code);

  useEffect(() => {
    const controller = new AbortController();

    const fetchBorderName = async () => {
      try {
        const response = await fetch(
          `https://restcountries.com/v3.1/alpha/${code}?fields=name`,
          { signal: controller.signal }
        );

        if (!response.ok) {
          throw new Error(`Failed to fetch border name: ${response.status}`);
        }

        const data = await response.json();
        const country = Array.isArray(data) ? data[0] : data;

        if (!country?.name?.common) {
          throw new Error(`No border name found for code: ${code}`);
        }

        setFullName(country.name.common);
      } catch (error) {
        if ((error as DOMException).name === 'AbortError') return;
        console.error(`Could not fetch name for border: ${code}`, error);
      }
    };

    fetchBorderName();

    return () => controller.abort();
  }, [code]);

  return (
    <Link
      to={`/country/${code}`}
      className="border-tag"
      title={`View details for ${fullName}`}
    >
      {fullName}
    </Link>
  );
};

export default BorderTag;
