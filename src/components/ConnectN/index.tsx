import React, { FC, useState, useCallback, KeyboardEvent, useEffect } from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { css, SerializedStyles } from '@emotion/core';
import Board, { playerCheckerStylesOnGameType } from './Board';
import { ConnectedProps } from '../../utils/redux/types';
import {
  getBanner,
  GameRecord,
  GameSetup,
  ResetGameProps,
  PlaceOnePieceProps,
  GameType,
} from '../../utils/connectN/connectN';
import { ChangeRulesProps, ChangePlayersProps } from '../../redux/reducers/setup';
import rem from '../../utils/style/rem';
import {
  RESTART_GAME,
  PLACE_ONE_PIECE,
  CHANGE_RULES,
  CHANGE_PLAYERS,
} from '../../redux/actions/actionTypes';
import objectIsEmpty from '../../utils/common/objectIsEmpty';

enum Settings {
  CHANGE_RULES_SETTINGS = 'CHANGE_RULES_SETTINGS',
  CHANGE_PLAYERS_SETTINGS = 'CHANGE_PLAYERS_SETTINGS',
}

const titleStyles = css`
  display: block;
  text-align: center;
  margin: ${rem(15)} auto;
  font-size: ${rem(32)};
`;

const titleStylesOnN = (winRule: number) => css`
  &::after {
    content: 'Connect ${winRule}';
  }
`;

const titleStylesForTicTacToe = css`
  &::after {
    content: 'Tic-Tac-Toe';
  }
`;

const bannerStylesOnBanner = (banner: string) => css`
  display: block;
  text-align: center;
  margin: ${rem(10)} auto;
  font-size: ${rem(20)};
  height: 100%;

  ::after {
    content: "${banner}";
  }
`;

const legendStyles = css`
  box-sizing: border-box;
  display: flex;
  flex-flow: row wrap;
  margin: ${rem(10)} auto;
  font-size: ${rem(20)};
  justify-content: center;
  height: 100%;
`;

const legendLabelStyles = css`
  margin: 0 ${rem(10)};
  display: inline-block;

  :first-of-type {
    margin-left: 0;
  }
  :last-of-type {
    margin-right: 0;
  }
`;

const legendColorStyles = css`
  display: inline-block;
  margin-right: ${rem(10)};
  width: ${rem(15)};
  height: ${rem(15)};
`;

const legendColorStylesOnGameType: { [key in string]: SerializedStyles } = {
  connectN: css`
    border: ${rem(1)} solid lightgray;
    border-radius: 50%;
  `,
};

const inputContainerStyles = css`
  height: ${rem(25)};
`;

const inputStyles = css`
  display: block;
  text-align: center;
  font-size: ${rem(16)};
  outline: none;
  margin: ${rem(10)} auto;
  max-width: ${rem(350)};
  border: ${rem(1)} solid gray;
  height: 100%;
  width: 100%;
`;

const buttonFlexStyles = css`
  display: flex;
  justify-content: center;
`;

const buttonStyles = css`
  font-size: ${rem(20)};
  border: ${rem(1)} dashed gray;
  cursor: pointer;
  margin: ${rem(10)} ${rem(15)};

  :hover {
    color: blue;
  }
`;

const mapStateToProps = (state: any): { setup: GameSetup; game: GameRecord } => ({
  setup: state.setup || {},
  game: state.game || {},
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  resetGame: (resetGameProps: ResetGameProps) =>
    dispatch({ type: RESTART_GAME, payload: resetGameProps }),
  placeOnePiece: (placeOnePieceProps: PlaceOnePieceProps) =>
    dispatch({ type: PLACE_ONE_PIECE, payload: placeOnePieceProps }),
  changeRules: (changeRulesProps: ChangeRulesProps) =>
    dispatch({ type: CHANGE_RULES, payload: changeRulesProps }),
  changePlayers: (changePlayersProps: ChangePlayersProps) =>
    dispatch({ type: CHANGE_PLAYERS, payload: changePlayersProps }),
});

interface OwnProps {
  gameType: GameType;
}

type Props = ConnectedProps<typeof mapStateToProps, typeof mapDispatchToProps, OwnProps>;

