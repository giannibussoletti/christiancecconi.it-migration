import { Container, Col, Row } from "react-bootstrap"
import NavBar from "./NavBar"
import type { H1Title } from "../types"

const CoverPages = ({ top, btm }: H1Title) => {
  return (
    <>
      <Container fluid className="cover-pages mb-5">
        <NavBar />
        <Row className="h-75">
          <Col className="d-flex justify-content-center align-items-center">
            <h1>
              {top} <span className="btm">{btm}</span>
            </h1>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default CoverPages
