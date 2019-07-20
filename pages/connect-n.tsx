import React, { FC } from 'react';
import getConfig from 'next/config';
import ManifestHead from '../src/components/Head/ManifestHead';
import dynamicStoreCallbackWrap from '../src/utils/redux/dynamicStoreCallbackWrap';
import { Store } from '../src/redux/store';
import ConnectN from '../src/components/ConnectN';
import setup, { initialSetup } from '../src/redux/reducers/setup';
import game from '../src/redux/reducers/game';
import { RESET_SETUP, RESTART_GAME } from '../src/redux/actions/actionTypes';
import { ActionWithPayload } from '../src/utils/redux/types';
import { GameType } from '../src/utils/connectN/connectN';

const { publicRuntimeConfig } = getConfig();
const { commonKeyWords } = publicRuntimeConfig;

const storeCallback = (store: Store) => {
  store.substitueReducers({ setup, game });
  store.dispatch({ type: RESET_SETUP, payload: initialSetup.connectN });
  store.dispatch({ type: RESTART_GAME, payload: initialSetup.connectN });
};

export const Page: FC = () => (
  <section>
    <ManifestHead
      title="Connect N"
      description="a simple expandable connect game like connect 4 using bitwise operations"
      keywords={commonKeyWords}
      themeColor="red"
      hrefCanonical="/connect-n"
      favIconPath="/static/icons/favicon.ico"
      appleIconPath="/static/icons/icon192x192.png"
      hrefManifest="/static/manifest/manifest.json"
    />
    <ConnectN gameType={GameType.connectN} />
  </section>
);

export default dynamicStoreCallbackWrap<ActionWithPayload, Store>({
  callback: storeCallback,
  Child: Page,
});
