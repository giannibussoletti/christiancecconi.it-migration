import { Container } from "react-bootstrap"
import LavorareInsiemeSec from "./home/LavorareInsiemeSec"
import ChiSonoSec from "./home/ChiSonoSec"
import IlMioApproccioSec from "./home/IlMioApproccioSec"

const Home = () => {
  return (
    <Container className="px-5">
      <div className="mb-5">
        <LavorareInsiemeSec />
      </div>
      <div className="mb-5">
        <ChiSonoSec />
      </div>
      <div className="mb-5">
        <IlMioApproccioSec />
      </div>
    </Container>
  )
}

export default Home
