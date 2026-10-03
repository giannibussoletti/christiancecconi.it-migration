import { Col, Container, Row, Image } from "react-bootstrap"
import { alboAndIva, linkPagine, linkPolicy, linkSocial } from "../texts/T_Footer"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const Footer = () => {
  return (
    <Container>
      <Row className="pt-5 text-center" xs={1} sm={2} md={2} lg={4}>
        <Col>
          <h4>Pagine</h4>
          <ul>
            {linkPagine.map((pag) => {
              return (
                <li key={pag.href}>
                  <a href={pag.href}>{pag.trigger}</a>
                </li>
              )
            })}
          </ul>
        </Col>
        <Col>
          <Row xs={1}>
            {alboAndIva.map((col) => {
              return (
                <Col className={col.title === "partita iva" ? "mb-0 mb-sm-3" : ""} key={col.title}>
                  <h4>{col.title}</h4>
                  {col.content}
                </Col>
              )
            })}
          </Row>
        </Col>
        <Col>
          <Row xs={1}>
            <Col>
              <h4>Social</h4>
              {linkSocial.map((social) => {
                return (
                  <FontAwesomeIcon
                    size="xl"
                    onClick={() => window.open(social.href, "_blank")}
                    key={social.href}
                    icon={social.icon}
                  />
                )
              })}
            </Col>
            <Col className="mb-0 mb-sm-3">
              <h4>Policy</h4>
              <ul>
                {linkPolicy.map((policy) => {
                  return (
                    <li key={policy.href}>
                      <a href={policy.href}>{policy.trigger}</a>
                    </li>
                  )
                })}
              </ul>
            </Col>
          </Row>
        </Col>

        <Col>
          <Image width={150} src="/svg/logo-bianco.svg" />
        </Col>
      </Row>
    </Container>
  )
}

export default Footer
