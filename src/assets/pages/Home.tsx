import { Container } from "react-bootstrap"
import TitleSubtitle from "../components/TitleSubtitle"
import InfoCard from "../components/InfoCard"
import { ICStress, lavorareInsieme } from "../texts"
const Home = () => {
  return (
    <Container>
      <TitleSubtitle {...lavorareInsieme} />
      <InfoCard {...ICStress} />
    </Container>
  )
}

export default Home
