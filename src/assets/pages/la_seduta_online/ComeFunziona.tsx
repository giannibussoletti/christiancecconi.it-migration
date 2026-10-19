import InfoCard from "../../components/InfoCard"
import { ICSedute } from "../../texts/textSeduteOnline"

const ComeFunziona = () => {
  return (
    <>
      {ICSedute.map((info) => {
        return <InfoCard key={info.icon.iconName} {...info} />
      })}
    </>
  )
}

export default ComeFunziona
