import React from 'react';
import { NextSFC } from 'next';
import Head from '../src/components/Head';
import Link from '../src/components/Link';

interface Props {
  pathname: string;
}

const Page: NextSFC<Props> = ({ pathname }) => (
  <div>
    <Head title="Index" />
    <h1>Index</h1>
    <p>This the index page.</p>
    <p>{`Your request pathname: ${pathname}`}</p>
    <p>
      <Link href="/about">
        <a>About</a>
      </Link>
    </p>
  </div>
);

Page.getInitialProps = async ({ pathname }: Props): Promise<Props> => {
  return { pathname };
};

export default Page;
