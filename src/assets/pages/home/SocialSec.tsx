import { Col, Row, Image } from "react-bootstrap"
import { socialTitle } from "../../texts/home/T_SocialSex"
import TitleSubtitle from "../../components/TitleSubtitle"
import { useEffect, useState } from "react"
import { fetchInsta } from "../../fetches"
import type { InstagramTypes } from "../../fetches/fetchTypes"

const SocialSec = () => {
  const [instagram, setInstagram] = useState<InstagramTypes[]>()

  useEffect(() => {
    fetchInsta()
      .then((data) => setInstagram(data.slice(0, 2)))
      .catch((err) => console.error("Errore fetch instagram:", err))
  }, [])

  return (
    <Row xs={1} lg={2}>
      <Col>
        <Row>
          <Col>
            <TitleSubtitle {...socialTitle} />
            <Image src={instagram && instagram[0].media_url} className="w-100 main-imgs mb-4" />
            <p className="fst-italic">
              {instagram && instagram[0].caption.slice(0, 200)}...{" "}
              <span
                className="fw-bold fst-normal cursor-pointer"
                onClick={() => window.open(instagram && instagram[0].permalink, "_blank")}>
                Vedi il resto del post
              </span>
            </p>
          </Col>
        </Row>
      </Col>
      <Col>
        <Row>
          <Col>
            <Image
              src={instagram && instagram[1].media_url}
              className="w-100 main-imgs d-none d-lg-inline mb-4"
            />
            <p className="fst-italic d-none d-lg-block">
              {instagram && instagram[1].caption.slice(0, 200)}...{" "}
              <span
                className="fw-bold fst-normal cursor-pointer"
                onClick={() => window.open(instagram && instagram[1].permalink, "_blank")}>
                Vedi il resto del post
              </span>
            </p>
            <Row className="p-5">
              <Col className="d-flex flex-column justify-content-center">
                <Image src="/svg/logo.svg" />
              </Col>
              <Col className="d-flex flex-column gap-2 justify-content-center">
                <Image src="/svg/fb-button.svg" />
                <Image src="/svg/insta-button.svg" />
              </Col>
            </Row>
          </Col>
        </Row>
      </Col>
    </Row>
  )
}

export default SocialSec
