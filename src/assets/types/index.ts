import type { IconDefinition } from "@fortawesome/free-solid-svg-icons"
import type React from "react"

export type TitleSubtitleTypes = {
  title: string
  subtitle?: React.ReactNode
}

export type InfoCardTypes = {
  icon: IconDefinition
  title?: string
  text: React.ReactNode
  isBlack: boolean
}

export type ButtonTypes = {
  text: string
  link: string
}

export type SocialArrayTypes = {
  imgLink: string
  pageLink: string
}

export type FooterTypes = {
  title: string
  content: React.ReactNode
}
