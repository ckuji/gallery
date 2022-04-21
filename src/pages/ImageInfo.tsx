import React from "react"
import { useParams } from "react-router-dom"

const ImageInfo: React.FC = () => {
  const imageId = useParams().id
  console.log(imageId)

  return <div>ImageInfo page</div>
}

export default ImageInfo
