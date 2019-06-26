import { useReducer } from 'react';
import createUseContext from 'constate';
import combineReducers from '../utils/combineReducers';
import { reducer as setupReducer, inititalState as setupInitialState } from './setup';

const initialState = {
  setup: setupInitialState,
};

const combinedReducer = combineReducers({
  setup: setupReducer,
});

function useDispatch() {
  const [state, dispatch] = useReducer(combinedReducer, initialState);
  return { state, dispatch };
}

const useReducerContext = createUseContext(useDispatch, value => [value.state]);

export default useReducerContext;
