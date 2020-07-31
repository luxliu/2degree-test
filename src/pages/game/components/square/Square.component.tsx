import React from 'react';

import { PieceValue } from 'src/pages/game/types';
import * as Styled from './square.styled';

export interface SquareProps {
  piece: PieceValue;
  onClick: VoidFunction;
}

const SquareComponent: React.FC<SquareProps> = ({ piece, onClick }) => (
  <Styled.SquarePiece
    onClick={() => onClick()}
    piece={piece}
    data-testid="square"
  >
    {piece}
  </Styled.SquarePiece>
);

export default SquareComponent;
