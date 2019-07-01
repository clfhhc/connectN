import React from 'react';
import { NextSFC } from 'next';
import Head from '../src/components/Head';
import Link from '../src/components/Link';

const Page: NextSFC = () => (
  <div>
    <Head title="About" themeColor="white">
      <Link href="/" passHref>
        <link rel="canonical" />
      </Link>
    </Head>
    <h1>About</h1>
    <p>Connect N is using bitwise to check winning condition.</p>
    <p>by David Chen</p>
    <p>
      <Link href="/">
        <a>Connect 4</a>
      </Link>
    </p>
  </div>
);

export default Page;
