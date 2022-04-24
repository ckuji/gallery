import { createAction, createReducer } from "@reduxjs/toolkit"

const setImages1 = createAction<any>("SET_IMAGES_TO_CAT_1")
const setImages2 = createAction<any>("SET_IMAGES_TO_CAT_2")
const setImages3 = createAction<any>("SET_IMAGES_TO_CAT_3")
const setImages4 = createAction<any>("SET_IMAGES_TO_CAT_4")
const setLoaderShow = createAction<any>("PRELOADER_TO_FALSE")

const Images = createReducer(
  {
    category1: [],
    category2: [],
    category3: [],
    category4: [],
    preloaderShow: true,
  },
  (builder) => {
    builder
      .addCase(setImages1, (state, action) => {
        state.category1 = action.payload
      })
      .addCase(setImages2, (state, action) => {
        state.category2 = action.payload
      })
      .addCase(setImages3, (state, action) => {
        state.category3 = action.payload
      })
      .addCase(setImages4, (state, action) => {
        state.category4 = action.payload
      })
      .addCase(setLoaderShow, (state) => {
        state.preloaderShow = false
      })
  }
)

export default Images
