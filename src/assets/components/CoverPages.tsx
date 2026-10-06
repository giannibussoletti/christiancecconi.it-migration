import { Container, Col, Row } from "react-bootstrap"
import type { H1Title } from "../types"

const CoverPages = ({ top, btm }: H1Title) => {
  return (
    <div className="cover-pages-container">
      <Container fluid className="cover-pages mb-5">
        <Row className="h-100">
          <Col className="d-flex justify-content-center align-items-center">
            <h1>
              {top} <span className="btm">{btm}</span>
            </h1>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default CoverPages
