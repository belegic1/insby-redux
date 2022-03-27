import { createStore, applyMiddleware } from "redux"
import logger from "redux-logger"
import {persistStore} from "redux-persist"
import rootReducer from "./root-reducer"

const middlewarews = [logger]

export const store =  createStore(rootReducer, applyMiddleware(...middlewarews))
export const persistor = persistStore(store)
export default  store
