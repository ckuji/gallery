import {
  legacy_createStore as createStore,
  applyMiddleware,
  combineReducers,
} from "redux"
import createSagaMiddleware from "@redux-saga/core"
import { Images } from "./reducers/imagesReducer"
import { Info } from "./reducers/imageInfoReducer"
import rootSaga from "./sagas"

const sagaMiddleware = createSagaMiddleware()

const rootReducer = combineReducers({ Images, Info })

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware))

sagaMiddleware.run(rootSaga)

export default store
