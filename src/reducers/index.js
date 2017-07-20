import { combineReducers } from 'redux';
import { createForms } from 'react-redux-form';

import api from '../api';
import forms from './forms';

// empty state for now
const rootReducer = combineReducers({
  ...api.reducers,
  ...createForms(forms),
});

export default rootReducer;
