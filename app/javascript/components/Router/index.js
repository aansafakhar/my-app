import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import ApolloClient, { InMemoryCache } from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Signin from '../Signin';
import Signup from '../Signup';
import HelloWorld from '../HelloWorld';

const cache = new InMemoryCache();

const client = new ApolloClient({
  uri: '/graphql',
  cache,
});

// eslint-disable-next-line react/display-name
export default () => (
  <ApolloProvider client={client}>
    <Router>
      <Route exact path="/sign_up">
        <Signup />
      </Route>
      <Route exact path="/sign_in">
        <Signin />
      </Route>
      <Route exact path="/">
        <HelloWorld />
      </Route>
    </Router>
    <ToastContainer />
  </ApolloProvider>
);
