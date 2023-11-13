import React from 'react';
import { Toaster } from 'react-hot-toast';

import '../styles/globals.css'
import { Layout } from '../components'
import { StateContext } from '../context/StateContext';

// to access the component inside the <Layout>: useful feature of react is passing in {children} to <Layout> or the parent wrapper component will render the inner children components

function MyApp({ Component, pageProps }) {
  return (
    <StateContext>
      <Layout>
        <Toaster />
        <Component {...pageProps} />
      </Layout>
    </StateContext>
  );
}

export default MyApp
