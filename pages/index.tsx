import React from 'react';
import { NextFC, NextContext } from 'next';
import ManifestHead from '../src/components/Head/ManifestHead';
import Link from '../src/components/Link';
import ConnectN from '../src/components/ConnectN';

const Page: NextFC<{}, {}, NextContext> = () => (
  <div>
    <ManifestHead
      title="Connect N"
      themeColor="#ffffff"
      hrefPage="/"
      hrefManifest="/static/manifest/manifest.json"
    />
    <ConnectN />
    <p>
      <Link href="/about">
        <a>About</a>
      </Link>
    </p>
  </div>
);

export default Page;
