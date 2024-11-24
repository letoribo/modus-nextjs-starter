import { ApolloServer } from '@apollo/server';
import { startServerAndCreateNextHandler } from '@as-integrations/next';
import { makeExecutableSchema } from '@graphql-tools/schema';
import typeDefs from '@/lib/typeDefs.js';

const resolvers = {
  Query: {
    greeting: async (_, { name }) => ({ sayHello: `Hello, ${name}` }),
    getQuote: async () => {
      const response = await fetch('https://zenquotes.io/api/random')
      const [data] = await response.json();
      return { quote: data.q, author: data.a };
    }
  },
}

const schema = makeExecutableSchema({ typeDefs, resolvers })

const server = new ApolloServer({
  schema,
  introspection: true,
});

const handler = startServerAndCreateNextHandler(server, {
  context: async (req, res) => ({ req, res }),
});

export { handler as GET, handler as POST };