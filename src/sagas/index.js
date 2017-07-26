import { all, fork } from 'redux-saga/effects';

import { apiToQueryForm, watchChange } from './form';
import { watchDirtyTable, writeThroughModel } from './table';

export default function* root() {
  yield all([
    fork(watchDirtyTable),
    fork(writeThroughModel),
    fork(apiToQueryForm),
    fork(watchChange),
  ]);
}
