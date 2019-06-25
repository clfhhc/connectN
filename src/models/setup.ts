import produce from 'immer';
import createReducer from '../utils/createReducer';
import { ReducerObj } from '../utils/types';
import { setInitialState } from '../utils/setState';

/* eslint no-param-reassign: ["error", { "props": true, "ignorePropertyModificationsFor": ["draftState"] }] */

const maxRow = 20;
const maxCol = 20;
const minRow = 3;
const minCol = 3;

export const inititalState = {
  rowNum: 6,
  colNum: 7,
  winRule: 4,
  names: ['O', 'X'],
  next: [1, 0],
  fullBoard: 2 ** 7 - 1,
  checkAgainst: 2 ** 4 - 1,
  boardSetup: Array(7).fill(0),
};

type State = Readonly<typeof inititalState>;

const reducerObj: ReducerObj<State> = {
  resetSetup: setInitialState,
  changePlayers: (state, names: string[]) => {
    if (names.length > 4) return state;
    return produce(state, draftState => {
      draftState.names = names;
      draftState.next = names.map((_, ind) => (ind + 1 === names.length ? 0 : ind + 1));
    });
  },

  changeRules: (
    state,
    { rowNum, colNum, winRule }: { rowNum: number; colNum: number; winRule: number }
  ) => {
    if (winRule > rowNum || winRule > colNum || winRule < 2) return state;
    if (colNum > maxCol || colNum < minCol || rowNum > maxRow || rowNum < minRow) return state;
    return produce(state, draftState => {
      draftState.rowNum = rowNum;
      draftState.colNum = colNum;
      draftState.winRule = winRule;
      draftState.fullBoard = 2 ** colNum - 1;
      draftState.checkAgainst = 2 ** winRule - 1;
      draftState.boardSetup = Array(colNum).fill(0);
    });
  },
};

export const reducer = createReducer(reducerObj);
