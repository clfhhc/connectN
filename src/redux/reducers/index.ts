import { ReducersMapObject } from 'redux';
import { ActionWithPayload } from '../../utils/redux/types';

export const defaultState = {
  // add common initialStates here
};

const commonReducers: ReducersMapObject<typeof defaultState, ActionWithPayload> = {
  // add common reducers here
};

export default commonReducers;
