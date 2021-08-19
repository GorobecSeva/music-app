import Player from './components/Player';
import Song from './components/Song';
import data from './data'
import './styles/app.scss';
import { useRef, useState } from 'react';
import Library from './components/Library';
import Nav from './components/Nav';
function App() {
  const [songs, setSongs] = useState(data())
  const [currentSong, setCurrentSong] = useState(songs[0])
  const [isPlaying, setIsPlaying] = useState(false)
  const audioRef = useRef(null)
  const [songInfo, setSongInfo] = useState({
    currentTime: 0,
    duration: 0,
    animationPercentage: 0,
  })
  const [libraryStatus, setLibraryStatus] = useState(false)


  const songEndHandler = async () => {
    let currentIndex = songs.findIndex((song) => song.id === currentSong.id)
    await setCurrentSong(songs[(currentIndex + 1) % songs.length] )
    if (isPlaying) audioRef.current.play()
  }

  const timeUpdateHandler = (e) => {
    const current = e.target.currentTime
    const duration = e.target.duration
    const roundedCurrent = Math.round(current)
    const roundedDuration = Math.round(duration)
    const animate = Math.round((roundedCurrent / roundedDuration) * 100)
    setSongInfo({...songInfo, currentTime: current, duration: duration, animationPercentage: animate})
  }

  return (
    <div className={`App ${libraryStatus ? 'library-active' : ''}`}>
      <Nav libraryStatus={libraryStatus} setLibraryStatus={setLibraryStatus}/>
      <Song currentSong={currentSong} />
      <Player songs={songs} setSongs={setSongs} setCurrentSong={setCurrentSong} currentSong={currentSong} songInfo={songInfo} setSongInfo={setSongInfo} audioRef={audioRef} isPlaying={isPlaying} setIsPlaying={setIsPlaying} currentSong={currentSong}/>
      <Library libraryStatus={libraryStatus} setSongs={setSongs} isPlaying={isPlaying} audioRef={audioRef} songs={songs} setCurrentSong={setCurrentSong}/>

      <audio
        onLoadedMetadata={timeUpdateHandler} 
        onTimeUpdate={timeUpdateHandler} 
        src={currentSong.audio} 
        ref={audioRef}
        onEnded={songEndHandler}>
      </audio>
    </div>
  );
}

export default App;
