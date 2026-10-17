import { Container } from "react-bootstrap"
import CoverPages from "../../components/CoverPages"
import TitleSubtitle from "../../components/TitleSubtitle"
import { primiPassiCover, primiPassiTitle } from "../../texts/T_PrimiPassi"

const PrimiPassi = () => {
  return (
    <>
      <CoverPages {...primiPassiCover} />
      <Container>
        <TitleSubtitle {...primiPassiTitle} />
      </Container>
    </>
  )
}

export default PrimiPassi
