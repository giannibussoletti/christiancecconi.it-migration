import type { IconDefinition } from "@fortawesome/free-solid-svg-icons"
import type React from "react"

export type TitledBlock = {
  title: string
  content?: React.ReactNode
}

export type InfoCard = {
  icon: IconDefinition
  title?: string
  text: React.ReactNode
  isBlack: boolean
}

export type LinkItem = {
  trigger: string
  href: string
}
