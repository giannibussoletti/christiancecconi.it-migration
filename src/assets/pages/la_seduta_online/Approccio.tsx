import { Container, Row, Col } from "react-bootstrap"
import CoverPages from "../../components/CoverPages"
import { approccioCover, approccioIntroText, approccioTopTitle } from "../../texts/T_Approccio"
import TitleSubtitle from "../../components/TitleSubtitle"

const Approccio = () => {
  return (
    <>
      <CoverPages {...approccioCover} />
      <Container>
        <Row>
          <Col>
            <TitleSubtitle {...approccioTopTitle} />
            {approccioIntroText}
          </Col>
        </Row>
        <Row>
          <Col></Col>
          <Col>
            <Row>
              <Col></Col>
            </Row>
            <Row>
              <Col></Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Approccio
