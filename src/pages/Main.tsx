import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import HeaderNav from "../components/Navbar"

const Main: React.FC = () => {
  const dispatch = useDispatch()
  const store = useSelector((store) => store)

  console.log(store)

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
