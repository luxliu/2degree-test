import React, { useState } from 'react';

import useDidUpdate from 'src/hooks/useDidUpdate';
import { PieceValue } from './types';
import BoardComponent from './components/board/Board.component';
import checkWinner from 'src/utils/checkWinner';
import * as Styled from './game.styled';

const GameComponent = () => {
  const [board, setBoard] = useState<PieceValue[]>(Array(9).fill(null));
  const [nextPlayer, setNextPlayer] = useState<PieceValue>('O');
  const [winner, setWinner] = useState<PieceValue>(null);

  useDidUpdate(() => {
    setWinner(checkWinner(board));
  });

  const handleClick = (i: number) => {
    if (checkWinner(board) || board[i]) {
      return;
    }

    board[i] = nextPlayer;
    setBoard(board);
    setNextPlayer(nextPlayer === 'O' ? 'X' : 'O');
  };

  return (
    <Styled.Container>
      <Styled.Title hasWinner={!!winner}>
        {winner ? `Winner: ${winner}` : `Please ${nextPlayer} player put piece`}
      </Styled.Title>
      <hr />
      <Styled.BoardWrapper>
        <BoardComponent
          pieces={board}
          onClick={(i: number) => handleClick(i)}
        />
      </Styled.BoardWrapper>
    </Styled.Container>
  );
};

export default GameComponent;
