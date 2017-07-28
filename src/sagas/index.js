import { all, fork } from 'redux-saga/effects';

import explorer from './explorer';
import { apiToQueryForm, watchChange } from './form';
import { watchDirtyTable, writeThroughModel } from './table';

export default function* root() {
  yield all([
    fork(explorer),
    fork(watchDirtyTable),
    fork(writeThroughModel),
    fork(apiToQueryForm),
    fork(watchChange),
  ]);
}
