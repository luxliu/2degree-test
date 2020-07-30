import React from 'react';

import * as Styled from './board.styled';
import { PieceValue } from 'src/pages/game/types';
import SquareComponent from '../square/Square.component';

interface BoardProps {
  pieces: PieceValue[];
  onClick: (i: number) => void;
}

const BoardComponent: React.FC<BoardProps> = ({ pieces, onClick }) => {
  const renderSquare = (i: number) => {
    return <SquareComponent piece={pieces[i]} onClick={() => onClick(i)} />;
  };

  return (
    <div>
      <Styled.BoardRow>
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </Styled.BoardRow>
      <Styled.BoardRow>
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </Styled.BoardRow>
      <Styled.BoardRow>
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </Styled.BoardRow>
    </div>
  );
};

export default BoardComponent;
