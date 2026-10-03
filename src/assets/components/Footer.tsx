import { Col, Container, Row } from "react-bootstrap"

const Footer = () => {
  return (
    <Container fluid>
      <Container>
        <Row>
          <Col>
            <h4>Logo</h4>
          </Col>
          <Col>
            <h4>Pagine</h4>
          </Col>
          <Col>
            <Row xs={1}>
              <Col>
                <h4>Iscrizione Albo</h4>
              </Col>
              <Col>
                <h4>Partita IVA</h4>
              </Col>
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
    </Container>
  )
}

export default Footer
