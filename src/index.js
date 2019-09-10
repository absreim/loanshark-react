import React from 'react'
import ReactDOM from 'react-dom'
import { ApolloClient } from 'apollo-client'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { HttpLink } from 'apollo-link-http'
import { ApolloProvider, Query } from 'react-apollo'
import gql from 'graphql-tag'

const cache = new InMemoryCache()
const link = new HttpLink({
  uri: 'http://localhost:3000/graphql'
})
const client = new ApolloClient(cache, link)

// TODO: verfiy query is correct
const GET_USER = gql`
  query GetUser {
    me {
      id,
      email,
      name
    }
  }
`

// TODO: make more meaningful output
ReactDOM.render(
  <ApolloProvider client={client}>
    <Query query={GET_USER}>
      {({ data }) => (<p>`Welcome, ${data.name}!`</p>)}
    </Query>
  </ApolloProvider>,
  document.getElementById('root')
)
