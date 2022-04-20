import { legacy_createStore as createStore, applyMiddleware } from "redux"
import createSagaMiddleware from "@redux-saga/core"
import { Images } from "./reducers/imagesReducer"
import rootSaga from "./sagas"

const sagaMiddleware = createSagaMiddleware()

const store = createStore(Images, applyMiddleware(sagaMiddleware))

sagaMiddleware.run(rootSaga)

export default store
