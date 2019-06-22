import createReducer from '../utils/createReducer';
import { ReducerObj } from '../utils/types';

export const inititalState = {
  pathname: '',
};

const reducerObj: ReducerObj<typeof inititalState> = {
  setPathname: (state, action) => ({
    ...state,
    pathname: action.payload,
  }),
};

export const reducer = createReducer(reducerObj);
