import React, { FC } from 'react';
import getConfig from 'next/config';
import { css } from '@emotion/core';
import Link from '../src/components/Link';
import ManifestHead from '../src/components/Head/ManifestHead';
import Board from '../src/components/ConnectN/Board';
import { GameType } from '../src/utils/connectN/connectN';
import rem from '../src/utils/style/rem';

const { publicRuntimeConfig } = getConfig();
const { commonKeyWords } = publicRuntimeConfig;

const linkBoardStyles = css`
  cursor: pointer;
  width: auto;
  display: flex;
  flex-flow: column;
  align-items: center;

  & > div {
    width: 100%;
    max-width: ${rem(150)};
  }

  & span {
    font-size: ${rem(30)};
    border: ${rem(1)} dotted gray;

    @media only screen and (max-width: ${rem(165)}) {
      font-size: 16.5vw;
    }
  }
`;

const Page: FC = () => (
  <div>
    <ManifestHead
      title="Connect Games"
      description="Connect Games - simple connect games using bitwise operations"
      keywords={commonKeyWords}
      themeColor="red"
      hrefCanonical="/"
      favIconPath="/static/icons/favicon.ico"
      appleIconPath="/static/icons/icon192x192.png"
      hrefManifest="/static/manifest/manifest.json"
    />
    <header>
      <h1
        css={css`
          text-align: center;
          font-weight: normal;
        `}
      >
        Connect Games
      </h1>
    </header>
    <main>
      <Link href="/connect-n">
        <a>
          <div css={linkBoardStyles}>
            <Board gameType={GameType.connectN} boards={[[1, 0], [0, 2]]} rowNum={2} />
            <span>Connect N</span>
          </div>
        </a>
      </Link>
      <Link href="/tic-tac-toe">
        <a>
          <div css={linkBoardStyles}>
            <Board gameType={GameType.ticTacToe} boards={[[0, 2, 0], [0, 0, 4]]} rowNum={3} />
            <span>Tic Tac Toe</span>
          </div>
        </a>
      </Link>
    </main>
  </div>
);

export default Page;
