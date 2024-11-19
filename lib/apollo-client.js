import { createHttpLink } from "@apollo/client";
import { setContext } from '@apollo/client/link/context';
import {
  registerApolloClient,
  ApolloClient,
  InMemoryCache,
} from "@apollo/experimental-nextjs-app-support";
const hypermode_url = process.env.hypermode_url || "https://proj-self.hypermode.app/graphql";

const httpLink = createHttpLink({
  uri: hypermode_url
});

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = process.env.token;
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    }
  }
});

export const { getClient } = registerApolloClient(() => {
  return new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache()
  });
});