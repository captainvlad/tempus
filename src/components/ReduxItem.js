import reducer_1 from "reducer/reducer_1"
import {applyMiddleware, createStore} from "redux"

import loger from "redux-logger"
import thunk from "redux-thunk"
import promise from "redux-promise-middleware"

const middleware = applyMiddleware( promise(), thunk, loger() )

export default createStore(reducer_1, middleware)