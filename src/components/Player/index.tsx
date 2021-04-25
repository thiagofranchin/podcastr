import Image from 'next/image'
import { useContext, useRef, useEffect } from 'react'
import Slider from 'rc-slider'

import 'rc-slider/assets/index.css'

import { PlayerContext } from '../../contexts/PlayerContext'

import S from './styles.module.scss'

export function Player() {
  const audioRef = useRef<HTMLAudioElement>(null)

  const {
    episodeList,
    currentEpisodeIndex,
    isPlaying,
    tooglePlay,
    setPlayingState
  } = useContext(PlayerContext)

  useEffect(() => {
    if (!audioRef.current) {
      return
    }
    if (isPlaying) {
      audioRef.current.play()
    } else {
      audioRef.current.pause()
    }
  }, [isPlaying]);

  const episode = episodeList[currentEpisodeIndex]

  return (
    <div className={S.playerContainer}>
      <header>
        <img src="/playing.svg" alt="Tocando agora" />
        <strong>Tocando agora</strong>
      </header>

      { episode ? (
        <div className={S.currentEpisode}>
          <Image
            width={592}
            height={592}
            src={episode.thumbnail}
            objectFit="cover"
          />
          <strong>{episode.title}</strong>
          <span>{episode.members}</span>
        </div>
      ) : (
        <div className={S.emptyPlayer}>
          <strong>Selecione um podcast para ouvir</strong>
        </div>
      )}

      <footer className={!episode ? S.empty : ''}>
        <div className={S.progress}>
          <span>00:00</span>
          <div className={S.slider}>
            {episode ? (
              <Slider
                trackStyle={{ backgroundColor: '#84d361' }}
                railStyle={{ backgroundColor: '#9f75ff' }}
                handleStyle={{ borderColor: '#04d361', borderWidth: 4 }}
              />
            ) : (
              <div className={S.emptySlider} />
            )}

          </div>
          <span>00:00</span>
        </div>

        { episode && (
          <audio
            src={episode.url}
            ref={audioRef}
            autoPlay
            onPlay={() => setPlayingState(true)}
            onPause={() => setPlayingState(false)}
          />
        )}

        <div className={S.buttons}>
          <button type="button" disabled={!episode}>
            <img src="/shuffle.svg" alt="Embaralhar"/>
          </button>
          <button type="button" disabled={!episode}>
            <img src="/play-previous.svg" alt="Tocar anterior"/>
          </button>
          <button
          type="button"
          className={S.playButton}
          disabled={!episode}
          onClick={tooglePlay}
        >
            { isPlaying
              ? <img src="/pause.svg" alt="Pausar" />
              : <img src="/play.svg" alt="Tocar" />
            }
          </button>
          <button type="button" disabled={!episode}>
            <img src="/play-next.svg" alt="Tocar próxima"/>
          </button>
          <button type="button" disabled={!episode}>
            <img src="/repeat.svg" alt="Repetir"/>
          </button>
        </div>
      </footer>
    </div>
  )
}
