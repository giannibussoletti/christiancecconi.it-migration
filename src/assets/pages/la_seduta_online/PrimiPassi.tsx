import { Container } from "react-bootstrap"
import CoverPages from "../../components/CoverPages"
import TitleSubtitle from "../../components/TitleSubtitle"

const PrimiPassi = () => {
  return (
    <>
      <CoverPages top="I passi verso" btm={"la tua prima seduta"} />
      <Container>
        <TitleSubtitle title={""} content={""} />
      </Container>
    </>
  )
}

export default PrimiPassi
