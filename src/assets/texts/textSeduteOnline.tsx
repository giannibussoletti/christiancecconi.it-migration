import { faHeadphones, faHourglassHalf, faWifi } from "@fortawesome/free-solid-svg-icons"
import type { InfoCard } from "../types"

export const ICSedute: InfoCard[] = [
  {
    icon: faHeadphones,
    text: `Trovare una stanza riservata dove sei certo/a di non essere ascoltato/a (l'uso delle cuffie è consigliato).`,
    isBlack: true,
  },
  {
    icon: faWifi,
    text: `Assicurarsi di avere una connessione stabile e un dispositivo carico (computer, tablet, smartphone).`,
    isBlack: true,
  },
  {
    icon: faHourglassHalf,
    text: `Chiudere altre applicazioni o notifiche per dedicare quel tempo esclusivamente a te.`,
    isBlack: true,
  },
]
