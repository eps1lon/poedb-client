import { all, fork, takeEvery, select, put } from 'redux-saga/effects';

import api from '../api';
import { NODE_SELECTED, SHOW_EXPLORER } from '../actions/explorer';
import { exploredRecord } from '../selectors/explorer';
import { modelOfRecords } from '../selectors/records';

function* startExplorer() {
  yield takeEvery(SHOW_EXPLORER, function*({ payload: { record } }) {
    const model = yield select(modelOfRecords);
    const current_record = yield select(exploredRecord);

    if (!current_record || record.row !== current_record.row) {
      yield put(api.actions.record({ model, id: record.row }));
    }
  });
}

function* expandExplorer() {
  yield takeEvery(NODE_SELECTED, function*({ payload: { model, id } }) {
    yield put(api.actions.record({ model, id }));
  });
}

export default function* explorer() {
  yield all([fork(expandExplorer), fork(startExplorer)]);
}
