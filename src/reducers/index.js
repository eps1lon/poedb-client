import { combineReducers } from 'redux';
import { createForms } from 'react-redux-form';

import api from '../api';
import explorer from './explorer';
import forms from './forms';
import header from './header';
import table from './table';

// empty state for now
const rootReducer = combineReducers({
  ...api.reducers,
  ...createForms(forms),
  explorer,
  header,
  table,
});

export default rootReducer;
