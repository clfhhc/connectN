import { Dispatch, useCallback } from 'react';
import { Action } from './types';

const useAction = (dispatch: Dispatch<Action>, type: string) =>
  useCallback((payload: any) => dispatch({ type, payload }), [dispatch, type]);

export default useAction;
