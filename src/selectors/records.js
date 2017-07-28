import { singularize } from 'inflection';

export const modelOfRecords = state =>
  singularize(state.records.pathvars.model);
