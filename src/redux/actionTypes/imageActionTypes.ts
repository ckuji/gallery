export const LOAD_IMAGE_INFO = "types/LOAD_IMAGE_INFO"
export interface getInfoAction {
  type: typeof LOAD_IMAGE_INFO
  payload: string
}

export interface IInfo {
  albumId: number
  id: number
  thumbnailUrl: string
  title: string
  url: string
}
