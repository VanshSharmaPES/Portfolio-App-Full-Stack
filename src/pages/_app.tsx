import React from 'react';
import type { AppProps } from 'next/app';
// This path is necessary to load the global styles
import '../styles/globals.css'; 

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;