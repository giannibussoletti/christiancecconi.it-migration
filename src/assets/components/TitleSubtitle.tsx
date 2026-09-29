import { Col } from "react-bootstrap"
import type { TitleSubtitleTypes } from "../types"

const TitleSubtitle = (textProp: TitleSubtitleTypes) => {
  return (
    <Col className="mb-3">
      <h2>{textProp.title}</h2>
      {textProp.subtitle && <h3>{textProp.subtitle}</h3>}
    </Col>
  )
}

export default TitleSubtitle
