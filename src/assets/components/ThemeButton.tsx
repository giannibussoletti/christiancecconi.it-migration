import { Button } from "react-bootstrap"
import { useNavigate } from "react-router"
import type { ButtonTypes } from "../types"

const ThemeButton = (buttonProps: ButtonTypes) => {
  const nav = useNavigate()

  return (
    <Button
      variant="dark"
      className="rounded-pill text-uppercase theme-button border-0 px-4 py-2"
      onClick={() => nav(buttonProps.link)}>
      {buttonProps.text}
    </Button>
  )
}

export default ThemeButton
