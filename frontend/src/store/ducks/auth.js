import { createReducer, createActions } from "reduxsauce";
import Immutable from "seamless-immutable";

/* Types & Action Creators */

const { Types, Creators } = createActions({
  signInRequest: ["id"],
  signInSuccess: ["jwt", "ong"],

  signUpRequest: ["data"],
  signUpSuccess: ["id"],

  signFailure: null,
  signOut: null
});

export const AuthTypes = Types;
export default Creators;

/* Initial State */

const INITIAL_STATE = Immutable({
  authenticated: true,
  ongId: null,
  jwt: null
});

/* Reducers to types */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.SIGN_IN_SUCCESS]: (state, action) =>
    state.merge({ jwt: action.jwt, authenticated: true }),
  [Types.SIGN_UP_SUCCESS]: (state, action) => state.merge({ ongId: action.id }),
  [Types.SIGN_OUT]: state =>
    state.merge({ ongId: null, authenticated: false, jwt: null })
});
