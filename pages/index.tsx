import React from 'react';
import { NextFC, NextContext } from 'next';
import Head from '../src/components/Head';
import Link from '../src/components/Link';
import useReducerContext from '../src/models';

interface Props {
  pathname: string;
}

const Page: NextFC<Props, Props, NextContext> = ({ pathname }) => {
  const { state, dispatch, selectors } = useReducerContext();
  React.useEffect(() => dispatch({ type: 'setPathname', payload: pathname }), []);

  return (
    <div>
      <Head title="Index" />
      <h1>Index</h1>
      <p>This the index page.</p>
      <p>{`Your request pathname: ${state.server.pathname}`}</p>
      <p>{`number is ${selectors.getHalf()}`}</p>
      <p>
        <Link href="/about">
          <a>About</a>
        </Link>
      </p>
    </div>
  );
};

Page.getInitialProps = async ({ pathname }) => {
  return { pathname };
};

export default Page;
