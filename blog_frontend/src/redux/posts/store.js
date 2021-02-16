import {applyMiddleware, createStore} from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger"
import {postReducer} from "./postReducer"

const middlewares = [thunk, logger]

export default function configureStore(initialState) {
    return createStore(postReducer, initialState,
        applyMiddleware(...middlewares))
}
