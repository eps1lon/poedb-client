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
