import { applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';

const middlewares = [thunkMiddleware];

const middleware = applyMiddleware(...middlewares);

export default middleware;
