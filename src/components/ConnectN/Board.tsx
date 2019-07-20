import React, { FC, useCallback } from 'react';
import { css, SerializedStyles } from '@emotion/core';
import rem from '../../utils/style/rem';
import { GameType } from '../../utils/connectN/connectN';

const boardStyles = css`
  margin: ${rem(20)} auto;
  box-sizing: border-box;
  display: grid;
  grid-auto-rows: auto;

  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  -webkit-tap-highlight-color: transparent;
`;

const boardStylesOnColNum = (colNum: number) => css`
  max-width: ${rem(80 * colNum)};
  grid-template-columns: repeat(${colNum}, 1fr);
`;

const boardStylesOnGameType: { [key in string]: SerializedStyles } = {
  connectN: css`
    grid-gap: ${rem(1)};
    background-color: lightgray;
    border: ${rem(2)} solid black;
  `,
  ticTacToe: css`
    grid-gap: ${rem(3)};
    background-color: black;
    border: ${rem(3)} solid white;
  `,
};

const cellStyles = css`
  cursor: pointer;
  background-color: white;
`;

const cellStylesOnGameType: { [key in string]: SerializedStyles } = {
  ticTacToe: css`
    width: 100%;
    position: relative;
    &::before {
      display: block;
      content: '';
      width: 100%;
      padding-bottom: 100%;
    }
  `,
};

const checkerStylesOnGameType: { [key in string]: SerializedStyles } = {
  connectN: css`
    width: auto;
    padding-bottom: calc(100% - ${rem(2 * 7)});
    margin: ${rem(5)};
    border-radius: 50%;
    border: ${rem(2)} solid gray;

    @media only screen and (max-width: 400px) {
      padding-bottom: calc(100% - ${rem(2 * 3)});
      margin: ${rem(2)};
      border: ${rem(1)} solid gray;
    }
  `,
  ticTacToe: css`
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    display: block;

    & svg {
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      width: 80%;
      height: 80%;
    }

    // & text {
    //   display: table-cell;
    //   text-align: center;
    //   vertical-align: middle;
    // }
  `,
};

export const playerCheckerStylesOnGameType: { [key in string]: SerializedStyles[] } = {
  connectN: [
    css`
      border-color: gray;
      background: yellow;
    `,
    css`
      border-color: white;
      background: red;

      @media only screen and (max-width: 400px) {
        border-color: white;
      }
    `,
    css`
      border-color: gray;
      background: skyblue;
    `,
    css`
      border-color: gray;
      background: pink;
    `,
  ],
  ticTacToe: [
    css`
      &::after {
        content: 'O:';
      }
    `,
    css`
      &::after {
        content: 'X:';
      }
    `,
  ],
};

const TicTacToePiece: FC<{ type?: 'O' | 'X' }> = ({ type }) => (
  <svg viewBox={type === 'O' ? '0 0 11 12' : '0 0 10 12'}>
    <text x={type === 'O' ? '1.5' : '1.5'} y={type === 'O' ? '10' : '10'} fontWeight="300">
      {type}
    </text>
  </svg>
);

interface Props {
  gameType?: GameType;
  rowNum: number;
  boards: number[][];
  onClickOnCell?(colInd: number, rowInd: number): (e: React.MouseEvent) => void;
}

const Board: FC<Props> = ({ gameType = GameType.connectN, rowNum, boards, onClickOnCell }) => {
  const colNum = boards[0].length;

  const cellGridPos = useCallback(
    (rowInd: number, colInd: number) => css`
      grid-row: ${rowNum - rowInd} / span 1;
      grid-column: ${colInd + 1} / span 1;
    `,
    [rowNum]
  );

  return (
    <div css={[boardStyles, boardStylesOnColNum(colNum), boardStylesOnGameType[gameType]]}>
      {boards[0].map((_c, colInd) =>
        Array.from(Array(rowNum), (_r, rowInd) => (
          <button
            type="button"
            aria-label="board"
            // eslint-disable-next-line react/no-array-index-key
            key={`cell-${colInd}-${rowInd}`}
            css={[cellStyles, cellStylesOnGameType[gameType], cellGridPos(rowInd, colInd)]}
            onClick={onClickOnCell && onClickOnCell(colInd, rowInd)}
          >
            <div
              css={[
                checkerStylesOnGameType[gameType],
                gameType === GameType.connectN &&
                  boards.reduce(
                    (result, _n, ind) =>
                      (boards[ind][colInd] & (1 << rowInd) &&
                        playerCheckerStylesOnGameType[gameType][ind]) ||
                      result,
                    css``
                  ),
              ]}
            >
              {gameType === GameType.ticTacToe &&
                boards.reduce(
                  (result, _n, ind) =>
                    (boards[ind][colInd] & (1 << rowInd) &&
                      [<TicTacToePiece type="O" />, <TicTacToePiece type="X" />][ind]) ||
                    result,
                  <TicTacToePiece />
                )}
            </div>
          </button>
        ))
      )}
    </div>
  );
};

export default Board;
