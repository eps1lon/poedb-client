import { takeEvery, select, put } from 'redux-saga/effects';

import { SET_PAGINATION, QUERY_SUBMIT } from '../actions/table';
import { findAll } from '../actions/records';
import { getWhereObject } from '../selectors/form';
import { selectedModelName } from '../selectors/model';

export function* watchDirtyTable() {
  // we simply assume that new data is needed when this actions are dispatched
  // for now we serve the customer and give him new data if he requests it
  yield takeEvery([QUERY_SUBMIT, SET_PAGINATION], function*() {
    const model = yield select(selectedModelName);
    const where = yield select(getWhereObject);
    const { page, page_size } = yield select(state => state.table);

    // on init model is an empty so dont fire a request
    if (typeof model === 'string' && model.length > 0) {
      yield put(findAll({ model, where, page, page_size }));
    }
  });
}