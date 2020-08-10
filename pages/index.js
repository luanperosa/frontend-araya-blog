import React from 'react';
import Layout from '../shared/components/layout';
import Header from '../shared/components/header';
import About from '../shared/components/about';

export default function Home() {
  return (
    <Layout>
      <Header />
      <About />
      <About />
    </Layout >);
}