const ConnectN: FC<Props> = ({
  gameType,
  setup,
  game,
  resetGame,
  placeOnePiece,
  changeRules,
  changePlayers,
}) => {
  const [setting, updateSetting] = useState<Settings | null>(null);
  const [inputText, changeInputText] = useState<string>('');

  const { fullBoard, boardSetup, next, names, rowNum, checkAgainst, winRule, fullColumn } = setup;
  const { win, gameOver, turn, boards } = game;

  const clearSetting = useCallback(() => {
    updateSetting(null);
    changeInputText('');
  }, [updateSetting, changeInputText]);

  const focusInput = useCallback((node: HTMLInputElement | null) => {
    if (node) node.focus();
  }, []);

  const restart = () => resetGame({ next, fullBoard, fullColumn, boardSetup, turn });
  const tossOnePiece = ({ colInd, rowInd }: { colInd: number; rowInd: number }) =>
    placeOnePiece({
      gameType,
      colInd,
      rowInd,
      curRecord: game,
      fullColumn,
      checkAgainst,
      next,
    });

  useEffect(() => {
    if (!objectIsEmpty(setup)) {
      restart();
    }
  }, [setup]);

  const handleClickOnCell = (colInd: number, rowInd: number) => () => {
    if (setting) return;
    if (gameOver) {
      restart();
      return;
    }
    tossOnePiece({ colInd, rowInd });
  };

  const handleChangeRules = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.which === 13) {
      try {
        const inputArray = inputText.split(',').map(text => {
          const num = parseInt(text.trim(), 10);
          if (Number.isNaN(num)) throw new Error();
          return num;
        });
        if (inputArray.length !== 3) throw new Error('invalid input');
        changeRules({
          gameType,
          rowNum: inputArray[1],
          colNum: inputArray[0],
          winRule: inputArray[2],
        });
        clearSetting();
      } catch (err) {
        console.log(err);
      }
    } else if (e.keyCode === 27) {
      clearSetting();
    }
  };

  const handleChangePlayers = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.which === 13) {
      try {
        const inputArray = inputText.split(',').map(text => text.trim());
        changePlayers({
          gameType,
          names: inputArray,
        });
        clearSetting();
      } catch (err) {
        console.log(err);
      }
    } else if (e.keyCode === 27) {
      clearSetting();
    }
  };

  const handleChangeInput = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => changeInputText(e.target.value),
    [changeInputText]
  );

  if (objectIsEmpty(game) || objectIsEmpty(setup)) {
    return null;
  }

  return (
    <div>
      <h1>
        <div
          css={[
            titleStyles,
            gameType === GameType.connectN && titleStylesOnN(winRule),
            gameType === GameType.ticTacToe && titleStylesForTicTacToe,
          ]}
        />
      </h1>
      <div css={inputContainerStyles}>
        {setting === Settings.CHANGE_RULES_SETTINGS ? (
          <input
            ref={focusInput}
            aria-label="change-rules-label"
            css={inputStyles}
            type="text"
            placeholder="[column],[row],[number]"
            value={inputText}
            onChange={handleChangeInput}
            onKeyDown={handleChangeRules}
            onBlur={() => {
              clearSetting();
            }}
          />
        ) : (
          <div css={bannerStylesOnBanner(getBanner({ gameOver, turn, names, win }))} />
        )}
      </div>
      <div css={inputContainerStyles}>
        {setting === Settings.CHANGE_PLAYERS_SETTINGS ? (
          <input
            ref={focusInput}
            aria-label="change-players-input"
            css={inputStyles}
            type="text"
            placeholder={
              gameType === GameType.ticTacToe
                ? "change players' names, with comma in between"
                : "up to 4 player's names, with comma in between"
            }
            value={inputText}
            onChange={handleChangeInput}
            onKeyDown={handleChangePlayers}
            onBlur={clearSetting}
          />
        ) : (
          <div css={legendStyles}>
            {names.map((n, ind) => (
              <div css={legendLabelStyles} key={`legend-${n}`}>
                <div
                  css={[
                    legendColorStyles,
                    legendColorStylesOnGameType[gameType],
                    playerCheckerStylesOnGameType[gameType][ind],
                  ]}
                />
                {n}
              </div>
            ))}
          </div>
        )}
      </div>
      <div css={buttonFlexStyles}>
        {gameType !== GameType.ticTacToe && (
          <button
            type="button"
            css={buttonStyles}
            onClick={() => {
              if (setting !== Settings.CHANGE_RULES_SETTINGS && gameType === GameType.connectN) {
                updateSetting(Settings.CHANGE_RULES_SETTINGS);
              }
            }}
          >
            Change Rules
          </button>
        )}
        <button
          type="button"
          css={buttonStyles}
          onClick={() => updateSetting(Settings.CHANGE_PLAYERS_SETTINGS)}
        >
          Change Players
        </button>
        <button type="button" css={buttonStyles} onClick={restart}>
          Restart
        </button>
      </div>
      <Board
        gameType={gameType}
        boards={boards}
        rowNum={rowNum}
        onClickOnCell={handleClickOnCell}
      />
    </div>
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ConnectN);
