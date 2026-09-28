import { Col, Row, Image } from "react-bootstrap"
import TitleSubtitle from "../TitleSubtitle"
import {
  lavorareInsieme,
  LiButtons,
  LiIcArray,
  LITextBottom,
  LITextTop,
} from "../../texts/home/T_LavoreInsieme"
import InfoCard from "../InfoCard"
import ThemeButton from "../ThemeButton"
const LavorareInsiemeSec = () => {
  return (
    <>
      <Row>
        <Col>
          <TitleSubtitle {...lavorareInsieme} />
        </Col>
      </Row>
      <Row xs={1}>
        <Col>
          <Image src="/img/flower-hp.jpg" className="w-100 main-imgs" />
        </Col>
        <Col className="my-4">
          {LITextTop}
          <Row xs={1} className="mt-4">
            {LiIcArray.map((card) => {
              return (
                <Col key={card.title}>
                  <InfoCard {...card} />
                </Col>
              )
            })}
          </Row>
        </Col>
      </Row>
      <Row>
        <Col>
          <p>{LITextBottom}</p>
        </Col>
      </Row>
      <Row>
        <Col className="d-flex justify-content-around flex-wrap">
          {LiButtons.map((button) => {
            return <ThemeButton {...button} />
          })}
        </Col>
      </Row>
    </>
  )
}

export default LavorareInsiemeSec
