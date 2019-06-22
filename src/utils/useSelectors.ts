import { useMemo } from 'react';
import { Selector } from './types';

function useSelectors<S>(state: S, mapStateToSelectors: Selector<S>, getDependencies: Selector<S>) {
  const dependencies = useMemo(() => getDependencies(state), [state]);
  const selectors = useMemo(() => mapStateToSelectors(state), [dependencies]);
  return selectors;
}

export default useSelectors;
