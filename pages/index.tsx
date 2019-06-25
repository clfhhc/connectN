import React from 'react';
import { NextFC, NextContext } from 'next';
import Head from '../src/components/Head';
import Link from '../src/components/Link';
import Connect4 from '../src/components/ConnectN';

const Page: NextFC<{}, {}, NextContext> = () => (
  <div>
    <Head title="Connect N" />
    <Connect4 />
    <p>
      <Link href="/about">
        <a>About</a>
      </Link>
    </p>
  </div>
);

export default Page;
