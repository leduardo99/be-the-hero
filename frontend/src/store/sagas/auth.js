import { call, put, all, takeLatest } from "redux-saga/effects";
import { toast } from "react-toastify";

import api from "../../services/api";
import history from "../../services/history";

import AuthActions, { AuthTypes } from "../ducks/auth";

export function* signIn({ id }) {
  try {
    const response = yield call(api.post, `sessions/${id}`);

    const { jwt, ong } = response.data;

    yield put(AuthActions.signInSuccess(jwt, ong));

    // api.defaults.headers.Authorization = `Bearer ${token}`;

    history.push("/profile");
  } catch (error) {
    toast.error("Falha na autenticação, verifique seus dados");
    yield put(AuthActions.signFailure());
  }
}

export function* signUp({ data }) {
  const { name, email, whatsapp, city, uf } = data;

  try {
    const response = yield call(api.post, "ongs", {
      name,
      email,
      whatsapp,
      city,
      uf
    });

    const { id } = response.data;

    yield put(AuthActions.signUpSuccess(id));

    toast.success(`Cadastro realizado com sucesso, seu ID: ${id}`);

    history.push("/");
  } catch (error) {
    toast.error("Falha no cadastro, verifique os campos.");
    yield put(AuthActions.signFailure());
  }
}

export function signOut() {
  history.push("/");
}

export default all([
  takeLatest(AuthTypes.SIGN_IN_REQUEST, signIn),
  takeLatest(AuthTypes.SIGN_UP_REQUEST, signUp),
  takeLatest(AuthTypes.SIGN_OUT, signOut)
]);
