import { Container } from "react-bootstrap"
import LavorareInsiemeSec from "./home/LavorareInsiemeSec"
import ChiSonoSec from "./home/ChiSonoSec"

const Home = () => {
  return (
    <Container className="px-5">
      <div className="mb-5">
        <LavorareInsiemeSec />
      </div>
      <div>
        <ChiSonoSec />
      </div>
    </Container>
  )
}

export default Home
