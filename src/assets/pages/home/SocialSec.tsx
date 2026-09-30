import { Col, Row, Image } from "react-bootstrap"
import { socialTitle } from "../../texts/home/T_SocialSex"
import TitleSubtitle from "../../components/TitleSubtitle"
import { useEffect, useState } from "react"
import { fetchInsta } from "../../fetches"
import type { InstagramTypes } from "../../fetches/fetchTypes"
import { socialArray } from "../../arrays"
import { instaPostGenerator } from "../../../functions/functions"

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
            {instagram && instaPostGenerator(instagram, 0)}
          </Col>
        </Row>
      </Col>
      <Col>
        <Row>
          <Col>
            {instagram && instaPostGenerator(instagram, 1)}
            <Row className="p-2 p-sm-5">
              <Col className="d-flex flex-column justify-content-center">
                <Image src="/svg/logo.svg" />
              </Col>
              <Col className="d-flex flex-column gap-2 justify-content-center">
                {socialArray.map((social) => {
                  return (
                    <Image
                      key={social.imgLink}
                      className="cursor-pointer"
                      src={social.imgLink}
                      onClick={() => window.open(social.pageLink, "_blank")}
                    />
                  )
                })}
              </Col>
            </Row>
          </Col>
        </Row>
      </Col>
    </Row>
  )
}

export default SocialSec
