import React from 'react';
import LibrarySong from './LibrarySong'



const Library = ({songs, setCurrentSong, audioRef, isPlaying, setSongs, libraryStatus}) => {
  return (
    <div className={`library ${libraryStatus ? 'active' : ''}`}>
      <h2>Library</h2>
      <div className="library-songs">
        {
          songs.map((song) => {
            return (
              <LibrarySong 
                isPlaying={isPlaying} 
                audioRef={audioRef} 
                setCurrentSong={setCurrentSong} 
                key={song.id} 
                songs={songs} 
                song={song}
                id={song.id}
                setSongs={setSongs}
              />
            )
          })
        }
      </div>
    </div>
  );
}

export default Library;
