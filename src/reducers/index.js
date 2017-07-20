import { combineReducers } from 'redux';

import api from '../api';

// empty state for now
const rootReducer = combineReducers({ ...api.reducers });

export default rootReducer;
