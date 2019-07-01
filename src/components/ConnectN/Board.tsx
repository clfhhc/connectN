import React, { useCallback, useMemo } from 'react';
import css from 'styled-jsx/css';
import { rem } from '../../utils/styleUtils';

const boardStylesOnColNum = (colNum: number) => css.resolve`
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

const cellStyles = css.resolve`
  cursor: pointer;
  border: ${rem(1)} solid lightgray;
`;

const checkerStyles = css.resolve`
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
  css.resolve`
    border-color: gray;
    background: yellow;
  `,
  css.resolve`
    border-color: lightgray;
    background: red;
  `,
  css.resolve`
    border-color: gray;
    background: skyblue;
  `,
  css.resolve`
    border-color: lightgray;
    background: pink;
  `,
];

interface Props {
  rowNum: number;
  boards: number[][];
  onClickOnCell(colInd: number): (e: React.MouseEvent) => void;
}

const Board: React.FC<Props> = ({ rowNum, boards, onClickOnCell }) => {
  const colNum = boards[0].length;

  const boardStyles = boardStylesOnColNum(colNum);

  const cellGridPos = useCallback(
    (rowInd: number, colInd: number) => css.resolve`
      grid-row: ${rowNum - rowInd} / span 1;
      grid-column: ${colInd + 1} / span 1;
    `,
    [rowNum]
  );

  const cellGridPosStyles = useMemo(
    () =>
      Array.from(Array(colNum), (_c, colInd) =>
        Array.from(Array(rowNum), (_r, rowInd) => cellGridPos(rowInd, colInd))
      ),
    [colNum, rowNum, cellGridPos]
  );

  return (
    <div className={boardStyles.className}>
      {boardStyles.styles}
      {boards[0].map((_c, colInd) =>
        Array.from(Array(rowNum), (_r, rowInd) => (
          <button
            type="button"
            aria-label="board"
            // eslint-disable-next-line react/no-array-index-key
            key={`cell-${colInd}-${rowInd}`}
            className={`${cellStyles.className} ${cellGridPosStyles[colInd][rowInd].className}`}
            onClick={onClickOnCell(colInd)}
          >
            {cellGridPosStyles[colInd][rowInd].styles}
            {cellStyles.styles}
            <div
              className={`${checkerStyles.className}${boards.reduce(
                (result, _n, ind) =>
                  (boards[ind][colInd] & (1 << rowInd) &&
                    ` ${playerCheckerStyles[ind].className}`) ||
                  result,
                ''
              )}`}
            >
              {checkerStyles.styles}
              {playerCheckerStyles.map(styles => styles.styles)}
            </div>
          </button>
        ))
      )}
    </div>
  );
};

export default Board;
