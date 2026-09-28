import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Col, Row } from "react-bootstrap"
import type { InfoCardTypes } from "../types"

const InfoCard = (infoCardProps: InfoCardTypes) => {
  return (
    <Row className="icon-e-serv mb-3">
      <Col xs="auto" className="p-0">
        <FontAwesomeIcon
          icon={infoCardProps.icon}
          className={infoCardProps.isBlack ? "prep-tera" : "tit-serv"}
        />
      </Col>
      <Col>
        {infoCardProps.title && <h4 className="tit-serv mb-1">{infoCardProps.title}</h4>}
        <p className={infoCardProps.isBlack ? "prep-tera mb-0" : "mb-0"}>{infoCardProps.text}</p>
      </Col>
    </Row>
  )
}

export default InfoCard
