import React from 'react';
import { NextFC } from 'next';
import ManifestHead from '../src/components/Head/ManifestHead';
import Link from '../src/components/Link';
import ConnectN from '../src/components/ConnectN';

const Page: NextFC = () => (
  <div>
    <ManifestHead
      title="Connect N"
      themeColor="red"
      hrefPage="/connectN"
      favIconPath="/static/icons/favicon.ico"
      appleIconPath="/static/icons/icon192x192.png"
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
