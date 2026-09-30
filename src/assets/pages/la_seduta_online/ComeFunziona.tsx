import InfoCard from "../../components/InfoCard"
import { ICSedute } from "../../texts/textSeduteOnline"

const ComeFunziona = () => {
  return (
    <>
      {ICSedute.map((info) => {
        return <InfoCard {...info} />
      })}
    </>
  )
}

export default ComeFunziona
