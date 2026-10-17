import { faHandshake, faPlay } from "@fortawesome/free-solid-svg-icons"
import type { H1Title, TitledBlock } from "../types"

export const primiPassiCover: H1Title = {
  top: "i primi passi",
  btm: "verso la tua seduta",
}

export const primiPassiTitle: TitledBlock = {
  title: "Come iniziare",
  content: "I passi verso la tua prima seduta",
}

export const IntroText = (
  <p>
    Puoi scrivermi un messaggio o, se ne senti il bisogno, possiamo fissare{" "}
    <strong>una breve chiamata telefonica gratuita di orientamento</strong> (della durata massima di
    20 minuti). Questo spazio ci servirà per mettere a fuoco le tue motivazioni, capire di cosa hai
    bisogno e valutare insieme se sono il professionista giusto per te.
  </p>
)

export const iCPrimoContatto = {
  icon: faHandshake,
  title: "Il primo contatto:",
  text: (
    <p>
      Puoi scrivermi un messaggio o, se ne senti il bisogno, possiamo fissare
      <strong>una breve chiamata telefonica gratuita di orientamento</strong> (della durata massima
      di 20 minuti). Questo spazio ci servirà per mettere a fuoco le tue motivazioni, capire di cosa
      hai bisogno e valutare insieme se sono il professionista giusto per te.
    </p>
  ),
  isBlack: false,
}

export const iCDettagliCosti = {
  icon: faPlay,
  title: "Dettagli pratici e costi:",
  text: (
    <p>
      Se decideremo di iniziare questo percorso insieme, concorderemo giorno e orario della prima
      seduta online. <strong>Il costo di ogni incontro della durata di 50 minuti è di 45€.</strong>{" "}
      Ci tengo a essere subito chiaro su questo aspetto affinché tu possa valutare il tuo impegno
      con la massima serenità.
    </p>
  ),
  isBlack: false,
}

{
  /* <div class="sedute-online">
  <div class="ombre-sez-sedute-on">
    <div class="single_serv">
      <div class="tit_serv"><i class="fa-solid fa-handshake" style="color: #de007e;"></i> Il primo contatto:</div>
      
    </div>
  </div>

  <div class="ombre-sez-sedute-on">
    <div class="single_serv">
      <div class="tit_serv"><i class="fa-solid fa-play" style="color: #de007e;"></i> Dettagli pratici e costi:</div>
      
    </div>
  </div>
</div> */
}

{
  /* <div class="sedute-online">
  <div class="ombre-sez-sedute-on">
    <div class="single_serv">
      <div class="tit_serv">
        <i class="fa-solid fa-file-signature" style="color: #de007e"></i> Il Consenso Informato:
      </div>
      <p>
        <b>A tutela della tua privacy e dei tuoi diritti</b>, ti invierò il Modulo di Consenso Informato. È
        un documento semplice ma fondamentale, che andrà visionato e accettato prima di iniziare il
        nostro lavoro clinico, restituendolo firmato prima della nostra seduta.
      </p>
    </div>
  </div>
  <div class="ombre-sez-sedute-on">
    <div class="single_serv">
      <div class="tit_serv">
        <i class="fa-solid fa-dice" style="color: #de007e"></i> Pagamento e Gestione degli
        Imprevisti:
      </div>
      <p>
       Capisco perfettamente che la vita sia fatta di imprevisti, per questo ho una policy pensata per tutelare il tempo e l'impegno di entrambi:
      </p>
      <ul id="first-session">
        <li>
          Se hai bisogno di spostare l'appuntamento, ti basterà avvisarmi con almeno 24 ore di
          anticipo: riprogrammeremo la seduta senza alcun problema.
        </li>
        <li>
          Se invece l'imprevisto o la disdetta avvengono a meno di 24 ore dall'incontro, potremo
          comunque recuperare il 50% del tempo previsto concordando un nuovo momento per un incontro
          di 25 minuti.
        </li>
      </ul>
    </div>
  </div>
</div> */
}
