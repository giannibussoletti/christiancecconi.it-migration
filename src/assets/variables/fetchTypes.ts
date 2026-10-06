export type InstagramTypes = {
  id: string
  caption: string
  media_type: "IMAGE" | "VIDEO" | "CAROUSEL_ALBUM"
  media_url: string
  permalink: string
  timestamp: string
  children?: instagramChildrenTypes
}

type instagramChildrenTypes = {
  data: ChildrenDataTypes[]
}

type ChildrenDataTypes = {
  id: string
  media_type: "IMAGE" | "VIDEO"
  media_url: string
}
