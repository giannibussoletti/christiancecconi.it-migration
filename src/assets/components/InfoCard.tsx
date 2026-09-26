import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Col, Row } from "react-bootstrap"
import type { InfoCardTypes } from "../types"

const InfoCard = (infoCardProps: InfoCardTypes) => {
  return (
    <Row className="icon-e-serv">
      <Col xs="auto" className="p-0">
        <FontAwesomeIcon icon={infoCardProps.icon} className="tit_serv" />
      </Col>
      <Col>
        <h4 className="tit_serv">{infoCardProps.title}</h4>
        <p className="mb-0">{infoCardProps.text}</p>
      </Col>
    </Row>
  )
}

export default InfoCard
