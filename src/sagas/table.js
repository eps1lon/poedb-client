import { takeEvery, select, put } from 'redux-saga/effects';

import { SET_PAGINATION } from '../actions/table';
import { findAll } from '../actions/records';
import { getWhereObject } from '../selectors/form';

export function* watchPagination() {
  yield takeEvery(SET_PAGINATION, function*() {
    const where = yield select(getWhereObject);
    const { page, page_size } = yield select(state => state.table);

    yield put(findAll({ where, page, page_size }));
  });
}
