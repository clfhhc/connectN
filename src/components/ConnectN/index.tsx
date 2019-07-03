import React, { useReducer, useEffect, useCallback, useState, useMemo } from 'react';
import css from 'styled-jsx/css';
import useReducerContext from '../../models/index';
import Board, { playerCheckerStyles } from './Board';
import { inititalState, reducer } from '../../models/game';
import { resetGame, placeOnePiece, getBanner } from '../../utils/connectN';
import { rem } from '../../utils/styleUtils';

enum Settings {
  CHANGE_RULES = 'CHANGE_RULES',
  CHANGE_PLAYERS = 'CHANGE_PLAYERS',
}

const titleStylesOnN = (setting: Settings | null, winRule: number) => css.resolve`
  display: block;
  text-align: center;
  margin: ${rem(40)} auto;
  font-size: ${rem(36)};
  border-top: ${rem(1)} solid transparent;
  border-bottom: ${rem(1)} solid transparent;
  cursor: pointer;

  ::after {
    content: '${setting === Settings.CHANGE_RULES ? 'Change Rules' : `Connect ${winRule}`}';
  }

  :hover {
    border-top: ${rem(1)} solid black;
    border-bottom: ${rem(1)} solid black;
  }

  :hover ::after {
    content: 'Change Rules';
  }
`;

const bannerStylesOnBanner = (banner: string) => css.resolve`
  display: block;
  text-align: center;
  margin: ${rem(20)} auto;
  font-size: ${rem(20)};
  cursor: pointer;
  border-top: ${rem(1)} solid transparent;
  border-bottom: ${rem(1)} solid transparent;
  height: 100%;

  ::after {
    content: "${banner}";
  }

  :hover {
    border-top: ${rem(1)} solid black;
    border-bottom: ${rem(1)} solid black;
  }

  :hover ::after {
    content: 'Restart Game';
  }
`;

const legendStyles = css.resolve`
  display: flex;
  flex-flow: row wrap;
  margin: ${rem(20)} auto;
  font-size: ${rem(20)};
  justify-content: center;
  cursor: pointer;
  border-top: ${rem(1)} solid transparent;
  border-bottom: ${rem(1)} solid transparent;
  height: 100%;

  :hover {
    border-top: ${rem(1)} solid black;
    border-bottom: ${rem(1)} solid black;
  }
`;

const legendLabelStyles = css.resolve`
  margin: 0 ${rem(10)};
  display: inline-block;

  :first-of-type {
    margin-left: 0;
  }
  :last-of-type {
    margin-right: 0;
  }
`;

const legendColorStyles = css.resolve`
  display: inline-block;
  border: ${rem(1)} solid lightgray;
  border-radius: 50%;
  margin-right: ${rem(10)};
  width: ${rem(15)};
  height: ${rem(15)};
`;

const inputContainerStyles = css.resolve`
  height: ${rem(25)};
`;

const inputStyles = css.resolve`
  display: block;
  text-align: center;
  font-size: ${rem(16)};
  outline: none;
  margin: ${rem(20)} auto;
  max-width: ${rem(350)};
  border: ${rem(1)} solid gray;
  height: 100%;
  width: 100%;
`;

