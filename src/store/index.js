import { createStore } from 'redux';

import rootReducer from '../reducers';
import middleware from './middleware';

const configureStore = () => {
  const store = createStore(rootReducer, middleware);

  return store;
};

export default configureStore;
