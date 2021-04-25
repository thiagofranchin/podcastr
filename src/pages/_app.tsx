import { PlayerContext } from '../contexts/PlayerContext'

import { Header } from '../components/Header'
import { Player } from '../components/Player'

import '../styles/global.scss'
import S from '../styles/app.module.scss'
import { useState } from 'react'


function MyApp({ Component, pageProps }) {
  const [episodeList, setEpisodeList] = useState([])
  const [currentEpisodeIndex, setCurrentEpisodeIndex] = useState(0)
  const [isPlaying, setisPlaying] = useState(false)

  function play(episode) {
    setEpisodeList([episode])
    setCurrentEpisodeIndex(0)
    setisPlaying(true)
  }

  function tooglePlay() {
    setisPlaying(!isPlaying)
  }

  function setPlayingState(state: boolean) {
    setisPlaying(state);
  }

  return (
  <PlayerContext.Provider value={{
    episodeList,
    currentEpisodeIndex,
    play,
    isPlaying,
    tooglePlay,
    setPlayingState
  }}>
    <div className={S.wrapper}>
      <main>
        <Header />
        <Component {...pageProps} />
      </main>
      <Player />
    </div>
  </PlayerContext.Provider>
  )
}

export default MyApp
