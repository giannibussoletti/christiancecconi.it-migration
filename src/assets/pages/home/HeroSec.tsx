import { Container, Col, Row } from "react-bootstrap"
import NavBar from "../../components/NavBar"

const HeroSec = () => {
  return (
    <Container fluid id="hero-section">
      <NavBar />
      <Row>
        <Col>
          <h1>
            uno spazio sicuro
            <br />
            ovunque ti trovi
          </h1>
          <blockquote>
            Prenditi cura della tua salute mentale con un percorso di supporto psicologico da
            remoto.
          </blockquote>
        </Col>
        <Col>hello</Col>
      </Row>
    </Container>
  )
}

export default HeroSec
