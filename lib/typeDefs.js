export default `
  type Query {
    getQuote: randomQuote
  }
    
  type randomQuote {
    author: String
    quote: String
  }
`
