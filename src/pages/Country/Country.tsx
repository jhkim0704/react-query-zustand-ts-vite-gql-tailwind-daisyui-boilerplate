import { useCountry } from '@/services/queries/country.query';
import Count from './Count';
import { LanguageProps } from '@/types/country';

const Country = () => {
  const { data, isLoading, isError } = useCountry('BR');

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error fetching data</p>;
  if (!data) return null;
  const { name, capital, currency, languages } = data; // 데이터에서 필요한 필드 추출

  return (
    <div className="h-screen flex items-center justify-center">
      <div></div>
      <div>
        <h2>Get of Countries</h2>
        <ul>
          <li>{name}</li>
          <li>{capital}</li>
          <li>{currency}</li>
          <li>
            Languages:
            <ul>
              {languages.map((language: LanguageProps) => (
                <li className="indent-3" key={language.code}>
                  - {language.name}
                </li>
              ))}
            </ul>
          </li>
          <li>
            <br />
            <Count />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Country;
