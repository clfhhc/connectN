import React, { FC } from 'react';
import ManifestHead from '../src/components/Head/ManifestHead';
import dynamicStoreCallbackWrap from '../src/utils/redux/dynamicStoreCallbackWrap';
import { Store } from '../src/redux/store';
import TicTacToe from '../src/components/TicTacToe';
import setup, { initialSetup } from '../src/redux/reducers/setup';
import game from '../src/redux/reducers/game';
import { RESET_SETUP, RESTART_GAME } from '../src/redux/actions/actionTypes';
import { ActionWithPayload } from '../src/utils/redux/types';

const storeCallback = (store: Store) => {
  store.substitueReducers({ setup, game });
  store.dispatch({ type: RESET_SETUP, payload: initialSetup.ticTacToe });
  store.dispatch({ type: RESTART_GAME, payload: initialSetup.ticTacToe });
};

export const Page: FC = () => (
  <section>
    <ManifestHead
      title="Nextjs Typescript Eslint TicTacToe"
      themeColor="red"
      hrefCanonical="/ticTacToe"
      favIconPath="/static/icons/favicon.ico"
      appleIconPath="/static/icons/icon192x192.png"
      hrefManifest="/static/manifest/manifest.json"
    />
    <TicTacToe />
  </section>
);

export default dynamicStoreCallbackWrap<ActionWithPayload, Store>({
  callback: storeCallback,
  Child: Page,
});
