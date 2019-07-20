import React from 'react';
import App, { Container } from 'next/app';
import { Provider } from 'react-redux';
import { Global, css } from '@emotion/core';
import withRedux, { StoreProps } from '../src/utils/redux/withRedux';
import { ActionWithPayload } from '../src/utils/redux/types';
import withReduxSaga from '../src/utils/redux/withReduxSaga';
import initStore, { Store } from '../src/redux/store';
import { globalButtonReset } from '../src/utils/style/buttonReset';

class MyApp extends App<StoreProps<Store>> {
  public render() {
    const { Component, pageProps, store } = this.props;
    return (
      <Container>
        <Provider store={store}>
          <Global
            styles={[
              globalButtonReset,
              css`
                body {
                  touch-action: manipulation;
                }
                a:link {
                  text-decoration: none;
                }
                a:visited {
                  text-decoration: none;
                }
                a:hover {
                  text-decoration: underline;
                }
                a:active {
                  text-decoration: underline;
                }
              `,
            ]}
          />
          <Component {...pageProps} />
        </Provider>
      </Container>
    );
  }
}

export default withRedux<ActionWithPayload, Store>(initStore)(
  withReduxSaga<ActionWithPayload, Store>(MyApp)
);
