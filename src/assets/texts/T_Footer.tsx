import { faSquareFacebook, faSquareInstagram } from "@fortawesome/free-brands-svg-icons"
import type { LinkItem, LinkSocial, TitledBlock } from "../types"

export const linkPagine: LinkItem[] = [
  {
    trigger: "Home",
    href: "/",
  },
  {
    trigger: "Chi Sono",
    href: "/",
  },
  {
    trigger: "Contatti",
    href: "/",
  },
  {
    trigger: "La seduta online",
    href: "/",
  },
  {
    trigger: "La tua prima seduta",
    href: "/",
  },
  {
    trigger: "Il mio Approccio",
    href: "/",
  },
]

export const alboAndIva: TitledBlock[] = [
  {
    title: "iscrizione albo",
    content: (
      <p>
        <strong>Psicologo</strong> iscritto nella sezione <strong>A</strong> dell'Albo dal{" "}
        <strong>19/01/2026</strong> con il n. <strong>32515</strong>
      </p>
    ),
  },
  {
    title: "partita iva",
    content: (
      <p>
        Christian Cecconi <br />
        N° <strong>17415021009</strong>
      </p>
    ),
  },
]

export const linkSocial: LinkSocial[] = [
  { icon: faSquareFacebook, href: "/" },
  { icon: faSquareInstagram, href: "/" },
]

export const linkPolicy: LinkItem[] = [
  {
    trigger: "Privacy Policy",
    href: "/",
  },
  {
    trigger: "Cookie Policy",
    href: "/",
  },
]
