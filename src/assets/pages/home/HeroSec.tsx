import { Container, Col, Row } from "react-bootstrap"
import NavBar from "../../components/NavBar"
import ThemeButton from "../../components/ThemeButton"
import { buttonHero } from "../../texts/home/T_HeroSection"

const HeroSec = () => {
  return (
    <Container fluid id="hero-section">
      <NavBar />
      <Row xs={1}>
        <Col className="d-flex flex-column justify-content-center align-items-start px-5 vh-100">
          <h1>
            uno spazio sicuro
            <br />
            ovunque ti trovi
          </h1>
          <blockquote>
            Prenditi cura della tua salute mentale con un percorso di supporto psicologico da
            remoto.
          </blockquote>
          <ThemeButton {...buttonHero} />
        </Col>
        <Col></Col>
      </Row>
    </Container>
  )
}

export default HeroSec
