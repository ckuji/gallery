import axios from "axios"
import { all, call, put, SagaReturnType, takeEvery } from "redux-saga/effects"
import * as actionTypes from "../actionTypes/imageActionTypes"
import { IInfo } from "../actionTypes/imageActionTypes"
import { IImage } from "../../types/types"

async function loadData(): Promise<IImage[]> {
  const fetched = await axios.get(
    "https://jsonplaceholder.typicode.com/photos?_start=0&_limit=24"
  )
  return fetched.data
}

const waiter = (value: number) =>
  new Promise((resolve) => {
    setTimeout(resolve, value)
  })

export function* setCategories() {
  type LoadData = SagaReturnType<typeof loadData>
  const data: LoadData = yield call(loadData)
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

export function* infoSagaWorker({ type, payload }: actionTypes.getInfoAction) {
  type DataImage = SagaReturnType<typeof loadImageById>

  async function loadImageById(): Promise<IInfo> {
    const fetched = await axios.get(
      `https://jsonplaceholder.typicode.com/photos/${payload}`
    )
    return fetched.data
  }
  const dataImage: DataImage = yield call(loadImageById)
  yield waiter(500)
  yield put({ type: "SET_IMAGE_INFO", payload: dataImage })
  yield put({ type: "SET_PRELOADER_FOR_INFO_FALSE" })
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
