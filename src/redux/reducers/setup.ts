import { Reducer } from 'redux';
import { ActionWithPayload, CHANGE_PLAYERS, CHANGE_RULES } from '../actions/actionTypes';
import { GameType, GameSetup } from '../../utils/connectN/connectN';

interface BoardLimit {
  maxRow: number;
  maxCol: number;
  minRow: number;
  minCol: number;
}

export const limitBoard: { [key in GameType]: BoardLimit } = {
  ticTacToe: {
    maxRow: 3,
    maxCol: 3,
    minRow: 3,
    minCol: 3,
  },
  connectN: {
    maxRow: 10,
    maxCol: 12,
    minRow: 3,
    minCol: 3,
  },
  gomoku: {
    maxRow: 10,
    maxCol: 12,
    minRow: 3,
    minCol: 3,
  },
};

interface PlayerLimit {
  maxPlayers: number;
  minPlayers: number;
}

export const limitPlayers: { [key in GameType]: PlayerLimit } = {
  ticTacToe: {
    maxPlayers: 2,
    minPlayers: 2,
  },
  connectN: {
    maxPlayers: 4,
    minPlayers: 2,
  },
  gomoku: {
    maxPlayers: 4,
    minPlayers: 2,
  },
};

export const inititalState: { [key in GameType]: GameSetup } = {
  ticTacToe: {
    rowNum: 3,
    colNum: 3,
    winRule: 3,
    names: ['O', 'X'],
    next: [1, 0],
    fullColumn: 2 ** 3 - 1,
    fullBoard: Array(3).fill(2 ** 3 - 1),
    checkAgainst: 2 ** 3 - 1,
    boardSetup: Array(3).fill(0),
  },
  connectN: {
    rowNum: 6,
    colNum: 7,
    winRule: 4,
    names: ['O', 'X'],
    next: [1, 0],
    fullColumn: 2 ** 7 - 1,
    fullBoard: Array(7).fill(2 ** 6 - 1),
    checkAgainst: 2 ** 4 - 1,
    boardSetup: Array(7).fill(0),
  },
  gomoku: {
    rowNum: 19,
    colNum: 19,
    winRule: 5,
    names: ['O', 'X'],
    next: [1, 0],
    fullColumn: 2 ** 19 - 1,
    fullBoard: Array(19).fill(2 ** 19 - 1),
    checkAgainst: 2 ** 5 - 1,
    boardSetup: Array(19).fill(0),
  },
};

const reducer: { [key: string]: Reducer<any, ActionWithPayload<any>> } = {
  [CHANGE_PLAYERS]: (
    state,
    action: ActionWithPayload<Pick<GameSetup, 'names'> & { gameType: GameType }>
  ) => {
    const { names, gameType } = action.payload;
    const { maxPlayers, minPlayers } = limitPlayers[gameType];

    if (names.length > maxPlayers || names.length < minPlayers) {
      return state;
    }
    return {
      ...state,
      names,
      next: names.map((_, ind) => (ind + 1 === names.length ? 0 : ind + 1)),
    };
  },
  [CHANGE_RULES]: (
    state,
    action: ActionWithPayload<
      Pick<GameSetup, 'rowNum' | 'colNum' | 'winRule'> & { gameType: GameType }
    >
  ) => {
    const { rowNum, colNum, winRule, gameType } = action.payload;
    const { maxCol, minCol, maxRow, minRow } = limitBoard[gameType];

    if (winRule > rowNum || winRule > colNum || winRule < 3) {
      return state;
    }
    if (colNum > maxCol || colNum < minCol || rowNum > maxRow || rowNum < minRow) {
      return state;
    }
    return {
      ...state,
      rowNum,
      colNum,
      winRule,
      fullColumn: 2 ** colNum - 1,
      fullBoard: Array(colNum).fill(2 ** rowNum - 1),
      checkAgainst: 2 ** winRule - 1,
      boardSetup: Array(colNum).fill(0),
    };
  },
};

export default reducer;
