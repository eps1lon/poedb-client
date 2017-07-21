import { all, fork } from 'redux-saga/effects';

import { watchChange } from './form';
import { watchDirtyTable } from './table';

export default function* root() {
  yield all([fork(watchDirtyTable), fork(watchChange)]);
}
