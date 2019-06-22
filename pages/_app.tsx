import React from 'react';
import { NextFC } from 'next';
import { Container, DefaultAppIProps, AppProps, NextAppContext } from 'next/app';
import useReducerContext from '../src/models/index';

export interface Props extends Partial<DefaultAppIProps>, Partial<AppProps> {}

const MyApp: NextFC<Props, DefaultAppIProps, NextAppContext> = ({ Component, pageProps }) => (
  <Container>
    <useReducerContext.Provider>
      {Component && <Component {...pageProps} />}
    </useReducerContext.Provider>
  </Container>
);

MyApp.getInitialProps = async ({ Component, ctx }) => {
  const pageProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {};
  return { pageProps };
};

export default MyApp;
