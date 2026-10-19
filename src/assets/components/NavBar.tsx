import { Container, Navbar, Nav, NavDropdown, Image } from "react-bootstrap"
import { navMenu, sedutaDropdown, sedutaMenu } from "../texts/T_Navbar"
import { useNavigate } from "react-router"

const NavBar = () => {
  const navigate = useNavigate()

  return (
    <Navbar expand="lg" variant="dark" className="z-3">
      <Container>
        <Image height={35} width={280} src="/svg/logo-nav.svg" />

        <Navbar.Toggle />
        <Navbar.Collapse>
          <Nav className="ms-auto gap-lg-4">
            {navMenu.map((nav) => {
              return (
                <Nav.Link key={nav.trigger} onClick={() => navigate(nav.href)}>
                  {nav.trigger}
                </Nav.Link>
              )
            })}
            <NavDropdown title={sedutaMenu}>
              {sedutaDropdown.map((menu) => {
                return (
                  <NavDropdown.Item key={menu.trigger} onClick={() => navigate(menu.href)}>
                    {menu.trigger}
                  </NavDropdown.Item>
                )
              })}
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavBar
