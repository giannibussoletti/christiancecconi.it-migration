import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Col } from "react-bootstrap"
import { useNavigate } from "react-router"
import type { ButtonTypes } from "../types"
const MoreInfoArrow = (arrowProps: ButtonTypes) => {
  const nav = useNavigate()
  return (
    <Col className="more-info-arrow mb-3" onClick={() => nav(arrowProps.link)}>
      {arrowProps.text}
      <FontAwesomeIcon className="ps-1" icon={faArrowRightLong} />
    </Col>
  )
}

export default MoreInfoArrow
