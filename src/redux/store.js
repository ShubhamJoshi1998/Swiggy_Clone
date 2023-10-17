import { createLogger } from 'redux-logger'
import { applyMiddleware, createStore } from 'redux'
import createSagaMiddleware from 'redux-saga'
import rootReducer from './reducers'
import sagas from './sagas'



const loggerMiddleware = createLogger()

const sagaMiddleware = createSagaMiddleware()

 const store = createStore(rootReducer, applyMiddleware(sagaMiddleware,loggerMiddleware))

 sagaMiddleware.run(sagas)

export default store