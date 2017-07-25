import _ from 'lodash';
import { all, fork } from 'redux-saga/effects';

import * as form from './form';
import * as table from './table';

export default function* root() {
  yield all(_.flatten([form, table].map(Object.values)).map(fork));
}
