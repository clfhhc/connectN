import { Action, ReducerObj } from './types';

const createReducer = <S extends {}>(reducerObj: ReducerObj<S>) => (state: S, action: Action) =>
  action.type in reducerObj ? reducerObj[action.type](state, action) : state;

export default createReducer;