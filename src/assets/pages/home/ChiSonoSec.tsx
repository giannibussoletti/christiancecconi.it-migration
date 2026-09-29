import { Row, Col, Image } from "react-bootstrap"
import { ArrowLeggi, chiSono, CSText } from "../../texts/home/T_ChiSono"
import TitleSubtitle from "../../components/TitleSubtitle"
import MoreInfoArrow from "../../components/MoreInfoArrow"

const ChiSonoSec = () => {
  return (
    <>
      <Row>
        <TitleSubtitle {...chiSono} />
      </Row>
      <Row>
        <Col lg={7} xl={8} xxl={9}>
          <Row xs={1}>
            <Col>
              <Image src="/img/chi-sono-ph-m.jpg" className="w-100 main-imgs d-lg-none" />
            </Col>
            <Col className="my-4 my-lg-0">{CSText}</Col>
            <MoreInfoArrow {...ArrowLeggi} />
          </Row>
        </Col>
        <Col lg={5} xl={4} xxl={3}>
          <Image src="/img/chi-sono-ph.jpg" className="w-100 main-imgs d-none d-lg-inline" />
        </Col>
      </Row>
    </>
  )
}
export default ChiSonoSec
