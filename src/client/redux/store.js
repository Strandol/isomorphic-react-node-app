import { createStore, applyMiddleware, compose } from 'redux';
import { createLogger } from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './reducers';
import rootSaga from './sagas';

const logger = createLogger();
const sagaMiddleware = createSagaMiddleware();

const composeWithDevTool = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const middlewares = composeWithDevTool(
  applyMiddleware(logger, sagaMiddleware)
);

const store = createStore(rootReducer, middlewares);

sagaMiddleware.run(rootSaga);

export default store;