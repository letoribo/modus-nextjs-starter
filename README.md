## Modus Next.js starter

```bash
npm install
# or
yarn
# or
pnpm install
```

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

```bash
curl --request POST   --header 'content-type: application/json'   --url 'http://localhost:8686/graphql'   --data '{"query":"{ sayHello }"}'
curl 'http://localhost:8686/graphql' \
    -H 'Content-Type: application/json' \
    --data '{"query":"query sayHello($name: String) { sayHello(name: $name) }","variables":{ "name":"Hypermode" }}'
curl --request POST   --header 'content-type: application/json'   --url 'http://localhost:8686/graphql'   --data '{"query":"{ randomQuote { quote author } }"}'
```

## Learn More

To learn more, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Modus Documentation](https://docs.hypermode.com/) - learn about Hypermode features and API.

