import axios from "axios"
import { all, call, put, takeEvery } from "redux-saga/effects"

async function loadData() {
  const fetched = await axios.get(
    "https://jsonplaceholder.typicode.com/photos?_start=0&_limit=24"
  )
  return fetched.data
}

const waiter = (value) =>
  new Promise((resolve) => {
    setTimeout(resolve, value)
  })

export function* setCategories() {
  const data = yield call(loadData)
  yield waiter(500)
  yield put({ type: "SET_IMAGES_TO_CAT_1", payload: data.slice(0, 6) })
  yield put({ type: "SET_IMAGES_TO_CAT_2", payload: data.slice(6, 12) })
  yield put({ type: "SET_IMAGES_TO_CAT_3", payload: data.slice(12, 18) })
  yield put({ type: "SET_IMAGES_TO_CAT_4", payload: data.slice(18, 24) })
}

export function* workerSaga() {
  yield call(setCategories)
  yield put({ type: "PRELOADER_TO_FALSE" })
}

export function* infoSagaWorker(action) {
  async function loadImageById() {
    const fetched = await axios.get(
      `https://jsonplaceholder.typicode.com/photos/${action.payload}`
    )
    return fetched.data
  }
  const dataImage = yield call(loadImageById)
  yield waiter(500)
  yield put({ type: "SET_IMAGE_INFO", payload: dataImage })
}

export function* watchLoadImages() {
  yield takeEvery("LOAD_IMAGES", workerSaga)
}

export function* watchLoadImageInfo() {
  yield takeEvery("LOAD_IMAGE_INFO", infoSagaWorker)
}

export default function* rootSaga() {
  yield all([watchLoadImages(), watchLoadImageInfo()])
}
