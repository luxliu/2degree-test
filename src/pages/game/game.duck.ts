import { Action, createAction } from 'redux-actions';

import { wrapWithModule } from 'src/redux/utils';
import { PieceValue, GameState } from './types';

/*********************
 *   INITIAL STATE   *
 *********************/

type GameActionPayload = PieceValue[] & PieceValue;

const initialState: GameState = {
  board: Array(9).fill(null),
  nextPlayer: 'O',
  winner: null,
};

/***************
 *   ACTIONS   *
 ***************/

const wrapWithNamespace = wrapWithModule('modules/game');
const SET_BOARD = wrapWithNamespace('SET_BOARD');
const SET_NEXTPLAYER = wrapWithNamespace('SET_NEXTPLAYER');
const SET_WINNER = wrapWithNamespace('SET_WINNER');

export const setBoard = createAction<PieceValue[]>(SET_BOARD);
export const setNextPlayer = createAction<PieceValue>(SET_NEXTPLAYER);
export const setWinner = createAction<PieceValue>(SET_WINNER);

/***************
 *   REDUCER   *
 ***************/
export default (
  state: GameState = initialState,
  action: Action<GameActionPayload>
) => {
  const { type, payload } = action;

  const reducer = {
    [SET_BOARD]: (state: GameState, payload: PieceValue[]) => {
      return { ...state, board: payload };
    },
    [SET_NEXTPLAYER]: (state: GameState, payload: PieceValue) => {
      return { ...state, nextPlayer: payload };
    },
    [SET_WINNER]: (state: GameState, payload: PieceValue) => {
      return { ...state, winner: payload };
    },
  }[type];

  return reducer ? reducer(state, payload) : state;
};
