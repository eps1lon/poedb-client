import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';

import configureLogger from './logger';
import rootReducer from '../reducers';

const configureStore = () => {
  const saga_middleware = createSagaMiddleware();

  const store = createStore(
    rootReducer,
    applyMiddleware(saga_middleware, thunkMiddleware, configureLogger()),
  );

  if (module.hot) {
    module.hot.accept('../reducers', () => {
      store.replaceReducer(rootReducer);
    });
  }

  // expose saga run
  store.runSaga = saga_middleware.run;

  return store;
};

export default configureStore;
