import { all, fork } from 'redux-saga/effects';

import { apiToQueryForm, watchChange } from './form';
import { watchDirtyTable } from './table';

export default function* root() {
  yield all([fork(watchDirtyTable), fork(apiToQueryForm), fork(watchChange)]);
}
