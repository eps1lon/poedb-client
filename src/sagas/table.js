import { takeEvery, select, put } from 'redux-saga/effects';

import api from '../api';
import { displayHeader } from '../actions/header';
import { FETCH_DATA, QUERY_SUBMIT } from '../actions/table';
import { findAll } from '../actions/records';
import { getWhereObject } from '../selectors/form';
import { getDescription, selectedModelName } from '../selectors/model';

export function* watchDirtyTable() {
  // we simply assume that new data is needed when this actions are dispatched
  // for now we serve the customer and give him new data if he requests it
  yield takeEvery([QUERY_SUBMIT, FETCH_DATA], function*() {
    const model = yield select(selectedModelName);
    const where = yield select(getWhereObject);
    const { page, page_size, order } = yield select(state => state.table);

    // on init model is an empty so dont fire a request
    if (typeof model === 'string' && model.length > 0) {
      yield put(findAll({ model, where, page, page_size, order }));
    }
  });
}

export function* writeThroughModel() {
  yield takeEvery(api.events.records.actionSuccess, function*() {
    const description = yield select(getDescription);
    yield put(displayHeader(description));
  });
}
