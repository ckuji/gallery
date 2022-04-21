import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { Spinner, Card } from "react-bootstrap"

const ImageInfo: React.FC = () => {
  const imageId = useParams().id
  const dispatch = useDispatch()
  const fetched: any = useSelector((store) => store)
  console.log(fetched.Info.info)

  useEffect(() => {
    dispatch({ type: "LOAD_IMAGE_INFO", payload: imageId })
  }, [dispatch, imageId])

  return (
    <div>
      {fetched.Info.loadShow && (
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      )}
      {!fetched.Info.loadShow && (
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={fetched.Info.info.url} />
          <Card.Body>
            <Card.Title>{fetched.Info.info.title}</Card.Title>
          </Card.Body>
        </Card>
      )}
    </div>
  )
}

export default ImageInfo
