import { createReducer, createActions } from "reduxsauce";
import Immutable from "seamless-immutable";

import { AuthTypes } from "./auth";

/* Types & Action Creators */

const { Types, Creators } = createActions({
  actionType: null
});

export const OngTypes = Types;
export default Creators;

/* Initial State */

export const INITIAL_STATE = Immutable({});

/* Reducers to types */

export const reducer = createReducer(INITIAL_STATE, {
  [AuthTypes.SIGN_IN_SUCCESS]: (state, { ong }) => state.merge(ong),
  [AuthTypes.SIGN_OUT]: state => state.replace({})
});
