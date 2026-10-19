import { Routes, Route } from "react-router"
import Home from "./assets/pages/Home"
import Contatti from "./assets/pages/Contatti"
import ChiSono from "./assets/pages/ChiSono"
import Approccio from "./assets/pages/la_seduta_online/Approccio"
import ComeFunziona from "./assets/pages/la_seduta_online/ComeFunziona"
import PrimiPassi from "./assets/pages/la_seduta_online/PrimiPassi"
import Footer from "./assets/components/Footer"
import NavBar from "./assets/components/NavBar"

const App = () => {
  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* Da fare */}
          <Route path="/contatti" element={<Contatti />} />
          {/* Fatta */}
          <Route path="/chi-sono" element={<ChiSono />} />
          {/* Da fare */}
          <Route path="/seduta-online/il-mio-approccio" element={<Approccio />} />
          {/* Da fare */}
          <Route path="/seduta-online/come-funziona" element={<ComeFunziona />} />
          {/* Da fare */}
          <Route path="/seduta-online/i-primi-passi" element={<PrimiPassi />} />
        </Routes>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  )
}

export default App
