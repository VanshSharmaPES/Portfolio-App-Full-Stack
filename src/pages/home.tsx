import React from 'react';
import Head from 'next/head';
import Layout from '../components/Layout';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import Hero from '../components/Hero';

const HomePage: React.FC = () => {
  return (
    <Layout>
      <Head>
        <title>{PORTFOLIO_DATA.name} | Home</title>
        <meta name="description" content={PORTFOLIO_DATA.tagline} />
      </Head>

      <Hero />
    </Layout>
  );
};

export default HomePage;