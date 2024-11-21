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

## Security Risks

For users on 14-Day Trial
this is the easiest way to build split-stack application
but it exposes your authorization token

![Security Risks](https://res.cloudinary.com/dzd5mddlm/image/upload/v1732209014/Discord/eqw6rmqpqb2cfyyqun6z.png)

```bash
curl --request POST   --header 'content-type: application/json'   --url 'http://localhost:8686/graphql'   --data '{"query":"{ sayHello }"}'
curl --request POST   --header 'content-type: application/json'   --url 'http://localhost:8686/graphql'   --data '{"query":"{ randomQuote { quote author } }"}'
```

## Learn More

To learn more, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Modus Documentation](https://docs.hypermode.com/) - learn about Hypermode features and API.

