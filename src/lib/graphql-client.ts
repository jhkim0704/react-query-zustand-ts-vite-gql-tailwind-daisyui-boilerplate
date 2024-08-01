import { ApolloClient, InMemoryCache } from '@apollo/client';

// const client = new ApolloClient({
//   uri: import.meta.env.VITE_API_ENDPOINT,
//   cache: new InMemoryCache()
// });

// export default client;

const countryClient = new ApolloClient({
  uri: import.meta.env.VITE_API_COUNTRY_ENDPOINT,
  cache: new InMemoryCache(),
});

const spaceClient = new ApolloClient({
  uri: import.meta.env.VITE_API_SPACE_ENDPOINT,
  cache: new InMemoryCache(),
});

export { countryClient, spaceClient };
