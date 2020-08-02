import * as R from 'ramda';
import { createSelector } from 'reselect';

import { getModuleSelector } from 'src/redux/utils';
import { PieceValue } from './types';

export const cartSelector = getModuleSelector('game');

export const boardSelector = createSelector(
  cartSelector,
  R.prop<string, PieceValue[]>('board')
);

export const nextPlayerSelector = createSelector(
  cartSelector,
  R.prop<string, PieceValue>('nextPlayer')
);

export const winnerSelector = createSelector(
  cartSelector,
  R.prop<string, PieceValue>('winner')
);
