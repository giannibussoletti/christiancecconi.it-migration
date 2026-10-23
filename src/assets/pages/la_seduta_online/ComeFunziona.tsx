import { Container, Row, Col, Image } from "react-bootstrap"
import InfoCard from "../../components/InfoCard"
import {
  citCF,
  coverCF,
  ICSeduteNere,
  ICSeduteRosa,
  introCF,
  titleCF,
} from "../../texts/T_ComeFunziona"
import CoverPages from "../../components/CoverPages"
import TitleSubtitle from "../../components/TitleSubtitle"

const ComeFunziona = () => {
  return (
    <>
      <CoverPages {...coverCF} />
      <Container>
        <Row className="mb-4">
          <Col>
            <TitleSubtitle {...titleCF} />
            {introCF}
          </Col>
        </Row>
        <Row className="mb-4">
          <Col xs={12} lg={3} className="d-flex align-items-center">
            <Image
              className="w-100 main-imgs mb-4 d-inline d-lg-none d-xl-inline"
              src="/img/come-funziona-zen.jpg"
            />
            <Image
              className="w-100 main-imgs mb-4  d-none d-lg-inline d-xl-none"
              src="/img/come-funziona-zen-v.jpg"
            />
          </Col>
          <Col xs={12} lg={9}>
            {ICSeduteRosa.map((info) => {
              return <InfoCard key={info.icon.iconName} {...info} />
            })}
          </Col>
        </Row>

        <Row>
          <Col xs={12} className="mt-4 mb-2 order-1 order-lg-0">
            {citCF}
          </Col>
          <Col
            xs={12}
            lg={9}
            className="d-flex flex-column justify-content-around order-2 order-lg-0">
            {ICSeduteNere.map((info) => {
              return <InfoCard key={info.icon.iconName} {...info} />
            })}
          </Col>
          <Col xs={12} lg={3}>
            <Image
              className="w-100 main-imgs mb-4 d-inline d-lg-none d-xl-inline"
              src="/img/cuffie-sessione-remota.jpg"
            />
            <Image
              className="w-100 main-imgs mb-4 d-none d-lg-inline d-xl-none"
              src="/img/cuffie-sessione-remota-v.jpg"
            />
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default ComeFunziona
