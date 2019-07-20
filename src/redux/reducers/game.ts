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
