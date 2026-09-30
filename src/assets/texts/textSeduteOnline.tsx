import { faHeadphones, faHourglassHalf, faWifi } from "@fortawesome/free-solid-svg-icons"
import type { InfoCardTypes } from "../types"

const Cuffie: InfoCardTypes = {
  icon: faHeadphones,
  text: `Trovare una stanza riservata dove sei certo/a di non essere ascoltato/a (l'uso delle cuffie è consigliato).`,
  isBlack: true,
}
const Wifi: InfoCardTypes = {
  icon: faWifi,
  text: `Assicurarsi di avere una connessione stabile e un dispositivo carico (computer, tablet, smartphone).`,
  isBlack: true,
}
const Tempo: InfoCardTypes = {
  icon: faHourglassHalf,
  text: `Chiudere altre applicazioni o notifiche per dedicare quel tempo esclusivamente a te.`,
  isBlack: true,
}

export const ICSedute: InfoCardTypes[] = [Cuffie, Wifi, Tempo]
