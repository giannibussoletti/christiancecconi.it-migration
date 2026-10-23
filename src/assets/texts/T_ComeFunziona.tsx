import {
  faArrowUp,
  faCouch,
  faHeadphones,
  faHome,
  faHourglassHalf,
  faWifi,
} from "@fortawesome/free-solid-svg-icons"
import type { H1Title, InfoCardTypes, TitledBlock } from "../types"

export const coverCF: H1Title = {
  top: "come funziona",
  btm: "una seduta online",
}

export const titleCF: TitledBlock = {
  title: "Il Setting Online",
  content: "Perché scegliere un percorso da remoto",
}

export const introCF = (
  <p>
    Le sessioni di supporto e sostegno psicologico svolte da remoto offrono la possibilità di
    conciliare le necessità di ognuno, andando ad abbattere barriere geografiche e difficoltà
    logistiche, senza rinunciare alla qualità della relazione terapeutica intraprendendo un percorso
    in un ambiente confortevole e familiare.
  </p>
)

export const ICSeduteRosa: InfoCardTypes[] = [
  {
    icon: faArrowUp,
    title: "Continuità:",
    text: "Permette di mantenere il percorso attivo anche in caso di viaggi, trasferte o impossibilità negli spostamenti.",
    isBlack: false,
  },
  {
    icon: faHome,
    title: "Ambiente familiare:",
    text: "Svolgere la seduta in un luogo a te caro può facilitare l'apertura e abbassare i livelli di ansia iniziali.",
    isBlack: false,
  },
  {
    icon: faCouch,
    title: "Ottimizzazione:",
    text: "Elimina la fatica del viaggio e ti permette di arrivare alla seduta più riposato mentalmente e dandoti pieno controllo sul tuo spazio.",
    isBlack: false,
  },
]

export const ICSeduteNere: InfoCardTypes[] = [
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

export const citCF = (
  <em>
    {" "}
    La terapia richiede un <strong>"luogo sicuro"</strong>, anche a distanza. Per garantire la buona
    riuscita della seduta è necessario:
  </em>
)
