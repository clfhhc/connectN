import React, { useReducer, useEffect, useCallback } from 'react';
import css from 'styled-jsx/css';
import useReducerContext from '../../models/index';
import Board from './Board';
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

const ConnectN: React.FC = () => {
  const { state } = useReducerContext();
  const [gameState, gameDispatch] = useReducer(reducer, inititalState);
  const { fullBoard, boardSetup, next, names, rowNum, checkAgainst, winRule } = state.setup;
  const { record: gameRecord } = gameState;

  useEffect(() => {
    gameDispatch({
      type: 'updateGameRecord',
      payload: resetGame(gameRecord, fullBoard, boardSetup, next),
    });
  }, [state.setup]);

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
      <Board boards={gameRecord.boards} rowNum={rowNum} onClickOnCell={handleClickOnCell} />
    </div>
  );
};

export default ConnectN;
