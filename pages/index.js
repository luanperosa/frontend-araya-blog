import React from 'react';
import Layout from '@/shared/components/layout';
import Header from '@/shared/components/header';
import About from '@/shared/components/about';
import Skills from '@/shared/components/skills';

export default function Home() {
  return (
    <Layout>
      <Header />
      <About />
      <Skills />
      <About />
    </Layout >);
}
