import { createRoot } from "react-dom/client"
import App from "./App.tsx"
import "./assets/css/style.scss"
import { BrowserRouter as Router } from "react-router"
createRoot(document.getElementById("root")!).render(
  <Router>
    <App />
  </Router>,
)
