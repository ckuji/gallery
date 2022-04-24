import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams, NavLink } from "react-router-dom"
import { Card, ListGroup, ListGroupItem, Button } from "react-bootstrap"
import Loader from "../components/Loader"

const ImageInfo: React.FC = () => {
  const imageId = useParams().id
  const dispatch = useDispatch()
  const fetched: any = useSelector((store) => store)

  useEffect(() => {
    dispatch({ type: "LOAD_IMAGE_INFO", payload: imageId })

    return () => {
      dispatch({ type: "UNSET_PRELOADER_FOR_INFO_FALSE" })
    }
  }, [dispatch, imageId])

  return (
    <div className="imageInfoWrapper">
      <div className="imageInfo">
        {fetched.Info.loadShow && <Loader />}
        {!fetched.Info.loadShow && (
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={fetched.Info.info.url} />
            <Card.Body>
              <Card.Title>{fetched.Info.info.title}</Card.Title>
            </Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroupItem>{`id: ${fetched.Info.info.id}`}</ListGroupItem>
              <ListGroupItem>{`ссылка: ${fetched.Info.info.url}`}</ListGroupItem>
            </ListGroup>
          </Card>
        )}
      </div>
      <NavLink to="/main">
        <Button variant="primary">Назад</Button>
      </NavLink>
    </div>
  )
}

export default ImageInfo
