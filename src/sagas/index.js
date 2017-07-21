import { all, fork } from 'redux-saga/effects';

import { watchPagination } from './table';

export default function* root() {
  yield all([fork(watchPagination)]);
}
