import React, { FC } from 'react';
import getConfig from 'next/config';
import { css } from '@emotion/core';
import ManifestHead from '../src/components/Head/ManifestHead';
import dynamicStoreCallbackWrap from '../src/utils/redux/dynamicStoreCallbackWrap';
import { Store } from '../src/redux/store';
import ConnectN from '../src/components/ConnectN';
import Link from '../src/components/Link';
import setup, { initialSetup } from '../src/redux/reducers/setup';
import game from '../src/redux/reducers/game';
import { RESET_SETUP, RESTART_GAME } from '../src/redux/actions/actionTypes';
import { ActionWithPayload } from '../src/utils/redux/types';
import { GameType } from '../src/utils/connectN/connectN';
import rem from '../src/utils/style/rem';

const { publicRuntimeConfig } = getConfig();
const { commonKeyWords } = publicRuntimeConfig;

const flexCenterStyles = css`
  display: flex;
  justify-content: center;
`;

const linkStyles = css`
  display: inline-block;
  font-size: ${rem(30)};
  border: ${rem(1)} dotted gray;
  cursor: pointer;
  margin: ${rem(10)} auto;
`;

const callbackOnMount = (store: Store) => {
  store.substitueReducers({ setup, game });
  store.dispatch({ type: RESET_SETUP, payload: initialSetup.connectN });
  store.dispatch({ type: RESTART_GAME, payload: initialSetup.connectN });
};

const callbackOnUnmount = (store: Store) => {
  store.removeReducers(['setup', 'game']);
};

export const Page: FC = () => (
  <div>
    <ManifestHead
      title="Connect N"
      description="Connect N - a simple expandable connect game like connect 4 using bitwise operations"
      keywords={commonKeyWords}
      themeColor="red"
      hrefCanonical="/connect-n"
      favIconPath="/static/icons/favicon.ico"
      appleIconPath="/static/icons/icon192x192.png"
      hrefManifest="/static/manifest/manifest.json"
    />
    <ConnectN gameType={GameType.connectN} />
    <footer>
      <div css={flexCenterStyles}>
        <Link href="/">
          <a>
            <div css={linkStyles}>index</div>
          </a>
        </Link>
      </div>
    </footer>
  </div>
);

export default dynamicStoreCallbackWrap<ActionWithPayload, Store>({
  callbackOnMount,
  callbackOnUnmount,
  Child: Page,
});
