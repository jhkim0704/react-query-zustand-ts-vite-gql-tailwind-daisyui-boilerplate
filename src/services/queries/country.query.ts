import { useQuery } from '@tanstack/react-query';
import { CountryInfoProps } from '@/types/country';
import { getCountries, getCountry } from '@/services/api/country.service';

export const useCountries = () =>
  useQuery<CountryInfoProps[]>(['countries'], async () => {
    const res = await getCountries();
    return res;
  },
  {
    cacheTime: 100000,
  },
);


export const useCountry = (code: string) =>
  useQuery<CountryInfoProps>(['country', {code}], async () => {
    const res = await getCountry(code);
    return res;
  });



