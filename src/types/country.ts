export interface LanguageProps {
  code: string;
  name: string;
}

export interface CountryInfoProps {
  code: string;
  name: string;
  native: string;
  capital: string;
  phone: string;
  currency: string;
  emoji: string;
  emojiU: string;
  languages: LanguageProps[];
}

export interface GetCountryResponse {
  country: CountryInfoProps;
}

export interface GetCountriesResponse {
  countries: CountryInfoProps[];
}

export interface GetCountryGqlType {
  (code: string): Promise<CountryInfoProps>
}

export interface GetCountriesGqlType {
  (): Promise<CountryInfoProps[]>
}