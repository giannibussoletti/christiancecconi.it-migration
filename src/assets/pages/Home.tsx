import { Container } from "react-bootstrap"
import TitleSubtitle from "../components/TitleSubtitle"
import InfoCard from "../components/InfoCard"
import { ICStress, lavorareInsieme } from "../texts"
import ThemeButton from "../components/ThemeButton"
const Home = () => {
  return (
    <Container>
      <TitleSubtitle {...lavorareInsieme} />
      <InfoCard {...ICStress} />
      <ThemeButton text={""} link={""} />
    </Container>
  )
}

export default Home
