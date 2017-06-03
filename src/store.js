import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { logger } from 'redux-logger';
import reducers from './reducers';
import rootSaga from './sagas';

export default function configureStore() {
  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(
    reducers,
    applyMiddleware(
      sagaMiddleware,
      logger,
    ),
  );
  sagaMiddleware.run(rootSaga);
  return store;
}
