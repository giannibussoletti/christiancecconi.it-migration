import { Container, Col, Row } from "react-bootstrap"
import NavBar from "../../components/NavBar"
import ThemeButton from "../../components/ThemeButton"
import { buttonHero } from "../../texts/home/T_HeroSection"

const HeroSec = () => {
  return (
    <Container fluid id="hero-section" className="px-0">
      <NavBar />
      <Row xs={1} className="m-0">
        <Col className="d-flex flex-column justify-content-center align-items-start pb-5 px-5 mt-sm-0 vh-100">
          <h1>
            <span className="top">uno spazio sicuro</span>
            <br />
            <span className="btm">ovunque ti trovi</span>
          </h1>
          <blockquote className="mb-4">
            Prenditi cura della tua salute mentale {window.innerWidth > 768 ? <br /> : ""} con un
            percorso di supporto psicologico da remoto.
          </blockquote>
          <ThemeButton {...buttonHero} />
        </Col>
        <Col></Col>
      </Row>
    </Container>
  )
}

export default HeroSec
