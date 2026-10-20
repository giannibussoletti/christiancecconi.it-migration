import { faBrush, faGamepad } from "@fortawesome/free-solid-svg-icons"
import type { H1Title, InfoCardTypes, TitledBlock } from "../types"

export const approccioCover: H1Title = {
  top: "il mio approccio",
  btm: "terapeutico",
}

export const approccioTopTitle: TitledBlock = {
  title: "La Geek Therapy",
  content: "Un percorso cucito su misura delle tue passioni",
}

export const approccioIntroText = (
  <p>
    Come psicologo credo profondamente che per far sì che un percorso psicologico funzioni sia
    fondamentale sentirsi compresi e poter esprimere se stessi al 100%. Per questo motivo, il mio
    approccio affianca alle solide basi della psicologia clinica tradizionale gli strumenti
    innovativi della <strong>Geek Therapy</strong> &#40;o Nerd Therapy&#41; e della{" "}
    <strong>Superhero Therapy</strong>.
  </p>
)

export const cosaSignificaTitle: TitledBlock = { title: "Cosa significa?" }

export const cosaSignificaText = (
  <p>
    Significa che videogiochi, fumetti, giochi di ruolo, anime, e serie TV diventano preziose{" "}
    <strong>chiavi di lettura per esplorare e comprendere il tuo mondo interiore</strong>,
    utilizzando questi mezzi per esplorare i significati più profondi che alimentano le nostre
    passioni.
  </p>
)

export const cosaSignificaInfo: InfoCardTypes = {
  icon: faGamepad,
  title: "Perché utilizzare le tue passioni come alleati in terapia?",
  text: (
    <>
      <p>
        Le tue passioni sono una parte importante di te e possono aiutarti davvero a coltivare il
        tuo benessere. <br />È più facile comprendere la complessità interiore traducendola nelle
        dinamiche e nelle meccaniche che possiamo incontrare nelle storie dei personaggi o dei
        giochi che amiamo.
      </p>
    </>
  ),
  isBlack: false,
}

export const approccioMiddleTitle: TitledBlock = {
  title: "Le tecniche espressive",
  content: "Diamo spazio alla creatività per dare forma a ciò che senti",
}

export const approccioMiddleText = (
  <p>
    Raccontare con le parole ciò che proviamo, ciò che sentiamo a livello profondo, può essere
    difficile. Per questo <strong>penso che il supporto di tecniche espressive</strong> come il
    disegno, la scrittura creativa, ma anche l'ideazione di storie o il richiamo di immagini,{" "}
    <strong>possa fare la differenza per aiutarci a dare una forma a ciò che proviamo.</strong>
  </p>
)

export const approccioSubText = (
  <p>
    Significa che insieme possiamo provare a disegnare o a descrivere il "mostro" che rappresenta le
    tue ansie o le tue paure, per guardarlo in faccia e provare a comprenderlo; significa che{" "}
    <strong>
      possiamo usare immagini, carte, o racconti per riuscire a creare una mappa dei tuoi stati
      d'animo.
    </strong>
  </p>
)

export const cosaSignificaInfoBtm: InfoCardTypes = {
  icon: faBrush,
  title: "Perché le arti espressive possono supportarti nel percorso?",
  text: (
    <>
      <p>
        La creatività costruisce un fantastico ponte per far emergere i tuoi vissuti e il tuo
        sentire. <br /> Non serve essere grandi artisti o scrittori, tutto ciò che serve è il
        lasciar fluire ciò che c'è, sperimentare, per andare oltre alle parole.
      </p>
    </>
  ),
  isBlack: false,
}
