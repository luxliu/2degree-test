import { ActionFunctions, Action } from 'redux-actions';
import { ActionCreatorsMapObject } from 'redux';

export type PieceValue = 'X' | 'O' | null;

export interface GameState {
  board: PieceValue[];
  nextPlayer: PieceValue;
  winner: PieceValue;
}

export interface GameAction {
  actions: ActionCreatorsMapObject<{
    setBoard: (board: PieceValue[]) => Action<PieceValue[]>;
    setNextPlayer: (nextPlayer: PieceValue) => Action<PieceValue>;
    setWinner: (winner: PieceValue) => Action<PieceValue>;
  }>;
}

export type GameProps = GameState & GameAction;
