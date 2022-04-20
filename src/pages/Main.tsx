import React, { useEffect } from "react"
import { useDispatch } from "react-redux"
import HeaderNav from "../components/Navbar"

const Main: React.FC = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch({ type: "LOAD_IMAGES" })
  }, [dispatch])

  return (
    <>
      <HeaderNav />
    </>
  )
}

export default Main
