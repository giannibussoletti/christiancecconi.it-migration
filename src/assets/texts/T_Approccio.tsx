import { faGamepad } from "@fortawesome/free-solid-svg-icons"
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
