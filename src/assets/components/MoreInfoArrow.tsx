import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Row, Col } from "react-bootstrap"
import { useNavigate } from "react-router"
import type { ButtonTypes } from "../types"
const MoreInfoArrow = (arrowProps: ButtonTypes) => {
  const nav = useNavigate()
  return (
    <Row>
      <Col className="more-info-arrow" onClick={() => nav(arrowProps.link)}>
        {arrowProps.text}
        <FontAwesomeIcon className="ps-1" icon={faArrowRightLong} />
      </Col>
    </Row>
  )
}

export default MoreInfoArrow
