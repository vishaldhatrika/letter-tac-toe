import React from 'react';
import '../styles/Tile.css';


function Tile ({letter, color}:{letter: string | undefined, color: string | undefined}) {
  
  let score;
  if(letter === 'A' || letter === 'E' || letter === 'I' || letter === 'O' || letter === 'N' || letter === 'R' || letter === 'T' || letter === 'L' || letter === 'S' || letter === 'U'){
  score=1;
  }
  else if(letter === 'D' || letter === 'G'){
    score=2;
  }
  else if(letter === 'B' || letter === 'C' || letter === 'M' || letter === 'P'){
    score=3;
  }
  else if(letter === 'F' || letter === 'H' || letter === 'V' || letter === 'W' || letter === 'Y' || letter === 'K'){
    score=4;
  }
  else if(letter === 'Z' || letter === 'X' || letter === 'Q' || letter === 'J'){
    score=5;
  }
  var colorClass = 'Tile';
  if(color==='red'){
    colorClass='Tile redTile';
  }
  if(color==='blue'){
    colorClass='Tile blueTile';
  }
  return (
    <div className={colorClass}>
      <div className="Letter">{letter}</div>
      <div className="Score">{score}</div>
    </div>
  );
}

export default Tile;
