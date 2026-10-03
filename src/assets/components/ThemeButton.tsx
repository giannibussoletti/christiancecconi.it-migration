import { Button } from "react-bootstrap"
import { useNavigate } from "react-router"
import type { LinkItem } from "../types"

const ThemeButton = (buttonProps: LinkItem) => {
  const nav = useNavigate()

  return (
    <Button
      variant="dark"
      className="rounded-pill text-uppercase theme-button border-0 px-4 py-2 mb-3 mx-3"
      onClick={() => nav(buttonProps.href)}>
      {buttonProps.trigger}
    </Button>
  )
}

export default ThemeButton
