import { Container } from "react-bootstrap"
import TitleSubtitle from "../components/TitleSubtitle"
import InfoCard from "../components/InfoCard"
import { ICStress, lavorareInsieme, ButPrimaSeduta } from "../texts/textHome"
import ThemeButton from "../components/ThemeButton"
const Home = () => {
  return (
    <Container>
      <TitleSubtitle {...lavorareInsieme} />
      <InfoCard {...ICStress} />
      <ThemeButton {...ButPrimaSeduta} />
    </Container>
  )
}

export default Home
