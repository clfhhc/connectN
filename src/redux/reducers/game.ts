import { Reducer } from 'redux';
import { UPDATE_GAME_RECORD, ActionWithPayload } from '../actions/actionTypes';
import objectAssign from '../../utils/common/objectAssign';
import { GameType, GameRecord } from '../../utils/connectN/connectN';

export const initialState: {
  [key in GameType]: GameRecord;
} = {
  ticTacToe: {
    boards: [Array(3).fill(0), Array(3).fill(0)],
    win: -1,
    filledBoard: Array(3).fill(2 ** 3 - 1),
    filledColumn: 2 ** 3 - 1,
    gameOver: false,
    turn: 0,
  },
  connectN: {
    boards: [Array(7).fill(0), Array(7).fill(0)],
    win: -1,
    filledBoard: Array(7).fill(2 ** 6 - 1),
    filledColumn: 2 ** 7 - 1,
    gameOver: false,
    turn: 0,
  },
  gomoku: {
    boards: [Array(19).fill(0), Array(19).fill(0)],
    win: -1,
    filledBoard: Array(19).fill(2 ** 6 - 1),
    filledColumn: 2 ** 19 - 1,
    gameOver: false,
    turn: 0,
  },
};

const reducer: { [key: string]: Reducer<any, ActionWithPayload<any>> } = {
  [UPDATE_GAME_RECORD]: (state, action: ActionWithPayload<Partial<GameRecord>>) =>
    objectAssign()({}, state, action.payload),
};

export default reducer;
