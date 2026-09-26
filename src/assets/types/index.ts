import type { IconDefinition } from "@fortawesome/free-solid-svg-icons"
import type React from "react"

export type TitleSubtitleTypes = {
  title: string
  subtitle?: React.ReactNode
}

export type InfoCardTypes = {
  icon: IconDefinition
  title: string
  text: React.ReactNode
}

export type ButtonTypes = {
  text: string
  link: string
}
