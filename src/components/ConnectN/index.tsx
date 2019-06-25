import React, { useReducer, useEffect, useCallback, useMemo } from 'react';
import css from 'styled-jsx/css';
import useReducerContext from '../../models/index';
import { inititalState, reducer } from '../../models/game';
import { resetGame, placeOnePiece, getBanner } from '../../utils/connectN';
import { rem } from '../../utils/styleUtils';

const titleStyles = css.resolve`
  display: block;
  text-align: center;
  // margin-left: auto;
  // margin-right: auto;
  // margin-top: ${rem(40)};
  // margin-bottom: ${rem(40)};
  margin: ${rem(40)} auto;
  font-size: ${rem(36)};
`;

const bannerStyles = css.resolve`
  display: block;
  text-align: center;
  // margin-left: auto;
  // margin-right: auto;
  // margin-top: ${rem(20)};
  // margin-bottom: ${rem(20)};
  margin: ${rem(20)} auto;
  font-size: ${rem(20)};
`;

const cellStyles = css.resolve`
  cursor: pointer;
  border: ${rem(1)} solid black;
`;

const checkerStyles = css.resolve`
  width: auto;
  padding-bottom: 100%;
  border-radius: 50%;
  border: ${rem(2)} solid transparent;
`;

const playerCheckerStyles = [
  css.resolve`
    border-color: skyblue;
    background: yellow;
  `,
  css.resolve`
    border-color: white;
    background: red;
  `,
  css.resolve`
    border-color: gray;
    background: skyblue;
  `,
  css.resolve`
    border-color: white;
    background: pink;
  `,
];

const boardStylesOnColNum = (colNum: number) => css.resolve`
  max-width: ${rem(80 * colNum)};
  margin-left: auto;
  margin-right: auto;
  box-sizing: border-box;
  display: grid;
  grid-template-columns: repeat(${colNum}, 1fr);
  grid-gap: 0;
  grid-auto-rows: auto;
`;

const ConnectN: React.FC = () => {
  const { state } = useReducerContext();
  const [gameState, gameDispatch] = useReducer(reducer, inititalState);
  const { fullBoard, boardSetup, next, names, colNum, rowNum, checkAgainst, winRule } = state.setup;
  const { record: gameRecord } = gameState;

  useEffect(() => {
    gameDispatch({
      type: 'updateGameRecord',
      payload: resetGame(gameRecord, fullBoard, boardSetup, next),
    });
  }, [state.setup]);

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

  const handleClickOnCell = useCallback(
    (colInd: number) => () => {
      gameDispatch({
        type: 'updateGameRecord',
        payload: gameRecord.gameOver
          ? resetGame(gameRecord, fullBoard, boardSetup, next)
          : placeOnePiece({
              col: colInd,
              curRecord: gameRecord,
              fullBoard,
              checkAgainst,
              next,
            }),
      });
    },
    [gameDispatch, placeOnePiece, gameRecord, fullBoard, checkAgainst, next]
  );

  const boardStyles = boardStylesOnColNum(colNum);
  return (
    <div>
      <h1 className={titleStyles.className}>
        {`Connect ${winRule}`}
        {titleStyles.styles}
      </h1>
      <p className={bannerStyles.className}>
        {getBanner(gameRecord, names)}
        {bannerStyles.styles}
      </p>
      <div className={boardStyles.className}>
        {boardStyles.styles}
        {gameRecord.boards[0].map((_c, colInd) =>
          Array.from(Array(rowNum), (_r, rowInd) => (
            <button
              // eslint-disable-next-line react/no-array-index-key
              key={`cell-${colInd}-${rowInd}`}
              type="button"
              className={`${cellStyles.className} ${cellGridPosStyles[colInd][rowInd].className}`}
              onClick={handleClickOnCell(colInd)}
            >
              {cellGridPosStyles[colInd][rowInd].styles}
              {cellStyles.styles}
              <div
                className={`${checkerStyles.className}${gameRecord.boards.reduce(
                  (result, _n, ind) =>
                    (gameRecord.boards[ind][colInd] & (1 << rowInd) &&
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
    </div>
  );
};

export default ConnectN;
