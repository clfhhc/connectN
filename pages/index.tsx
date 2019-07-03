import React from 'react';
import { NextFC, NextContext } from 'next';
import Head from '../src/components/Head';
import ManifestHead from '../src/components/Head/ManifestHead';
import Link from '../src/components/Link';
import ConnectN from '../src/components/ConnectN';

const Page: NextFC<{}, {}, NextContext> = () => (
  <div>
    <ManifestHead
      title="Connect N"
      themeColor="#ffffff"
      hrefPage="/"
      hrefManifest="/static/mainfest/mainfest.json"
    />
    <Head title="Connect N" themeColor="white">
      <Link href="/" passHref>
        <link rel="canonical" />
      </Link>
    </Head>
    <ConnectN />
    <p>
      <Link href="/about">
        <a>About</a>
      </Link>
    </p>
  </div>
);

export default Page;
