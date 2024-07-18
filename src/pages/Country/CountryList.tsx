import { useCountries } from '@/services/queries/country.query';

const CountryList = () => {
  const { data, isLoading, isError } = useCountries();

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error fetching data</p>;
  if (!data) return null

  return (
    <div className="flex items-center justify-center">
      <div>
        <h2>List of Countries</h2>
        <ul>
          {data.map((country: { name: string }) => (
            <li key={country.name}>{country.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CountryList;
