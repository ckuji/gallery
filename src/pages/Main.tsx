import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import HeaderNav from "../components/Navbar"
import { Spinner } from "react-bootstrap"
import Images from "../components/Images"

const Main: React.FC = () => {
  const dispatch = useDispatch()
  const store: any = useSelector((store) => store)

  useEffect(() => {
    dispatch({ type: "LOAD_IMAGES" })
  }, [dispatch])

  return (
    <>
      <HeaderNav />

      {store.Images.preloaderShow && (
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      )}

      {!store.Images.preloaderShow && (
        <Images
          category1={store.Images.category1}
          category2={store.Images.category2}
          category3={store.Images.category3}
          category4={store.Images.category4}
        />
      )}
    </>
  )
}

export default Main
