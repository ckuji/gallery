import React, { useEffect } from "react"
import { useDispatch } from "react-redux"
import { useParams } from "react-router-dom"

const ImageInfo: React.FC = () => {
  const imageId = useParams().id
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch({ type: "LOAD_IMAGE_INFO", payload: imageId })
  }, [dispatch])

  return <div>ImageInfo page</div>
}

export default ImageInfo
