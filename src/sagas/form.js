import { actions } from 'react-redux-form';
import { takeEvery, select, put } from 'redux-saga/effects';

import api from '../api';
import { selectedModelName } from '../selectors/model';
import { modelChangePattern } from '../util/form';

export function* watchChange() {
  yield takeEvery(modelChangePattern('model_selector.model'), function*({
    value,
  }) {
    const model = yield select(selectedModelName);

    yield put(api.actions.model({ model }));
  });
}

// this a postfetch for the api but the api should have no further dependencies
// to the store
export function* apiToQueryForm() {
  yield takeEvery(api.events.model.actionSuccess, function*({ data }) {
    yield put(actions.change('query_interface', data));
  });
}
