import { configureStore } from "@reduxjs/toolkit"
import createSagaMiddleware from "@redux-saga/core"
import Images from "./reducers/imagesReducer"
import Info from "./reducers/imageInfoReducer"
import rootSaga from "./sagas"

const sagaMiddleware = createSagaMiddleware()

const reducer = { Images, Info }

const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware),
})

sagaMiddleware.run(rootSaga)

export default store
