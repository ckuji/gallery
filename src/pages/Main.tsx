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

      {store.preloaderShow && (
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      )}

      {!store.preloaderShow && (
        <Images
          category1={store.category1}
          category2={store.category1}
          category3={store.category1}
          category4={store.category1}
        />
      )}
    </>
  )
}

export default Main
