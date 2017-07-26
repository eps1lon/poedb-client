import _ from 'lodash';
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

/**
 * @param {AttributeDescription} attribute 
 */
const buildFormModelFromAttribute = attribute => {
  return {
    ...attribute,
    enabled: false,
    operator: '$eq',
    value: '',
  };
};

// this a postfetch for the api but the api should have no further dependencies
// to the store
export function* apiToQueryForm() {
  yield takeEvery(api.events.model.actionSuccess, function*({
    data: { attributes },
  }) {
    yield put(
      actions.change('query_interface', {
        attributes: _.mapValues(attributes, buildFormModelFromAttribute),
      }),
    );
  });
}
