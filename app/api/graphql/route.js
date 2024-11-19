import { ApolloServer } from '@apollo/server';
import { startServerAndCreateNextHandler } from '@as-integrations/next';
import { makeExecutableSchema } from '@graphql-tools/schema';
import typeDefs from '@/lib/typeDefs.js';
const token = process.env.token;
const hypermode_url = process.env.hypermode_url || "https://proj-self.hypermode.app/graphql";

const resolvers = {
  Query: {
    greeting: async (_, { name }) => {
      try {
        const response = await fetch(hypermode_url, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
          },
          body: JSON.stringify({
            /* variables: { name },
            query: '{query sayHello($name:String){sayHello(name: $name)}}', */
            query: `{sayHello(name: "${name}")}`,
          })
        })
        const data = await response.json();
        console.log(data)
        return data.data;
      } catch (error) {
        console.error("error:", error);
      }
    },
    getQuote: async () => {
      const response = await fetch(hypermode_url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({
          //variables: {},
          query: '{ randomQuote { author quote } }',
        })
      })
      const data = await response.json();
      console.log(data)
      return data.data.randomQuote;
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