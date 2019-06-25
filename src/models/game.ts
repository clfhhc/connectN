import produce from 'immer';
import createReducer from '../utils/createReducer';
import { ReducerObj } from '../utils/types';
import { GameRecord, gameRecordKeys } from '../utils/connect4';

/* eslint no-param-reassign: ["error", { "props": true, "ignorePropertyModificationsFor": ["draftState"] }] */

export const inititalState: {
  record: GameRecord;
} = {
  record: {
    boards: [Array(7).fill(0), Array(7).fill(0)],
    win: -1,
    filled: 2 ** 7 - 1,
    gameOver: false,
    turn: 0,
  },
};

type State = Readonly<typeof inititalState>;

const reducerObj: ReducerObj<State> = {
  updateGameRecord: (state, newRecord: Partial<GameRecord>) => {
    return produce(state, draftState => {
      gameRecordKeys.forEach(key => {
        // @ts-ignore
        if (newRecord[key] !== undefined) draftState.record[key] = newRecord[key];
      });
    });
  },
};

export const reducer = createReducer(reducerObj);
