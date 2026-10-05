import { Container, Navbar, Nav, NavDropdown, Image } from "react-bootstrap"

const NavBar = () => {
  return (
    <Navbar expand="lg" variant="dark">
      <Container>
        <Image height={35} width={280} src="/svg/logo-nav.svg" />

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Chi Sono</Nav.Link>
            <Nav.Link href="#link-2">Contatti</Nav.Link>
            <NavDropdown title="La seduta online" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Come funziona</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">I primi passi verso la seduta</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">il mio approccio</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavBar
