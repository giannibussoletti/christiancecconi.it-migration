import {
  faEarthAmericas,
  faFaceFrownOpen,
  faHeartCrack,
  faMap,
  faPerson,
} from "@fortawesome/free-solid-svg-icons"
import type { LinkItem, InfoCard, TitledBlock } from "../../types"

export const lavorareInsieme: TitledBlock = {
  // Abbreviato in Li
  title: "Ciò su cui possiamo lavorare insieme",
  content: "Alcuni dei temi che potremo affrontare nelle nostre sedute online",
}

export const LITextTop = (
  <>
    Non possiamo sempre controllare gli eventi della vita, ma possiamo imparare a{" "}
    <strong>navigare le emozioni</strong> che suscitano in noi. A volte ci sentiamo{" "}
    <i>bloccati, travolti da ondate di stress o confusi</i> da un groviglio interiore difficile da
    districare. Che tu stia affrontando il senso di <i>solitudine</i> del vivere all'estero, una{" "}
    <i>crisi</i> lavorativa o l'<i>ansia</i> per il tuo percorso di studi, la <i>perdita</i> di una
    persona cara o il peso di una crisi sentimentale, le emozioni possono essere travolgenti,{" "}
    <i>ma non sono un ostacolo</i>, sono invece un prezioso alleato per la propria{" "}
    <strong>crescita personale.</strong>
  </>
)

export const LITextBottom = (
  <>
    <strong>Perché online?</strong> Perché il benessere mentale deve essere accessibile e
    flessibile. Ci incontriamo in videochiamata, nel comfort dei tuoi spazi, azzerando le distanze
    geografiche.
  </>
)

const IcStress: InfoCard = {
  icon: faFaceFrownOpen,
  title: "Gestione dello Stress e Autostima:",
  text: `Se senti di non essere mai "abbastanza" o se l'ansia quotidiana ti toglie energie, lavoriamo per rafforzare la tua autoefficacia e imparare a gestire le pressioni esterne.`,
  isBlack: false,
}

const IcRelazione: InfoCard = {
  icon: faHeartCrack,
  title: "Difficoltà all’interno di una relazione:",
  text: `L'amore e la convivenza sono sfide complesse. Metto a tua disposizione uno spazio neutro per esplorare le difficoltà comunicative, le incomprensioni o per gestire la fine di una storia`,
  isBlack: false,
}
const IcScelteVita: InfoCard = {
  icon: faMap,
  title: "Momenti di Svolta e Scelte di Vita:",
  text: `Laurea, cambio lavoro, trasferimenti o semplicemente la sensazione di "non sapere cosa fare da grandi". Ti supporto nel fare chiarezza per prendere decisioni in piena consapevolezza.`,
  isBlack: false,
}

const IcAltroPaese: InfoCard = {
  icon: faEarthAmericas,
  title: "Vivere e lavorare in un altro paese:",
  text: `Trasferirsi all'estero è un'avventura, ma porta con sé solitudine e disorientamento. Ti aiuto a ritrovare il tuo equilibrio tra due culture, gestendo la distanza dagli affetti e rafforzando le tue risorse.`,
  isBlack: false,
}
const IcLutto: InfoCard = {
  icon: faPerson,
  title: "Elaborazione del Lutto e delle Perdite:",
  text: `Perdere qualcuno o qualcosa di importante è doloroso. Può essere necessario un supporto delicato per attraversare questo momento e integrare la perdita nella tua storia di vita.`,
  isBlack: false,
}

export const LiIcArray: InfoCard[] = [IcStress, IcRelazione, IcScelteVita, IcAltroPaese, IcLutto]

const ButPrimaSeduta: LinkItem = {
  trigger: "la tua prima seduta",
  href: "/",
}

const ButComeFunge: LinkItem = {
  trigger: "la seduta online",
  href: "/",
}

export const LiButtons: LinkItem[] = [ButComeFunge, ButPrimaSeduta]
