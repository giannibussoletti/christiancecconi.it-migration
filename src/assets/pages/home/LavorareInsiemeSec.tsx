import { Col, Row, Image } from "react-bootstrap"
import TitleSubtitle from "../../components/TitleSubtitle"
import {
  lavorareInsieme,
  LiButtons,
  LiIcArray,
  LITextBottom,
  LITextTop,
} from "../../texts/home/T_LavoreInsieme"
import InfoCard from "../../components/InfoCard"
import ThemeButton from "../../components/ThemeButton"
const LavorareInsiemeSec = () => {
  return (
    <>
      <Row>
        <TitleSubtitle {...lavorareInsieme} />
      </Row>
      <Row xs={1} className="mb-2 mb-lg-4">
        <Col lg={3}>
          <Image src="/img/flower-hp.jpg" className="w-100 main-imgs" />
        </Col>
        <Col lg={9} className="my-4 mt-lg-0">
          {LITextTop}
        </Col>
      </Row>
      <Row xs={1} xl={3}>
        {LiIcArray.map((card) => {
          return (
            <Col key={card.title} className="p-0">
              <InfoCard {...card} />
            </Col>
          )
        })}
        <Col>
          <p>{LITextBottom}</p>
          <div className="d-lg-flex justify-content-around flex-wrap text-center">
            {LiButtons.map((button) => {
              return <ThemeButton key={button.trigger} {...button} />
            })}
          </div>
        </Col>
      </Row>
    </>
  )
}

export default LavorareInsiemeSec
