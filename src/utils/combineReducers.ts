import { ReducersMapObject, Reducer, GenericObject } from './types';

export default function combineReducers<S = GenericObject>(
  reducers: ReducersMapObject<S>
): Reducer<S> {
  const finalReducers: ReducersMapObject<S> = Object.keys(reducers).reduce<ReducersMapObject<S>>(
    (final, key) =>
      typeof reducers[key as keyof S] === 'function'
        ? { ...final, [key]: reducers[key as keyof S] }
        : final,
    {} as ReducersMapObject<S>
  );

  const finalReducerKeys = Object.keys(finalReducers);

  // @ts-ignore
  return function combination(state = {}, action) {
    let hasChanged = false;
    // @ts-ignore
    const nextState: S = {};
    finalReducerKeys.forEach(key => {
      const reducer = finalReducers[key as keyof S];
      // @ts-ignore
      const previousStateForKey = state[key];
      const nextStateForKey = reducer(previousStateForKey, action);
      // @ts-ignore
      nextState[key] = nextStateForKey;
      hasChanged = hasChanged || nextStateForKey !== previousStateForKey;
    });
    return hasChanged ? nextState : state;
  };
}
