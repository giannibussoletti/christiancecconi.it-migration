import { Container, Row, Col, Image } from "react-bootstrap"
import CoverPages from "../../components/CoverPages"
import TitleSubtitle from "../../components/TitleSubtitle"
import {
  iCDettagliCosti,
  iCPrimoContatto,
  IntroText,
  primiPassiCover,
  primiPassiTitle,
} from "../../texts/T_PrimiPassi"
import InfoCard from "../../components/InfoCard"

const PrimiPassi = () => {
  return (
    <>
      <CoverPages {...primiPassiCover} />
      <Container>
        <TitleSubtitle {...primiPassiTitle} />
        {IntroText}
        <Row>
          <Col xs={12} lg={3} className="p-0 mb-4 mb-lg-0 pe-lg-3">
            <Image className="main-imgs w-100 " src="/img/prima-visita-clock.jpg" />
          </Col>
          <Col xs={12} lg={9}>
            <Row>
              <Col>
                <InfoCard {...iCPrimoContatto} />
              </Col>
            </Row>
            <Row>
              <Col>
                <InfoCard {...iCDettagliCosti} />
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default PrimiPassi
