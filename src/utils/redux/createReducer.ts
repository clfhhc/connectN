import { Action, ReducersMapObject } from 'redux';

const createReducer = (initialState: any, handlers: ReducersMapObject) => (
  state: any = initialState,
  action: Action
) => (handlers[action.type] ? handlers[action.type](state, action) : state);

export default createReducer;
