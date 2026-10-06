import { Container, Row, Col } from "react-bootstrap"
import CoverPages from "../components/CoverPages"
import { ChiSonoCover, ChiSonoTitle } from "../texts/T_ChiSono"
import TitleSubtitle from "../components/TitleSubtitle"

const ChiSono = () => {
  return (
    <>
      <CoverPages {...ChiSonoCover} />
      <Container>
        <Row>
          <Col>
            <TitleSubtitle {...ChiSonoTitle} />
          </Col>
          <Col></Col>
        </Row>
      </Container>
    </>
  )
}

export default ChiSono
