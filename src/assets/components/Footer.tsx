import { Col, Container, Row, Image } from "react-bootstrap"
import { alboAndIva } from "../texts/T_Footer"

const Footer = () => {
  return (
    <Container>
      <Row>
        <Col>
          <h4>
            <Image src="/svg/logo-bianco.svg" />
          </h4>
        </Col>
        <Col>
          <h4>Pagine</h4>
        </Col>
        <Col>
          <Row xs={1}>
            {alboAndIva.map((col) => {
              return (
                <Col key={col.title}>
                  <h4>{col.title}</h4>
                  {col.content}
                </Col>
              )
            })}
          </Row>
        </Col>
        <Col>
          <Row xs={1}>
            <Col>
              <h4>Social</h4>
            </Col>
            <Col>
              <h4>Policy</h4>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  )
}

export default Footer
