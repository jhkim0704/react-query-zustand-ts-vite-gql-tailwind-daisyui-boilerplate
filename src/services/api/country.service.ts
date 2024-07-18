
import { countryClient } from '@/lib/graphql-client';
import { GetCountriesGqlType, GetCountriesResponse, GetCountryGqlType, GetCountryResponse } from '@/types/country';
import { _queries, _fragments } from "@/services/api/graphql/queries/country.gql";

export const getCountry:GetCountryGqlType = async (code) => {
  const { data } = await countryClient.query<GetCountryResponse>({
    query: _queries.GetCountry,
    variables: { code },
  });
  
  return data.country
};

export const getCountries: GetCountriesGqlType = async () => {
  const { data } = await countryClient.query<GetCountriesResponse>({
    query: _queries.GetCountries,
  });
  
  return data.countries
};
