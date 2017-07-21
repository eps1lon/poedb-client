import { createStore } from 'redux';

import rootReducer from '../reducers';
import middleware from './middleware';

const configureStore = () => {
  const store = createStore(rootReducer, middleware);

  if (process.env.NODE_ENV !== 'production') {
    if (module.hot) {
      module.hot.accept('../reducers', () => {
        store.replaceReducer(rootReducer);
      });
    }
  }

  return store;
};

export default configureStore;
