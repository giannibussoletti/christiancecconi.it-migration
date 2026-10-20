import { Container, Row, Col, Image } from "react-bootstrap"
import CoverPages from "../../components/CoverPages"
import {
  approccioCover,
  approccioIntroText,
  approccioTopTitle,
  cosaSignificaInfo,
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
        <Row>
          <Col md={6} xl={3} className=" p-md-4 mb-4 mb-lg-0">
            <Image
              className="main-imgs w-100 d-inline d-md-none d-lg-inline"
              src="/img/controllerj.jpg"
            />
            <Image
              className="main-imgs w-100 d-none d-md-inline d-lg-none"
              src="/img/controllerj-v.jpg"
            />
          </Col>
          <Col md={6} xl={9}>
            <Row className="mb-3">
              <Col>
                <TitleSubtitle {...cosaSignificaTitle} />
                {cosaSignificaText}
              </Col>
            </Row>
            <InfoCard {...cosaSignificaInfo} />
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Approccio
