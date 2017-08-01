import _ from 'lodash';
import { normalize } from 'normalizr';

import { HIDE_EXPLORER, SHOW_EXPLORER } from '../actions/explorer';
import api from '../api';
import * as schema from '../schema/generated';

const initial = {
  entities: {},
  root: -1,
  show: false,
};

const explorer = (state = initial, action) => {
  switch (action.type) {
    case api.events.record.actionSuccess:
      const model_name = action.request.pathvars.model;
      const entity = schema[model_name];

      return _.merge(state, normalize(action.data, entity));
    case SHOW_EXPLORER:
      return {
        ...state,
        entities: {},
        root: action.payload.record.row,
        show: true,
      };
    case HIDE_EXPLORER:
      return {
        ...state,
        root: -1,
        show: false,
      };
    default:
      return state;
  }
};

export default explorer;
