import { combineReducers } from 'redux';

import model from './model';
import models from './models';

// empty state for now
const rootReducer = combineReducers({ model, models });

export default rootReducer;
