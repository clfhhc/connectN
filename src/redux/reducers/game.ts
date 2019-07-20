import { Reducer } from 'redux';
import { ActionWithPayload } from '../../utils/redux/types';
import { UPDATE_GAME_RECORD, RESTART_GAME, PLACE_ONE_PIECE } from '../actions/actionTypes';
import objectAssign from '../../utils/common/objectAssign';
import {
  // GameType,
  GameRecord,
  placeOnePiece,
  resetGame,
  PlaceOnePieceProps,
  ResetGameProps,
} from '../../utils/connectN/connectN';

export const initialState: Readonly<GameRecord> = {
  boards: [[], []],
  win: -1,
  filledBoard: [],
  filledColumn: 0,
  gameOver: true,
  turn: 0,
};

// export const defaultState: {
//   [key in GameType]: GameRecord;
// } = {
//   ticTacToe: {
//     boards: [Array(3).fill(0), Array(3).fill(0)],
//     win: -1,
//     filledBoard: Array(3).fill(2 ** 3 - 1),
//     filledColumn: 2 ** 3 - 1,
//     gameOver: false,
//     turn: 0,
//   },
//   connectN: {
//     boards: [Array(7).fill(0), Array(7).fill(0)],
//     win: -1,
//     filledBoard: Array(7).fill(2 ** 6 - 1),
//     filledColumn: 2 ** 7 - 1,
//     gameOver: false,
//     turn: 0,
//   },
//   gomoku: {
//     boards: [Array(19).fill(0), Array(19).fill(0)],
//     win: -1,
//     filledBoard: Array(19).fill(2 ** 6 - 1),
//     filledColumn: 2 ** 19 - 1,
//     gameOver: false,
//     turn: 0,
//   },
// };

const reducer: Reducer<Readonly<GameRecord>, ActionWithPayload> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case UPDATE_GAME_RECORD: {
      return objectAssign()({}, state, action.payload as Readonly<Partial<GameRecord>>);
    }
    case PLACE_ONE_PIECE: {
      return {
        ...state,
        ...placeOnePiece(action.payload as Readonly<PlaceOnePieceProps>),
      };
    }
    case RESTART_GAME: {
      return {
        ...state,
        ...resetGame(action.payload as Readonly<ResetGameProps>),
      };
    }
    default: {
      return state;
    }
  }
};

export default reducer;
