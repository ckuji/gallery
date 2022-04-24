import { createAction, createReducer } from "@reduxjs/toolkit"

const setImageInfo = createAction<any>("SET_IMAGE_INFO")
const setLoadShowFalse = createAction<any>("SET_PRELOADER_FOR_INFO_FALSE")
const setLoadShowTrue = createAction<any>("UNSET_PRELOADER_FOR_INFO_FALSE")

const Info = createReducer(
  {
    info: {},
    loadShow: true,
  },
  (builder) => {
    builder.addCase(setImageInfo, (state, action) => {
      state.info = action.payload
    })
    builder.addCase(setLoadShowFalse, (state) => {
      state.loadShow = false
    })
    builder.addCase(setLoadShowTrue, (state) => {
      state.loadShow = true
    })
  }
)

export default Info
