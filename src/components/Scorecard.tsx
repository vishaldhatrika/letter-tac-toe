import React from 'react';
import '../styles/Scorecard.css';

function Scorecard({p1, p2, turn}:{p1: number, p2: number, turn: string}) {
  return (
    <div className="Scorecard" >
      <div>Player 1: {p1}</div>
      <div>Player 2: {p2}</div>
      <div>{turn}'s Turn now</div>
    </div>
  );
}

export default Scorecard;
