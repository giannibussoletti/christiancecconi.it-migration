import type { TitleSubtitleTypes } from "../types"

const TitleSubtitle = (textProp: TitleSubtitleTypes) => {
  return (
    <>
      <h2>{textProp.title}</h2>
      {textProp.subtitle && <h3>{textProp.subtitle}</h3>}
    </>
  )
}

export default TitleSubtitle
