export const setInitialState = <S>(_s: S, payload: S) => payload;

export const updateState = <S>(prevState: S, payload: Partial<S>) => ({
  ...prevState,
  ...payload,
});
