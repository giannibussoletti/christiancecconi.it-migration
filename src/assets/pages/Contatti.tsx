import { Container, Row, Col } from "react-bootstrap"
import { contattiText, contattiTitle } from "../texts/T_Contatti"
import TitleSubtitle from "../components/TitleSubtitle"

const Contatti = () => {
  return (
    <div id="contatto-email">
      <Container>
        <Row>
          <Col>
            <TitleSubtitle {...contattiTitle} />
            {contattiText}
          </Col>
          <Col></Col>
        </Row>
      </Container>
    </div>
  )
}

export default Contatti
