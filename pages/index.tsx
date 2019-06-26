import React from 'react';
import { NextFC, NextContext } from 'next';
import Head from '../src/components/Head';
import Link from '../src/components/Link';
import ConnectN from '../src/components/ConnectN';

const Page: NextFC<{}, {}, NextContext> = () => (
  <div>
    <Head title="Connect N" />
    <ConnectN />
    <p>
      <Link href="/about">
        <a>About</a>
      </Link>
    </p>
  </div>
);

export default Page;
