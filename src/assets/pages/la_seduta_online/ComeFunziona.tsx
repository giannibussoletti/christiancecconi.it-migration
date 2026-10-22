import { Container, Row, Col, Image } from "react-bootstrap"
import InfoCard from "../../components/InfoCard"
import { coverCF, ICSeduteNere, ICSeduteRosa, introCF, titleCF } from "../../texts/T_ComeFunziona"
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
          <Col xs={3} className="d-flex align-items-center">
            <Image className="w-100 main-imgs mb-4" src="/img/come-funziona-zen.jpg" />
          </Col>
          <Col xs={9}>
            {ICSeduteRosa.map((info) => {
              return <InfoCard key={info.icon.iconName} {...info} />
            })}
          </Col>
        </Row>
        <Row>
          <Col xs={9}>
            {ICSeduteNere.map((info) => {
              return <InfoCard key={info.icon.iconName} {...info} />
            })}
          </Col>
          <Col xs={3}></Col>
        </Row>
      </Container>
    </>
  )
}

export default ComeFunziona
