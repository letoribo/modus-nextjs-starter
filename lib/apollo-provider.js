"use client";

import { ApolloLink, createHttpLink } from "@apollo/client";
import { setContext } from '@apollo/client/link/context';
import {
  ApolloNextAppProvider,
  ApolloClient,
  InMemoryCache,
  SSRMultipartLink,
} from "@apollo/experimental-nextjs-app-support";
const hypermode_url = process.env.hypermode_url || "https://proj-self.hypermode.app/graphql";

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

function makeClient() {
  const httpLink = createHttpLink({
    uri: hypermode_url
  });
  const link = authLink.concat(httpLink);
  return new ApolloClient({
    cache: new InMemoryCache(),
    link:
      typeof window === "undefined"
        ? ApolloLink.from([
            new SSRMultipartLink({
              stripDefer: true,
            }),
            link,
          ])
        : link,
  });
}

export function ApolloWrapper({ children }) {
  return (
    <ApolloNextAppProvider makeClient={makeClient}>
      {children}
    </ApolloNextAppProvider>
  );
}