import { fork, takeEvery } from "redux-saga/effects"

async function loadData() {}

export function* workerSaga() {
  console.log("saga started")
}

export function* watchLoadImages() {
  yield takeEvery("LOAD_IMAGES", workerSaga)
}

export default function* rootSaga() {
  yield fork(watchLoadImages)
}
