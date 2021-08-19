import React from 'react';

const Song = ({currentSong: {name, artist, cover}}) => {
  return (
    <div className="song-container">
      <img alt={name} src={cover}></img>
      <h2>{name}</h2>
      <h3>{artist}</h3>
    </div>
  );
}

export default Song;
