import InfoCard from "../../components/InfoCard"
import { ICSeduteNere, ICSeduteRosa } from "../../texts/T_SeduteOnline"

const ComeFunziona = () => {
  return (
    <>
      {ICSeduteRosa.map((info) => {
        return <InfoCard key={info.icon.iconName} {...info} />
      })}

      {ICSeduteNere.map((info) => {
        return <InfoCard key={info.icon.iconName} {...info} />
      })}
    </>
  )
}

export default ComeFunziona
