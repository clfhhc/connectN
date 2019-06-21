import React from 'react';
import { NextSFC } from 'next';
import Head from '../src/components/Head';
import Link from '../src/components/Link';

const Page: NextSFC = () => (
  <div>
    <Head title="About" />
    <h1>About</h1>
    <p>This the About page.</p>
    <p>
      <Link href="/">
        <a>Index</a>
      </Link>
    </p>
  </div>
);

export default Page;
