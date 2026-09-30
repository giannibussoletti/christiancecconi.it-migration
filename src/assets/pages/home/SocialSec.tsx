import { Col, Row, Image } from "react-bootstrap"
import { socialTitle } from "../../texts/home/T_SocialSex"
import TitleSubtitle from "../../components/TitleSubtitle"
const SocialSec = () => {
  return (
    <Row xs={1} lg={2}>
      <Col>
        <Row>
          <Col>
            <TitleSubtitle {...socialTitle} />
            <Image src="/img/chi-sono-ph-m.jpg" className="w-100 main-imgs" />
          </Col>
        </Row>
      </Col>
      <Col>
        <Row>
          <Col>
            <Image src="/img/chi-sono-ph-m.jpg" className="w-100 main-imgs d-none d-lg-inline" />
            <Row className="p-5">
              <Col className="d-flex flex-column justify-content-center">
                <Image src="/svg/logo.svg" />
              </Col>
              <Col className="d-flex flex-column gap-2 justify-content-center">
                <Image src="/svg/fb-button.svg" />
                <Image src="/svg/insta-button.svg" />
              </Col>
            </Row>
          </Col>
        </Row>
      </Col>
    </Row>
  )
}

export default SocialSec
