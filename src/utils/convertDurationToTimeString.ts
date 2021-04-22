export function convertDurationToTimeString(duration: number) {
  // Math.floor = Arredonda para baixo
  const hours = Math.floor(duration / 3600)

  // Quanto min sobram de hours
  const minutes = Math.floor(duration % 3600 / 60);
  const seconds = duration % 60

  // Coloca sempre 2 números nos resultados das horas ,min, seg
  const timeString = [hours, minutes, seconds]
    .map(unit => String(unit).padStart(2, '0'))
    .join(':')

  return timeString
}
