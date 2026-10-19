import { Row, Col, Image } from "react-bootstrap"
import TitleSubtitle from "../../components/TitleSubtitle"
import MoreInfoArrow from "../../components/MoreInfoArrow"
import { ArrowApproccio, mioApproccio, ImaText } from "../../texts/home/T_IlMioApproccio"

const IlMioApproccioSec = () => {
  return (
    <>
      <Row>
        <TitleSubtitle {...mioApproccio} />
      </Row>
      <Row>
        <Col lg={5} xl={6} xxl={3}>
          <Image src="/img/hp-approccio.jpg" className="w-100 main-imgs" />
        </Col>
        <Col lg={7} xl={6} xxl={9}>
          <Row xs={1}>
            <Col className="mt-4 mb-2 my-lg-0">{ImaText}</Col>
            <MoreInfoArrow {...ArrowApproccio} />
          </Row>
        </Col>
      </Row>
    </>
  )
}
export default IlMioApproccioSec
