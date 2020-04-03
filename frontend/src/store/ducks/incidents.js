import { createReducer, createActions } from "reduxsauce";
import Immutable from "seamless-immutable";

/* Types & Action Creators */

const { Types, Creators } = createActions({
  newIncidentRequest: ["data"],
  newIncidentSuccess: ["incident"],
  newIncidentFailure: null
});

export const IncidentsTypes = Types;
export default Creators;

/* Initial State */

export const INITIAL_STATE = Immutable([]);

/* Reducers to types */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.NEW_INCIDENT_SUCCESS]: (state, { incident }) => state.concat(incident)
});
