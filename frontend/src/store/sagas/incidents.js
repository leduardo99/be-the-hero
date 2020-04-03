import { call, put, takeLatest, all } from "redux-saga/effects";
import { toast } from "react-toastify";

import api from "../../services/api";

import IncidentsActions, { IncidentsTypes } from "../ducks/incidents";

export function* newIncident({ data }) {
  try {
    const { title, description, value } = data;

    const response = yield call(api.post, "incidents", {
      title,
      description,
      value
    });

    yield put(IncidentsActions.newIncidentSuccess(response.data));

    toast.success("O caso foi criado com sucesso!");
  } catch (error) {
    toast.error("Não foi possível criar o caso, tente novamente mais tarde!");
    yield put(IncidentsActions.newIncidentFailure());
  }
}

export default all([
  takeLatest(IncidentsTypes.NEW_INCIDENT_REQUEST, newIncident)
]);
