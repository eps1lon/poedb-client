import { applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';

import logger from './logger';

const middlewares = [thunkMiddleware];

if (process.env.NODE_ENV !== `production`) {
  middlewares.push(logger);
}

const middleware = applyMiddleware(...middlewares);

export default middleware;