const ConnectN: React.FC = () => {
  const { state, dispatch } = useReducerContext();
  const [gameState, gameDispatch] = useReducer(reducer, inititalState);
  const [setting, updateSetting] = useState<Settings | null>(null);
  const [inputText, changeInputText] = useState<string>('');
  const { fullBoard, boardSetup, next, names, rowNum, checkAgainst, winRule } = state.setup;
  const { record: gameRecord } = gameState;

  const restartGame = useCallback(() => {
    gameDispatch({
      type: 'updateGameRecord',
      payload: resetGame(gameRecord, fullBoard, boardSetup, next),
    });
  }, [gameRecord, fullBoard, boardSetup, next]);

  useEffect(() => {
    restartGame();
  }, [state.setup]);

  const titleStyles = useMemo(() => titleStylesOnN(setting, winRule), [setting, winRule]);
  const bannerStyles = useMemo(() => bannerStylesOnBanner(getBanner(gameRecord, names)), [
    gameRecord,
    names,
  ]);

  const clearSetting = useCallback(() => {
    updateSetting(null);
    changeInputText('');
  }, [updateSetting, changeInputText]);

  const focusInput = useCallback((node: HTMLInputElement | null) => {
    if (node) node.focus();
  }, []);

  const handleClickOnCell = useCallback(
    (colInd: number) => () => {
      if (setting) return;
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
    [gameDispatch, placeOnePiece, gameRecord, fullBoard, checkAgainst, next, setting]
  );

  return (
    <div>
      <style jsx global>
        {`
          body {
            touch-action: manipulation;
          }
        `}
      </style>
      <h1>
        <button
          type="button"
          aria-label="Title"
          className={titleStyles.className}
          onClick={() => {
            if (setting !== Settings.CHANGE_RULES) {
              updateSetting(Settings.CHANGE_RULES);
            }
          }}
        >
          {titleStyles.styles}
        </button>
      </h1>
      <div className={inputContainerStyles.className}>
        {setting === Settings.CHANGE_RULES ? (
          <input
            ref={focusInput}
            aria-label="change-rules-label"
            className={inputStyles.className}
            type="text"
            placeholder="[column],[row],[number]"
            value={inputText}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => changeInputText(e.target.value)}
            onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => {
              if (e.which === 13) {
                try {
                  const inputArray = inputText.split(',').map(text => {
                    const num = parseInt(text.trim(), 10);
                    if (Number.isNaN(num)) throw new Error();
                    return num;
                  });
                  if (inputArray.length !== 3) throw new Error();
                  dispatch({
                    type: 'changeRules',
                    payload: {
                      rowNum: inputArray[1],
                      colNum: inputArray[0],
                      winRule: inputArray[2],
                    },
                  });
                } catch (err) {
                  console.log('invalid input');
                }
                clearSetting();
              } else if (e.keyCode === 27) {
                clearSetting();
              }
            }}
            onBlur={() => {
              clearSetting();
            }}
          />
        ) : (
          <button
            type="button"
            aria-label="banner"
            className={bannerStyles.className}
            onClick={() => restartGame()}
          >
            {bannerStyles.styles}
          </button>
        )}
      </div>
      {inputStyles.styles}
      {inputContainerStyles.styles}
      <div className={inputContainerStyles.className}>
        {setting === Settings.CHANGE_PLAYERS ? (
          <input
            ref={focusInput}
            aria-label="change-players-input"
            className={inputStyles.className}
            type="text"
            placeholder="up to 4 player's names with comma in between"
            value={inputText}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => changeInputText(e.target.value)}
            onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => {
              if (e.which === 13) {
                try {
                  const inputArray = inputText.split(',').map(text => text.trim());
                  if (inputArray.length < 1 || inputArray.length > 4) throw new Error();
                  dispatch({
                    type: 'changePlayers',
                    payload: inputArray,
                  });
                } catch (err) {
                  console.log('invalid input');
                }
                clearSetting();
              } else if (e.keyCode === 27) {
                clearSetting();
              }
            }}
            onBlur={() => {
              clearSetting();
            }}
          />
        ) : (
          <button
            type="button"
            aria-label="legend"
            className={legendStyles.className}
            onClick={() => updateSetting(Settings.CHANGE_PLAYERS)}
          >
            {legendStyles.styles}
            {names.map((n, ind) => (
              <div className={legendLabelStyles.className} key={`legend-${n}`}>
                {legendLabelStyles.styles}
                <div
                  className={`${legendColorStyles.className}
                  ${playerCheckerStyles[ind].className}`}
                >
                  {playerCheckerStyles[ind].styles}
                  {legendColorStyles.styles}
                </div>
                {n}
              </div>
            ))}
          </button>
        )}
      </div>
      <Board boards={gameRecord.boards} rowNum={rowNum} onClickOnCell={handleClickOnCell} />
    </div>
  );
};

export default ConnectN;
