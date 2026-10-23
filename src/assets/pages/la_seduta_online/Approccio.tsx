import { Container, Row, Col, Image } from "react-bootstrap"
import CoverPages from "../../components/CoverPages"
import {
  approccioCover,
  approccioIntroText,
  approccioMiddleText,
  approccioMiddleTitle,
  approccioSubText,
  approccioTopTitle,
  cosaSignificaInfo,
  cosaSignificaInfoBtm,
  cosaSignificaText,
  cosaSignificaTitle,
} from "../../texts/T_Approccio"
import TitleSubtitle from "../../components/TitleSubtitle"
import InfoCard from "../../components/InfoCard"

const Approccio = () => {
  return (
    <>
      <CoverPages {...approccioCover} />
      <Container>
        <Row className="mb-4">
          <Col>
            <TitleSubtitle {...approccioTopTitle} />
            {approccioIntroText}
          </Col>
        </Row>
        <Row className="mb-4">
          <Col md={6} xl={3} className="p-md-4 mb-4 mb-lg-0 order-1 order-md-0">
            <Image
              className="main-imgs w-100 d-inline d-md-none d-lg-inline"
              src="/img/controllerj.jpg"
            />
            <Image
              className="main-imgs w-100 d-none d-md-inline d-lg-none"
              src="/img/controllerj-v.jpg"
            />
          </Col>
          <Col md={6} xl={9} className="order-0 order-md-1">
            <Row className="mb-3">
              <Col>
                <TitleSubtitle {...cosaSignificaTitle} />
                {cosaSignificaText}
              </Col>
            </Row>
            <InfoCard {...cosaSignificaInfo} />
          </Col>
        </Row>
        <Row className="mb-4">
          <Col>
            <TitleSubtitle {...approccioMiddleTitle} />
            {approccioMiddleText}
          </Col>
        </Row>
        <Row>
          <Col md={6} xl={9} className="mb-4 mb-lg-0">
            <Row className="mb-3">
              <Col>
                <TitleSubtitle {...cosaSignificaTitle} />
                {approccioSubText}
              </Col>
            </Row>
            <InfoCard {...cosaSignificaInfoBtm} />
          </Col>
          <Col md={6} xl={3} className=" p-md-4 mb-4 mb-lg-0">
            <Image
              className="main-imgs w-100 d-inline d-md-none d-lg-inline"
              src="/img/mandala.jpg"
            />
            <Image
              className="main-imgs w-100 d-none d-md-inline d-lg-none"
              src="/img/mandala-v.jpg"
            />
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Approccio
