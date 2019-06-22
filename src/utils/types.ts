import React from 'react';

export interface GenericObject {
  [type: string]: any;
}

export interface Action {
  type: string;
  payload?: any;
}

export type Reducer<S, A = Action> = React.Reducer<S, A>;

export type ReducersMapObject<S = GenericObject, A extends Action = Action> = {
  [K in keyof S]: Reducer<S[K], A>;
};

export interface ReducerObj<S> {
  [type: string]: Reducer<S>;
}

export type Selector<S> = (state: S) => any;
