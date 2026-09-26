import { Container } from "react-bootstrap"
import TitleSubtitle from "../components/TitleSubtitle"
import InfoCard from "../components/InfoCard"
import { ICStress, lavorareInsieme, ButPrimaSeduta, ArrowApproccio } from "../texts/textHome"
import ThemeButton from "../components/ThemeButton"
import MoreInfoArrow from "../components/MoreInfoArrow"
const Home = () => {
  return (
    <Container>
      <TitleSubtitle {...lavorareInsieme} />
      <InfoCard {...ICStress} />
      <ThemeButton {...ButPrimaSeduta} />
      <MoreInfoArrow {...ArrowApproccio} />
    </Container>
  )
}

export default Home
