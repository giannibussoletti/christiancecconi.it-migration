import { Col, Container, Row } from "react-bootstrap"
import TitleSubtitle from "../components/TitleSubtitle"
import InfoCard from "../components/InfoCard"
import { ICStress, lavorareInsieme, ButPrimaSeduta, ArrowApproccio } from "../texts/textHome"
import ThemeButton from "../components/ThemeButton"
import MoreInfoArrow from "../components/MoreInfoArrow"
import { ICSedute } from "../texts/textSeduteOnline"
const Home = () => {
  return (
    <Container className="px-5">
      <Row>
        <Col>
          <TitleSubtitle {...lavorareInsieme} />
          <InfoCard {...ICStress} />
          <ThemeButton {...ButPrimaSeduta} />
          <MoreInfoArrow {...ArrowApproccio} />
          {ICSedute.map((info) => {
            return <InfoCard {...info} />
          })}
        </Col>
      </Row>
    </Container>
  )
}

export default Home
