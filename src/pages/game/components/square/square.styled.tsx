import styled from 'styled-components';
import { PieceValue } from 'src/pages/game/types';
import styles from 'src/styles';

const { colors, mixins } = styles;

interface SquarePieceProps {
  piece: PieceValue;
}

export const SquarePiece = styled.div<SquarePieceProps>`
  width: 100px;
  height: 100px;
  color: ${(props) => (props.piece === 'X' ? colors.red : colors.blue)};
  font-size: 60px;
  border: 1px solid ${colors.black};
  ${mixins.flexCenter()}
`;
