import styled from 'styled-components';
import { PieceValue } from 'src/pages/game/types';

interface SquarePieceProps {
  piece: PieceValue;
}

export const SquarePiece = styled.div<SquarePieceProps>`
  width: 35px;
  height: 35px;
  color: ${(props) => (props.piece === 'X' ? 'red' : 'blue')};
  font-size: 24px;
  border: 1px solid #999;
`;
