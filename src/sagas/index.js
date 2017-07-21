import { all, fork } from 'redux-saga/effects';

import { watchDirtyTable } from './table';

export default function* root() {
  yield all([fork(watchDirtyTable)]);
}
