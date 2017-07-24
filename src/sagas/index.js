import { all, fork } from 'redux-saga/effects';

import { apiToQueryForm, watchChange } from './form';
import { watchDirtyTable, watchHeaderChange } from './table';

export default function* root() {
  yield all([
    fork(watchDirtyTable),
    fork(watchHeaderChange),
    fork(apiToQueryForm),
    fork(watchChange),
  ]);
}
