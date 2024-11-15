import { HttpLink } from "@apollo/client";
import {
  registerApolloClient,
  ApolloClient,
  InMemoryCache,
} from "@apollo/experimental-nextjs-app-support";

export const { getClient } = registerApolloClient(() => {
  const origin = process.env.NODE_ENV === "development" ? "http://localhost:8686" : "https://my.vercel.app";
  return new ApolloClient({
    cache: new InMemoryCache(),
    link: new HttpLink({
      uri: `${origin}/graphql`,
    }),
  });
});