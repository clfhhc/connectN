import createReducer from '../utils/createReducer';
import { ReducerObj } from '../utils/types';

export const inititalState = {
  number: 5,
};

const reducerObj: ReducerObj<typeof inititalState> = {
  increment: (state, action) => ({
    ...state,
    number: state.number + (action.payload === undefined ? 1 : action.payload),
  }),
};

export const reducer = createReducer(reducerObj);
