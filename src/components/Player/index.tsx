import S from './styles.module.scss'

export function Player() {
  return (
    <div className={S.playerContainer}>
      <header>
        <img src="/playing.svg" alt="Tocando agora" />
        <strong>Tocando agora</strong>
      </header>

      <div className={S.emptyPlayer}>
        <strong>Selecione um podcast para ouvir</strong>
      </div>

      <footer className={S.empty}>
        <div className={S.progress}>
          <span>00:00</span>
          <div className={S.slider}>
            <div className={S.emptySlider} />
          </div>
          <span>00:00</span>
        </div>

        <div className={S.buttons}>
          <button>
            <img src="/shuffle.svg" alt="Embaralhar"/>
          </button>
          <button>
            <img src="/play-previous.svg" alt="Tocar anterior"/>
          </button>
          <button className={S.playButton}>
            <img src="/play.svg" alt="Tocar"/>
          </button>
          <button>
            <img src="/play-next.svg" alt="Tocar próxima"/>
          </button>
          <button>
            <img src="/repeat.svg" alt="Repetir"/>
          </button>
        </div>
      </footer>
    </div>
  )
}
