import { Col } from "react-bootstrap"
import type { TitledBlock } from "../types"

const TitleSubtitle = (textProp: TitledBlock) => {
  return (
    <Col className="mb-1">
      <h2>{textProp.title}</h2>
      {textProp.content && <h3>{textProp.content}</h3>}
    </Col>
  )
}

export default TitleSubtitle
