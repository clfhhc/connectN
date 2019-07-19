import { Action } from 'redux';

export interface ActionWithPayload<P = any> extends Action<string> {
  payload: P;
}

export const UPDATE_GAME_RECORD = 'UPDATE_GAME_RECORD';
export const CHANGE_PLAYERS = 'CHANGE_PLAYERS';
export const CHANGE_RULES = 'CHANGE_RULES';
