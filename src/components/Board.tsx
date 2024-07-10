import React from 'react';
import '../styles/Board.css';
import TileGroup from './TileGroup';
import Tile from './Tile';

function Board({player1Tiles, player2Tiles}:{player1Tiles: string[], player2Tiles: string[]}){
  return (
    <div className="Board">
      <TileGroup color="red" tileGroup={player1Tiles} />
      <div className="Grid">
      {
        Array.from({ length: 3 }, (_, i) => (
          <div className="Row" key={i}>
            {
              Array.from({ length: 3 }, (_, j) => {
                const idx = i * 3 + j;
                // console.log("key of tile: ",idx, i);
                return (
                  <Tile key={idx} letter='' color='' />

                );

              })
            }
          </div>
        ))
      }
      </div>
      <TileGroup color="blue"  tileGroup={player2Tiles}/>
    </div>
  );
}

export default Board;
