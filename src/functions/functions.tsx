import type { InstagramTypes } from "../assets/fetches/fetchTypes"
import { Image } from "react-bootstrap"

export const instaPostGenerator = (array: InstagramTypes[], i: number) => {
  return (
    <div className={i === 1 ? "d-none d-lg-block" : ""}>
      <Image src={array && array[i].media_url} className="w-100 main-imgs mb-4" />
      <p className="fst-italic">
        {array && array[i].caption.slice(0, 200)}...{" "}
        <span
          className="fw-bold fst-normal cursor-pointer"
          onClick={() => window.open(array && array[i].permalink, "_blank")}>
          Vedi il resto del post
        </span>
      </p>
    </div>
  )
}
