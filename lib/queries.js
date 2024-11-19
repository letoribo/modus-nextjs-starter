import { gql } from '@apollo/client';

export const GREETING = gql`
  query($name: String) {
    greeting(name: $name) {
      sayHello
    }
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