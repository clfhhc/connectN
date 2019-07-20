import React, { FC, useCallback } from 'react';
import { css } from '@emotion/core';
import rem from '../../utils/style/rem';
import buttonReset from '../../utils/style/buttonReset';

const boardStylesOnColNum = (colNum: number) => css`
  max-width: ${rem(80 * colNum)};
  margin: ${rem(20)} auto;
  box-sizing: border-box;
  display: grid;
  grid-template-columns: repeat(${colNum}, 1fr);
  grid-gap: 0;
  grid-auto-rows: auto;
  border: ${rem(2)} solid black;

  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  -webkit-tap-highlight-color: transparent;
`;

const cellStyles = css`
  ${buttonReset};
  cursor: pointer;
  border: ${rem(1)} solid lightgray;
`;

const checkerStyles = css`
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
`;

export const playerCheckerStyles = [
  css`
    border-color: gray;
    background: yellow;
  `,
  css`
    border-color: lightgray;
    background: red;
  `,
  css`
    border-color: gray;
    background: skyblue;
  `,
  css`
    border-color: lightgray;
    background: pink;
  `,
];

interface Props {
  rowNum: number;
  boards: number[][];
  onClickOnCell(colInd: number, rowInd: number): (e: React.MouseEvent) => void;
}

const Board: FC<Props> = ({ rowNum, boards, onClickOnCell }) => {
  const colNum = boards[0].length;

  const boardStyles = boardStylesOnColNum(colNum);

  const cellGridPos = useCallback(
    (rowInd: number, colInd: number) => css`
      grid-row: ${rowNum - rowInd} / span 1;
      grid-column: ${colInd + 1} / span 1;
    `,
    [rowNum]
  );

  return (
    <div css={boardStyles}>
      {boards[0].map((_c, colInd) =>
        Array.from(Array(rowNum), (_r, rowInd) => (
          <button
            type="button"
            aria-label="board"
            // eslint-disable-next-line react/no-array-index-key
            key={`cell-${colInd}-${rowInd}`}
            css={[cellStyles, cellGridPos(rowInd, colInd)]}
            onClick={onClickOnCell(colInd, rowInd)}
          >
            <div
              css={[
                checkerStyles,
                boards.reduce(
                  (result, _n, ind) =>
                    (boards[ind][colInd] & (1 << rowInd) && playerCheckerStyles[ind]) || result,
                  css``
                ),
              ]}
            />
          </button>
        ))
      )}
    </div>
  );
};

export default Board;
