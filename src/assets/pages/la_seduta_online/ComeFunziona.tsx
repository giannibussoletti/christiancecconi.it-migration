import { Container, Row, Col } from "react-bootstrap"
import InfoCard from "../../components/InfoCard"
import { coverCF, ICSeduteNere, ICSeduteRosa, introCF, titleCF } from "../../texts/T_ComeFunziona"
import CoverPages from "../../components/CoverPages"
import TitleSubtitle from "../../components/TitleSubtitle"

const ComeFunziona = () => {
  return (
    <>
      <CoverPages {...coverCF} />
      <Container>
        <Row>
          <Col>
            <TitleSubtitle {...titleCF} />
            {introCF}
          </Col>
        </Row>
        <Row>
          <Col></Col>
          <Col>
            {ICSeduteRosa.map((info) => {
              return <InfoCard key={info.icon.iconName} {...info} />
            })}
          </Col>
        </Row>
        <Row>
          <Col>
            {ICSeduteNere.map((info) => {
              return <InfoCard key={info.icon.iconName} {...info} />
            })}
          </Col>
          <Col></Col>
        </Row>
      </Container>
    </>
  )
}

export default ComeFunziona
