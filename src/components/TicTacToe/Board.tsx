import React, { FC, useCallback } from 'react';
import { css } from '@emotion/core';
import rem from '../../utils/style/rem';
import buttonReset from '../../utils/style/buttonReset';

const boardStylesOnColNum = (colNum: number) => css`
  max-width: ${rem(80 * colNum)};
  margin: ${rem(20)} auto;
  box-sizing: border-box;
  background-color: black;
  display: grid;
  grid-template-columns: repeat(${colNum}, 1fr);
  grid-gap: ${rem(3)};
  grid-auto-rows: auto;
  border: ${rem(3)} solid white;

  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  -webkit-tap-highlight-color: transparent;
`;

const cellStyles = css`
  ${buttonReset};
  cursor: pointer;
  background-color: white;
  width: 100%;
  position: relative;
  &::before {
    display: block;
    content: '';
    width: 100%;
    padding-bottom: 100%;
  }
`;

const checkerStyles = css`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  & div {
    width: 100%;
    height: 100%;
    display: table;
  }
  & span {
    display: table-cell;
    text-align: center;
    vertical-align: middle;
    font-size: ${rem(60)};

    @media only screen and (max-width: 248px) {
      font-size: 25vw;
    }
  }
`;

export const playerCheckerStyles = [
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
            <div css={checkerStyles}>
              <div>
                <span>
                  {boards.reduce(
                    (result, _n, ind) =>
                      (boards[ind][colInd] & (1 << rowInd) && ['O', 'X'][ind]) || result,
                    ''
                  )}
                </span>
              </div>
            </div>
          </button>
        ))
      )}
    </div>
  );
};

export default Board;
