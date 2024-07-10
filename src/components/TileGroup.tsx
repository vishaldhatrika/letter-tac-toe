import React from 'react';
import '../styles/TileGroup.css';
import Tile from './Tile';

function TileGroup({color, tileGroup}:{color: string, tileGroup: string[]}){
  return (

    <div className="TileGroup">
      
      {
        tileGroup.map((tile, i) => (
          <Tile key={i} letter={tile} color={color} />
        ))
      }
    </div>
  );
}

export default TileGroup;
