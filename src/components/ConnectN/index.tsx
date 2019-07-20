import React, { FC, useState, useMemo, useCallback, KeyboardEvent, useEffect } from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { css } from '@emotion/core';
import Board, { playerCheckerStyles } from './Board';
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
import buttonReset from '../../utils/style/buttonReset';
import rem from '../../utils/style/rem';
import {
  RESTART_GAME,
  PLACE_ONE_PIECE,
  CHANGE_RULES,
  CHANGE_PLAYERS,
} from '../../redux/actions/actionTypes';
import objectIsEmpty from '../../utils/common/objectIsEmpty';

const gameType = GameType.connectN;

enum Settings {
  CHANGE_RULES_SETTINGS = 'CHANGE_RULES_SETTINGS',
  CHANGE_PLAYERS_SETTINGS = 'CHANGE_PLAYERS_SETTINGS',
}

const titleStylesOnN = (setting: Settings | null, winRule: number) => css`
  ${buttonReset};
  display: block;
  text-align: center;
  margin: ${rem(40)} auto;
  font-size: ${rem(36)};
  border-top: ${rem(1)} solid transparent;
  border-bottom: ${rem(1)} solid transparent;
  cursor: pointer;

  ::after {
    content: '${
      setting === Settings.CHANGE_RULES_SETTINGS ? 'Change Rules' : `Connect ${winRule}`
    }';
  }

  :hover {
    border-top: ${rem(1)} solid black;
    border-bottom: ${rem(1)} solid black;
  }

  :hover ::after {
    content: 'Change Rules';
  }
`;

const bannerStylesOnBanner = (banner: string) => css`
  ${buttonReset};
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

const legendStyles = css`
  ${buttonReset};
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
  border: ${rem(1)} solid lightgray;
  border-radius: 50%;
  margin-right: ${rem(10)};
  width: ${rem(15)};
  height: ${rem(15)};
`;

const inputContainerStyles = css`
  height: ${rem(25)};
`;

const inputStyles = css`
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

type Props = ConnectedProps<typeof mapStateToProps, typeof mapDispatchToProps>;

const ConnectN: FC<Props> = ({
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

  const titleStyles = useMemo(() => titleStylesOnN(setting, winRule), [setting, winRule]);

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
        <button
          type="button"
          aria-label="Title"
          css={titleStyles}
          onClick={() => {
            if (setting !== Settings.CHANGE_RULES_SETTINGS) {
              updateSetting(Settings.CHANGE_RULES_SETTINGS);
            }
          }}
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
          <button
            type="button"
            aria-label="banner"
            css={bannerStylesOnBanner(getBanner({ gameOver, turn, names, win }))}
            onClick={restart}
          />
        )}
      </div>
      <div css={inputContainerStyles}>
        {setting === Settings.CHANGE_PLAYERS_SETTINGS ? (
          <input
            ref={focusInput}
            aria-label="change-players-input"
            css={inputStyles}
            type="text"
            placeholder="up to 4 player's names with comma in between"
            value={inputText}
            onChange={handleChangeInput}
            onKeyDown={handleChangePlayers}
            onBlur={clearSetting}
          />
        ) : (
          <button
            type="button"
            aria-label="legend"
            css={legendStyles}
            onClick={() => updateSetting(Settings.CHANGE_PLAYERS_SETTINGS)}
          >
            {names.map((n, ind) => (
              <div css={legendLabelStyles} key={`legend-${n}`}>
                <div css={[legendColorStyles, playerCheckerStyles[ind]]} />
                {n}
              </div>
            ))}
          </button>
        )}
      </div>
      <Board boards={boards} rowNum={rowNum} onClickOnCell={handleClickOnCell} />
    </div>
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ConnectN);
