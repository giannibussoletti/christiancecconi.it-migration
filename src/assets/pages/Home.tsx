import { Container } from "react-bootstrap"
import LavorareInsiemeSec from "./home/LavorareInsiemeSec"
import ChiSonoSec from "./home/ChiSonoSec"
import IlMioApproccioSec from "./home/IlMioApproccioSec"
import SocialSec from "./home/SocialSec"
import HeroSec from "./home/HeroSec"

const Home = () => {
  return (
    <>
      <div className="hero-wrapper">
        <HeroSec />
      </div>
      <Container className="px-4">
        <div className="mb-4 mb-lg-5">
          <LavorareInsiemeSec />
        </div>
        <div className="mb-4 mb-md-5">
          <ChiSonoSec />
        </div>
        <div className="mb-4 mb-md-5">
          <IlMioApproccioSec />
        </div>
        <div className="my-4 mb-md-5">
          <SocialSec />
        </div>
      </Container>
    </>
  )
}

export default Home
