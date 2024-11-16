import { gql } from '@apollo/client';

export const GREET = gql`
  query ($name: String) {
    sayHello(name: $name)
  }
`
export const GET_QUOTE = gql`
  query {
    getQuote {
      quote
      author
    }
  }
`