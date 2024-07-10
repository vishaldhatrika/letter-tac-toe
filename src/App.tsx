import React from 'react';
import logo from './logo.svg';
import './App.css';
import Board from './components/Board';
import Scorecard from './components/Scorecard';
function App() {

    // 1 point: E, A, I, O, N, R, T, L, S, U
    // 2 points: D, G
    // 3 points: B, C, M, P
    // 4 points: F, H, V, W, Y, K
    // 5 points: Z, X, Q, J

  let gr0 = ['E', 'A', 'I', 'O'];
  let gr1 = ['N', 'R', 'T', 'L', 'S', 'U'];
  let gr2 = ['D', 'G'];
  let gr3 = ['B', 'C', 'M', 'P'];
  let gr4 = ['F', 'H', 'V', 'W', 'Y', 'K'];
  let gr5 = ['Z', 'X', 'Q', 'J'];

  let p1 = 0;
  let p2 = 0;
  let playerTurn = 'Player 1';
  // randomize the order of the tiles
  gr0.sort(() => Math.random() - 0.5);
  gr1.sort(() => Math.random() - 0.5);
  gr2.sort(() => Math.random() - 0.5);
  gr3.sort(() => Math.random() - 0.5);
  gr4.sort(() => Math.random() - 0.5);
  gr5.sort(() => Math.random() - 0.5);


  //split the tiles into 2 groups equally for each array into 2 main groups
  let p1_gr0 = gr0.slice(0, 2);
  let p2_gr0 = gr0.slice(2, 4);
  
  let p1_gr1 = gr1.slice(0, 3);
  let p2_gr1 = gr1.slice(3, 6);

  let p1_gr2 = gr2.slice(0, 1);
  let p2_gr2 = gr2.slice(1, 2);

  let p1_gr3 = gr3.slice(0, 2);
  let p2_gr3 = gr3.slice(2, 4);
  
  let p1_gr4 = gr4.slice(0, 3);
  let p2_gr4 = gr4.slice(3, 6);

  let p1_gr5 = gr5.slice(0, 2);
  let p2_gr5 = gr5.slice(2, 4);

  // combine the tile groups into 2 main groups
  let player1Tiles = p1_gr0.concat(p1_gr1, p1_gr2, p1_gr3, p1_gr4, p1_gr5);
  let player2Tiles = p2_gr0.concat(p2_gr1, p2_gr2, p2_gr3, p2_gr4, p2_gr5);


  return (
    <div className="App">

      <Scorecard p1={p1} p2={p2} turn={playerTurn}/>
      {/* pass player 1 and 2 tiles to board */}

      <Board player1Tiles={player1Tiles} player2Tiles={player2Tiles} />
    </div>
  );
}

export default App;
