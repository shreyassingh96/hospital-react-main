// Import required modules
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

// Import Apollo Client modules
import { ApolloClient, InMemoryCache } from '@apollo/client';
import { ApolloProvider } from '@apollo/client';

// Create a new Apollo Client instance
const client = new ApolloClient({ 
    uri: 'http://localhost:5000/graphql',
    cache: new InMemoryCache()
});

// Render the app with the Apollo Provider and the client
ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// This code initializes the Apollo Client with the specified GraphQL endpoint
// and renders the main App component wrapped in the Apollo Provider component,
// which allows all child components to access the client instance. Finally, it 
// renders the component to the root element in the HTML DOM.