import type { TitleSubtitleProps } from "../types"

const TitleSubtitle = ({ textProp }: TitleSubtitleProps) => {
  return (
    <>
      <h2>{textProp.title}</h2>
      {textProp.subtitle && <h3>{textProp.subtitle}</h3>}
    </>
  )
}

export default TitleSubtitle
