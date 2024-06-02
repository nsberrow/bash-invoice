// pages/about.tsx
import { NextPage } from 'next';
import Head from 'next/head';

const About: NextPage = () => {
  return (
    <div>
      <Head>
        <title>About Us</title>
        <meta name="description" content="Learn more about us." />
      </Head>
      <main>
        <h1>About Us</h1>
        <p>Welcome to the about page. This is where you can learn more about us.</p>
      </main>
    </div>
  );
};

export default About;