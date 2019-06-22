import { useReducer } from 'react';
import createUseContext from 'constate';
import combineReducers from '../utils/combineReducers';
import useSelectors from '../utils/useSelectors';
import { reducer as gameReducer, inititalState as gameInitialState } from './game';
import { reducer as serverReducer, inititalState as serverInitialState } from './server';

const initialState = {
  game: gameInitialState,
  server: serverInitialState,
};
type State = typeof initialState;

const combinedReducer = combineReducers({
  game: gameReducer,
  server: serverReducer,
});

function useDispatch() {
  const [state, dispatch] = useReducer(combinedReducer, initialState);

  // adding selectors
  const { getgame, getHalf } = useSelectors<State>(
    state,
    A => ({ getgame: () => A.game.number, getHalf: () => A.game.number / 2 }),
    A => A.game.number
  );
  const selectors = { getgame, getHalf };
  return { state, dispatch, selectors };
}

const useReducerContext = createUseContext(useDispatch, value => [value.state]);

export default useReducerContext;
