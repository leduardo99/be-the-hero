import { call, put, takeLatest, all } from "redux-saga/effects";
import { toast } from "react-toastify";

import api from "../../services/api";

import IncidentsActions, { IncidentsTypes } from "../ducks/incidents";

export function* newIncident({ data }) {
  try {
    const { title, description, value } = data;

    yield call(api.post, "incidents", {
      title,
      description,
      value,
    });

    toast.success("O caso foi criado com sucesso!");
  } catch (error) {
    toast.error("Não foi possível criar o caso, tente novamente mais tarde!");
    yield put(IncidentsActions.newIncidentFailure());
  }
}

export function* loadingIncidents() {
  try {
    const response = yield call(api.get, "profile");

    const { incidents } = response.data;

    yield put(IncidentsActions.incidentsSuccess(incidents));
  } catch (error) {
    toast.error("Não foi possível buscar os casos disponíveis.");

    yield put(IncidentsActions.incidentsFailure());
  }
}

export function* removeIncident({ id }) {
  try {
    yield call(api.delete, `incidents/${id}`);

    yield put(IncidentsActions.removeIncidentSuccess(id));

    toast.success("Caso removido com sucesso!");
  } catch (error) {
    toast.error("Não foi possível remover o caso selecionado.");

    yield put(IncidentsActions.removeIncidentFailure());
  }
}

export default all([
  takeLatest(IncidentsTypes.NEW_INCIDENT_REQUEST, newIncident),
  takeLatest(IncidentsTypes.INCIDENTS_REQUEST, loadingIncidents),
  takeLatest(IncidentsTypes.REMOVE_INCIDENT_REQUEST, removeIncident),
]);
