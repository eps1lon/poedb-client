import { all, fork } from 'redux-saga/effects';

import { watchChange } from './form';
import { resetColumnVisibilityOnNewHeader, watchDirtyTable } from './table';

export default function* root() {
  yield all([
    fork(resetColumnVisibilityOnNewHeader),
    fork(watchDirtyTable),
    fork(watchChange),
  ]);
}
