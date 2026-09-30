import type { InstagramTypes } from "./fetchTypes"

export const fetchInsta = async (): Promise<InstagramTypes[]> => {
  try {
    const res = await fetch(import.meta.env.VITE_FETCH_URL + "/public/cinemas")

    if (!res.ok) {
      console.log(res)
      throw new Error(res.statusText || `Errore HTTP ${res.status}`)
    }
    const data: InstagramTypes[] = await res.json()

    return data
  } catch (err) {
    console.error(err)
    throw err
  }
}
