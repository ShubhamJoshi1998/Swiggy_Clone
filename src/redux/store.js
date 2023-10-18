import { createLogger } from 'redux-logger'
import { applyMiddleware, createStore } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import rootReducer from './reducers'
import sagas from './sagas'

const persistConfig = {
    key: 'root',
    storage,
  };


// const loggerMiddleware = createLogger();

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(persistedReducer);
const persistor = persistStore(store);

export { store, persistor };

// const sagaMiddleware = createSagaMiddleware()

//  const store = createStore(rootReducer, applyMiddleware(sagaMiddleware,loggerMiddleware))

//  sagaMiddleware.run(sagas)

// export default store