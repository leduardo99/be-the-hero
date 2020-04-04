import { createReducer, createActions } from "reduxsauce";
import Immutable from "seamless-immutable";

import { AuthTypes } from "./auth";

/* Types & Action Creators */

const { Types, Creators } = createActions({
  newIncidentRequest: ["data"],
  newIncidentFailure: null,

  incidentsRequest: null,
  incidentsSuccess: ["incidents"],
  incidentsFailure: null,

  removeIncidentRequest: ["id"],
  removeIncidentSuccess: ["id"],
  removeIncidentFailure: null,
});

export const IncidentsTypes = Types;
export default Creators;

/* Initial State */

export const INITIAL_STATE = Immutable([]);

/* Reducers to types */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.INCIDENTS_SUCCESS]: (_, { incidents }) => incidents,
  [Types.REMOVE_INCIDENT_SUCCESS]: (state, { id }) =>
    state.filter((incident) => incident.id !== id),
  [AuthTypes.SIGN_OUT]: () => [],
});
