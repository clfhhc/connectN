import { Reducer } from 'redux';

const createReducer = (initialState: any, handlers: { [key: string]: Reducer<any, any> }) => (
  state: any = initialState,
  action: any
) => (handlers[action.type] ? handlers[action.type](state, action) : state);

export default createReducer;
