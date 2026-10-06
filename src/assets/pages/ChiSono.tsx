import { Container, Row, Col, Image } from "react-bootstrap"
import CoverPages from "../components/CoverPages"
import {
  ChiSonoCover,
  ChiSonoText,
  ChiSonoTitle,
  researchList,
  researchTitle,
} from "../texts/T_ChiSono"
import TitleSubtitle from "../components/TitleSubtitle"

const ChiSono = () => {
  return (
    <>
      <CoverPages {...ChiSonoCover} />
      <Container>
        <Row>
          <Col>
            <TitleSubtitle {...ChiSonoTitle} />
          </Col>
        </Row>
        <Row xs={1} lg={2} className="mb-5">
          <Col className="order-1 order-lg-0">{ChiSonoText}</Col>
          <Col className="order-0 order-lg-1">
            <Image className="w-100 main-imgs d-none d-lg-inline" src="/img/chi-sono-pagina.jpg" />
            <Image
              className="w-100 main-imgs d-lg-none d-inline mb-4"
              src="/img/chi-sono-pagina-m.jpg"
            />
          </Col>
        </Row>
        <Row>
          <Col className="research-list">
            <TitleSubtitle title={researchTitle} />
            <ul>
              {researchList.map((ric) => {
                return (
                  <li key={ric.trigger}>
                    <a href={ric.href} target="_blank">
                      {ric.trigger}
                    </a>
                  </li>
                )
              })}
            </ul>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default ChiSono
