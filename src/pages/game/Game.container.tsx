import React from 'react';
import { connect } from 'react-redux';

import * as selectors from 'src/redux/selectors';
import GameComponent from './Game.component';
import { setBoard, setNextPlayer, setWinner } from './game.duck';
import { bindActionCreatorsCurried } from 'src/redux/utils';
import { GameProps, GameState } from './types';

/*****************
 *   COMPONENT   *
 *****************/

const Game: React.FC<GameProps> = (props) => <GameComponent {...props} />;

/*************
 *   REDUX   *
 *************/

const mapStateToProps = (state: GameState) => ({
  board: selectors.boardSelector(state),
  nextPlayer: selectors.nextPlayerSelector(state),
  winner: selectors.winnerSelector(state),
});

const mapDispatchToProps = bindActionCreatorsCurried({
  setBoard,
  setNextPlayer,
  setWinner,
});

export default connect(mapStateToProps, mapDispatchToProps)(Game);
