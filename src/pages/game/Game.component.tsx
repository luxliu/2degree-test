import React from 'react';

import useDidUpdate from 'src/hooks/useDidUpdate';
import { GameProps } from './types';
import BoardComponent from './components/board/Board.component';
import checkWinner from 'src/utils/checkWinner';
import * as Styled from './game.styled';

const GameComponent: React.FC<GameProps> = ({
  board,
  nextPlayer,
  winner,
  actions,
}) => {
  const { setBoard, setNextPlayer, setWinner } = actions;

  useDidUpdate(() => {
    setWinner(checkWinner(board));
  });

  const handleClick = (i: number) => {
    if (checkWinner(board) || board[i]) {
      return;
    }

    const newBoard = [...board];
    newBoard[i] = nextPlayer;
    setBoard(newBoard);
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
