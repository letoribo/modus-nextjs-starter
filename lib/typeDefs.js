export default `
  type Query {
    greeting(name: String): Hello
    getQuote: randomQuote
  }

  type Hello {
    sayHello: String
  }
    
  type randomQuote {
    author: String
    quote: String
  }
`