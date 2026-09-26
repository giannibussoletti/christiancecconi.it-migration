import { faHeart } from "@fortawesome/free-solid-svg-icons"
import type { ButtonTypes, InfoCardTypes, TitleSubtitleTypes } from "../types"

export const lavorareInsieme: TitleSubtitleTypes = {
  title: "Ciò su cui possiamo lavorare insieme",
  subtitle: (
    <>
      Alcuni dei temi che potremo affrontare <br /> nelle nostre sedute online
    </>
  ),
}

export const ICStress: InfoCardTypes = {
  icon: faHeart,
  title: "Gestione dello Stress e Autostima:",
  text: `Se senti di non essere mai "abbastanza" o se l'ansia quotidiana ti toglie energie, lavoriamo per rafforzare la tua autoefficacia e imparare a gestire le pressioni esterne.`,
}

export const ButPrimaSeduta: ButtonTypes = {
  text: "la tua prima seduta",
  link: "/",
}
