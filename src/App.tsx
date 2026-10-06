import { BrowserRouter as Router, Routes, Route } from "react-router"
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
    <Router>
      <header>
        <NavBar />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contatti" element={<Contatti />} />
          <Route path="/chi-sono" element={<ChiSono />} />
          <Route path="/seduta-online/il-mio-approccio" element={<Approccio />} />
          <Route path="/seduta-online/come-funziona" element={<ComeFunziona />} />
          <Route path="/seduta-online/i-primi-passi" element={<PrimiPassi />} />
        </Routes>
      </main>
      <footer>
        <Footer />
      </footer>
    </Router>
  )
}

export default App
