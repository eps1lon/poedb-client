import { whereObjectBuilder } from '../util/form';

export const getQueryForm = state => state.query_interface;

export const getWhereObject = state => whereObjectBuilder(getQueryForm(state));
