import React from 'react';
import { NextSFC } from 'next';
import ManifestHead from '../src/components/Head/ManifestHead';
import Link from '../src/components/Link';

const Page: NextSFC = () => (
  <div>
    <ManifestHead
      title="about"
      themeColor="#ffffff"
      hrefPage="/about"
      favIconPath="/static/icons/favicon.ico"
      hrefManifest="/static/manifest/manifest.json"
    />
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
