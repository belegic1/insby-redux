import { createStore, applyMiddleware } from "redux"
import logger from "redux-logger"
import rootReducer from "./root-reducer"

const middlewarews = [logger]

export const store =  createStore(rootReducer, applyMiddleware(...middlewarews))

export default  store
