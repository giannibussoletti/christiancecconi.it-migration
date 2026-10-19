import { Container, Row, Col, Image } from "react-bootstrap"
import CoverPages from "../../components/CoverPages"
import TitleSubtitle from "../../components/TitleSubtitle"
import {
  iCConsensoInformato,
  iCDettagliCosti,
  iCPagamentoImprevisti,
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
        <Row className="mb-4">
          <Col xs={12} lg={3} className="p-0 mb-4 mb-lg-0 pe-lg-3">
            <Image
              className="main-imgs w-100 d-inline d-lg-none d-xl-inline"
              src="/img/prima-visita-cel.jpg"
            />
            <Image
              className="main-imgs w-100 d-none d-lg-inline d-xl-none"
              src="/img/prima-visita-cel-v.jpg"
            />
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
        <Row>
          <Col xs={12} lg={9} xxl={10} className="order-1 order-lg-0">
            <Row>
              <Col>
                <InfoCard {...iCConsensoInformato} />
              </Col>
            </Row>
            <Row>
              <Col>
                <InfoCard {...iCPagamentoImprevisti} />
              </Col>
            </Row>
          </Col>
          <Col xs={12} lg={3} xxl={2} className="p-0 mb-4 mb-lg-0 ps-lg-3 order-0 order-lg-1">
            <Image
              className="main-imgs w-100 d-inline d-lg-none"
              src="/img/prima-visita-clock.jpg"
            />
            <Image
              className="main-imgs w-100 d-none d-lg-inline"
              src="/img/prima-visita-clock-v.jpg"
            />
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default PrimiPassi
