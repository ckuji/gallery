export interface IImage {
  albumId: number
  id: number
  thumbnailUrl: string
  title: string
  url: string
}

export type ImagesToProps = {
  category1: IImage[]
  category2: IImage[]
  category3: IImage[]
  category4: IImage[]
}
